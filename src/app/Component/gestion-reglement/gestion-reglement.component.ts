import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reglement } from 'src/app/models/reglement';
import { ReglementserviceService } from 'src/app/services/reglementservice.service';


@Component({
  selector: 'app-gestion-reglement',
  templateUrl: './gestion-reglement.component.html',
  styleUrls: ['./gestion-reglement.component.css']
})
export class GestionReglementComponent implements OnInit{
  reglements: Reglement[] = [];
  selectedReglementId!: number ;

  constructor(private reglementService: ReglementserviceService,private router:Router) { }

  ngOnInit() {
    this.loadReglements();
  }
  loadReglements(){
    this.reglementService.getAllReglement().subscribe(
      data=>{this.reglements=data}
    );
  }
  initiatePayment() {
    if (this.selectedReglementId !== null) {
      this.reglementService.payReglement(this.selectedReglementId).subscribe(
        (response) => {
          console.log('Paiement réussi:', response);
          // Vous pouvez ajouter une logique supplémentaire ou une navigation après un paiement réussi
        },
        (error) => {
          console.error('Erreur lors du paiement:', error);
          // Gérez l'erreur selon vos besoins
        }
      );
    } else {
      console.warn('Aucun règlement sélectionné pour le paiement.');
    }
  }
  
  
}
