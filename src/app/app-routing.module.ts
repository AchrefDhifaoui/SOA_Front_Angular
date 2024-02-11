import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModePaymentComponent } from './Component/mode-payment/mode-payment.component';
import { SidBarComponent } from './Component/sid-bar/sid-bar.component';
import { GestionReglementComponent } from './Component/gestion-reglement/gestion-reglement.component';
import { StatistiqueFactureComponent } from './Component/statistique-facture/statistique-facture.component';
import { StatistiqueReglementComponent } from './Component/statistique-reglement/statistique-reglement.component';

const routes: Routes = [
  {path:'payerFacutre',component:ModePaymentComponent},

  {path:'gestionReglement',component:GestionReglementComponent},
  {path:'statistiqueFacture',component:StatistiqueFactureComponent},
  {path:'statistiqueReglement',component:StatistiqueReglementComponent},
  {path:'sidbar',component:SidBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
