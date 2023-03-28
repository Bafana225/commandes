import { Commande } from "./commande.model";

export class Client {
    id! : number;
    nom! : string;
    prenom! : string;
    email! : string;
    telephone! : string;
    commandes! : Commande[];
    }