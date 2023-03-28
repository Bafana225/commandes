import { Client } from "./client.model";

export class Commande {
    id! : number;
    dateCommande! : Date;
    montantTotal! : number;
    client! : Client;
    }