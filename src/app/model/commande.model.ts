import { Client } from "./client.model";

export class Commande {
    idProduit! : number;
    nomProduit! : string;
    prixProduit! : number;
    dateCreation! : Date ;
    client! : Client;
    }