import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ReglementserviceService } from 'src/app/services/reglementservice.service';
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-statistique-facture',
  templateUrl: './statistique-facture.component.html',
  styleUrls: ['./statistique-facture.component.css']
})
export class StatistiqueFactureComponent implements OnInit, AfterViewInit  {
  @ViewChild('myPieChart', { static: false }) pieChart!: ElementRef;
  @ViewChild('myBarChart', { static: false }) barChart!: ElementRef;
  nmbrFactureInconnue? : number;
  nmbrFactureNonPayee? : number;
  nmbrFacturePayee? : number;
  ClientNonPayee? : Client[] =[] ;
  nmbrFactureLast7Days : any[] = [] ;
  nmbrFactureLast7Months : any[] = [];
  nmbrFactureLast7Years : any[] = [] ;
  selectedChartData: any[] = [];


  constructor(private service_reglement:ReglementserviceService){}
  ngOnInit(): void {
    this.getDataFromAPI();

  }
  getDataFromAPI(){
    this.getnmbrFactureInconnue();
    this.getnmbrFactureNonPayee();
    this.getnmbrFacturePayee();
    this.getClientNonPayee();
    this.getNmbrFactureLast7Days();
    this.getNmbrFactureLast7Months();
    this.getNmbrFactureLast7Years();

  }
  ngAfterViewInit() {
    // Render the pie chart after the view has been initialized
    this.renderPieChart();
    this.renderBarChart();
  }

  getnmbrFactureInconnue(){
    this.service_reglement.getnmbrFactureInconnue().subscribe(data => {this.nmbrFactureInconnue = data
      this.renderPieChart();
    })
  }
  getnmbrFactureNonPayee(){
    this.service_reglement.getnmbrFactureNonPayee().subscribe(data => {this.nmbrFactureNonPayee = data
      this.renderPieChart();
    })
  }
  getnmbrFacturePayee(){
    this.service_reglement.getnmbrFacturePayee().subscribe(data => {this.nmbrFacturePayee = data
      this.renderPieChart();
    })
  }
  getClientNonPayee(){
    this.service_reglement.getclientNonPayee().subscribe(data => {this.ClientNonPayee = data
      
    })
  }
  getNmbrFactureLast7Days(){
    this.service_reglement.getnmbrFactureLast7Days().subscribe((data) =>{this.nmbrFactureLast7Days = data
      this.renderBarChart();
    })
  }
  getNmbrFactureLast7Months(){
    this.service_reglement.getnmbrFactureLast7Months().subscribe((data) =>{this.nmbrFactureLast7Months = data
      this.renderBarChart();
    })
  }
  getNmbrFactureLast7Years(){
    this.service_reglement.getnmbrFactureLast7Years().subscribe((data) =>{this.nmbrFactureLast7Years = data
      this.selectedChartData = this.nmbrFactureLast7Years;
      this.renderBarChart();
    })
  }

  renderPieChart() {
    const canvas: HTMLCanvasElement | null = this.pieChart?.nativeElement;

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
      labels: ['Facture Inconnue', 'Facture Non Payée', 'Facture Payée'],
      datasets: [
        {
          data: [this.nmbrFactureInconnue, this.nmbrFactureNonPayee, this.nmbrFacturePayee],
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
    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: options
    });
  }
  updateChartData(selectedOption: string) {
    switch (selectedOption) {
      case 'days':
        this.selectedChartData = this.nmbrFactureLast7Days;
        break;
      case 'months':
        this.selectedChartData = this.nmbrFactureLast7Months;
        break;
      case 'years':
        this.selectedChartData = this.nmbrFactureLast7Years;
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

    const datasets = [
      {
        label: 'Nombre des factures',
        data: this.selectedChartData.map(item => item.factureCount),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ];
  
    const data = {
      labels: this.selectedChartData.map(item => item.factureDate),
      datasets: datasets
    };

    const options = {
      
    };

    Chart.register(...registerables);

    // Use 'Chart' from the type definitions
    const myBarChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  }
  

}

