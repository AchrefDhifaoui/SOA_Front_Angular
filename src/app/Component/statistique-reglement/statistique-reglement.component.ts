import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ReglementserviceService } from 'src/app/services/reglementservice.service';

@Component({
  selector: 'app-statistique-reglement',
  templateUrl: './statistique-reglement.component.html',
  styleUrls: ['./statistique-reglement.component.css']
})
export class StatistiqueReglementComponent implements OnInit, AfterViewInit {
  @ViewChild('myBarChart', { static: false }) barChart!: ElementRef;
  @ViewChild('myDoughnutChart', { static: false }) doughnutChart!: ElementRef;

  nmbrReglementEnEspece?: number;
  nmbrReglementEnLigne?: number;
  nmbrReglementEnCheque?: number;
  SumReglementLast7Days: any[] = [];
  SumReglementLast7Months: any[] = [];
  SumReglementLast7Years: any[] = [];

  selectedChartData: any[] = [];
  //------------------
  
  //------------------

  constructor(private service_reglement: ReglementserviceService) {}

  ngOnInit(): void {
    this.getDataFromApi();
  }

  ngAfterViewInit() {
    // Render the bar chart after the view has been initialized
    this.renderBarChart();
    this.renderDoughnutChart();
  }

  getDataFromApi() {
    // Fetch all necessary data
    this.getnmbrReglementEnEspece();
    this.getnmbrReglementEnLigne();
    this.getnmbrReglementEnCheque();
    this.getSumReglementLast7Days();
    this.getSumReglementLast7Months();
    this.getSumReglementLast7Years();
  }

  getnmbrReglementEnEspece() {
    this.service_reglement.getnmbrReglementEnEspece().subscribe(data => {
      this.nmbrReglementEnEspece = data;
      this.renderDoughnutChart();
    });
  }

  getnmbrReglementEnLigne() {
    this.service_reglement.getnmbrReglementEnLigne().subscribe(data => {
      this.nmbrReglementEnLigne = data;
      this.renderDoughnutChart();
    });
  }

  getnmbrReglementEnCheque() {
    this.service_reglement.getnmbrReglementEnCheque().subscribe(data => {
      this.nmbrReglementEnCheque = data;
      this.renderDoughnutChart();
    });
  }

  getSumReglementLast7Days() {
    this.service_reglement.getTotalAmountPerDayLast7Days().subscribe(data => {
      this.SumReglementLast7Days = data;
    });
  }

  getSumReglementLast7Months() {
    this.service_reglement.getTotalAmountPerDayLast7Months().subscribe(data => {
      this.SumReglementLast7Months = data;
    });
  }

  getSumReglementLast7Years() {
    this.service_reglement.getTotalAmountPerDayLast7Years().subscribe(data => {
      this.SumReglementLast7Years = data;
      
      // After fetching all data, set the default selected data
      this.selectedChartData = this.SumReglementLast7Years;

      // Render the bar chart with the default selected data
      this.renderBarChart();
    });
  }

  // Update the chart data based on the selected radio button
  updateChartData(selectedOption: string) {
    switch (selectedOption) {
      case 'days':
        this.selectedChartData = this.SumReglementLast7Days;
        break;
      case 'months':
        this.selectedChartData = this.SumReglementLast7Months;
        break;
      case 'years':
        this.selectedChartData = this.SumReglementLast7Years;
        break;
      default:
        break;
    }

    // Render the bar chart with the updated data
    this.renderBarChart();
  }

  renderBarChart() {
    console.log('Data:', this.selectedChartData);

    const canvas: HTMLCanvasElement | null = this.barChart?.nativeElement;

    if (!canvas) {
      console.error('Canvas element not found.');
      return;
    }

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

    if (!ctx) {
      console.error('Canvas 2D context not available.');
      return;
    }

    // Destroy existing chart before creating a new one
    Chart.getChart(ctx)?.destroy();

    const data = {
      labels: this.selectedChartData.map(item => item.reglement_date),
      datasets: [
        {
          label: 'Somme des mantants de reglement  ',
          data: this.selectedChartData.map(item => item.total_amount),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'],
          borderWidth: 1
        }
      ]
    };

    const options = {
      
    };

    Chart.register(...registerables);

    // Use 'Chart' from the type definitions
    const myBarChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }

  renderDoughnutChart() {
    const canvas: HTMLCanvasElement | null = this.doughnutChart?.nativeElement;

    if (!canvas) {
      console.error('Canvas element not found.');
      return;
    }

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

    if (!ctx) {
      console.error('Canvas 2D context not available.');
      return;
    }

    // Destroy existing chart before creating a new one
    Chart.getChart(ctx)?.destroy();

    const data = {
      labels: ['En Espece', 'En Ligne', 'En Cheque'],
      datasets: [
        {
          data: [this.nmbrReglementEnEspece, this.nmbrReglementEnLigne, this.nmbrReglementEnCheque],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(255, 205, 86, 0.7)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
          ],
          borderWidth: 1
        }
      ]
    };

    const options = {
      // Add any additional chart options here
    };

    Chart.register(...registerables);

    // Use 'Chart' from the type definitions
    const myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });
  }
}
