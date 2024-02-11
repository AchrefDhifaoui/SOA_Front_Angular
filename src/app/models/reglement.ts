
import { Client } from "./client";
import { EtatPaiement } from "./etatPaiement";
import { Facture } from "./facture";

export class Reglement {
    idRegelment!:number;
    dateReglement!: Date;
    montantTotal!: number;
    modePaiement!: string;
    paye!: boolean;
    etatPaiement!: EtatPaiement;
    facture!: Facture;
    client!: Client;
}