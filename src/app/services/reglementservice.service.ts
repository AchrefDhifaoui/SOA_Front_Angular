import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Reglement } from '../models/reglement';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ReglementserviceService {
private apiUrl='http://localhost:8089/api/reglements';
private FactureapiUrl='http://localhost:8089/gestionFacture';
private ReglementapiUrl='http://localhost:8089/api/reglements';
  constructor(private http: HttpClient) { }
  

getnmbrReglementEnEspece():Observable<any>{
  return this.http.get(`${this.ReglementapiUrl}/nmbrReglementEnEspece`);
}
getnmbrReglementEnCheque():Observable<any>{
  return this.http.get(`${this.ReglementapiUrl}/nmbrReglementEnCheque`);
}
getnmbrReglementEnLigne():Observable<any>{
  return this.http.get(`${this.ReglementapiUrl}/nmbrReglementEnligne`);
}
getTotalAmountPerDayLast7Days():Observable<any>{
  return this.http.get<any[]>(`${this.ReglementapiUrl}/findTotalAmountPerDayLast7Days`);
}
getTotalAmountPerDayLast7Months():Observable<any>{
  return this.http.get<any[]>(`${this.ReglementapiUrl}/getTotalAmountPerMonthLast7Months`);
}
getTotalAmountPerDayLast7Years():Observable<any>{
  return this.http.get<any[]>(`${this.ReglementapiUrl}/findTotalAmountPerYearLast7Years`);
}
getnmbrFacturePayee():Observable<any>{
  return this.http.get(`${this.FactureapiUrl}/nmbrFacturePayee`);
}
getnmbrFactureNonPayee():Observable<any>{
  return this.http.get(`${this.FactureapiUrl}/nmbrFactureNonPayee`);
}
getnmbrFactureInconnue():Observable<any>{
  return this.http.get(`${this.FactureapiUrl}/nmbrFactureInconnue`);
}
getclientNonPayee():Observable<Client[]>{
  return this.http.get<Client[]>(`${this.FactureapiUrl}/clientNonPayee`);
}
getnmbrFactureLast7Days():Observable<any[]>{
  return this.http.get<any[]>(`${this.FactureapiUrl}/nmbrFactureLast7Days`);
}
getnmbrFactureLast7Months():Observable<any[]>{
  return this.http.get<any[]>(`${this.FactureapiUrl}/nmbrFactureLast7Months`);
}
getnmbrFactureLast7Years():Observable<any[]>{
  return this.http.get<any[]>(`${this.FactureapiUrl}/nmbrFactureLast7Years`);
}




   
getAllReglement():Observable<Reglement[]>{
  return this.http.get<Reglement[]>(this.apiUrl+'/all');
}
getReglementsByClientId(clientId :number):Observable<Reglement[]>{
  return this.http.get<Reglement[]>(`${this.apiUrl}/byClientId/${clientId}`);
}
getReglementById(reglementId: number): Observable<Reglement[]> {
  return this.http.get<Reglement[]>(`${this.apiUrl}/${reglementId}`);
}

payReglement(reglementId: number): Observable<Reglement[]> {
  return this.http.post<Reglement[]>(`${this.apiUrl}/pay/${reglementId}`, {});
}

payAllReglementsByClientId(clientId: number): Observable<void> {
  return this.http.post<void>(`${this.apiUrl}/payAll/${clientId}`, {});
}

getClientDetails(clientId: number): Observable<Client[]> {
  return this.http.get<Client[]>(`${this.apiUrl}/clientDetails/${clientId}`);
}
getClientparmotpass(email: string, password: string): Observable<any> {
  
  const url = `${this.apiUrl}/getClientparmotpass`;
  return this.http.get(url, { params: { email, password } });
}
private apiUrl1 = 'http://localhost:8089/api/reglements/getClientparmotpass'; 
getClientByEmail(email: string, password: string): Observable<any> {
  const url = `${this.apiUrl1}?email=${email}&motdepass=${password}`;
  return this.http.get(url, { withCredentials: true });
}
}
