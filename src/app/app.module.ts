import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionReglementComponent } from './Component/gestion-reglement/gestion-reglement.component';
import { GestionFactureComponent } from './Component/gestion-facture/gestion-facture.component';
import { ModePaymentComponent } from './Component/mode-payment/mode-payment.component';
import { HttpClientModule } from '@angular/common/http';
import { SidBarComponent } from './Component/sid-bar/sid-bar.component';
import { LoginComponent } from './Component/login/login.component';
import { StatistiqueFactureComponent } from './Component/statistique-facture/statistique-facture.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { StatistiqueReglementComponent } from './Component/statistique-reglement/statistique-reglement.component';
@NgModule({
  declarations: [
    AppComponent,
    GestionReglementComponent,
    GestionFactureComponent,
    ModePaymentComponent,
    SidBarComponent,
    LoginComponent,
    StatistiqueFactureComponent,
    StatistiqueReglementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, 
    FormsModule,
    CanvasJSAngularChartsModule // Add ReactiveFormsModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
