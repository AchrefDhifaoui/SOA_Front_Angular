import { Client } from "./client";
import { EtatPaiement } from "./etatPaiement";
import { Reglement } from "./reglement";

export class Facture {
    idFacture!: number;
    montantTotal!: number;
    dateFacture!: Date;
    client!: Client;
    reglements!: Reglement[];
    etatPaiement!: EtatPaiement;
}
