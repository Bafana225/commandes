import { Injectable } from '@angular/core';
import { Commande } from '../model/commande.model';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {

    commandes : Commande[]; 
  
  constructor() { 
    this.commandes = [{dateCommande :  new Date("08/10/2011"), montantTotal : 256.600},
                    {dateCommande :  new Date("12/08/2011"), montantTotal : 3520.60},
                    {dateCommande :  new Date("09/11/2011"), montantTotal : 5200.0}
                    ];
    
  }

  listeCommandes():Commande[] {
    return this.commandes;
    }

  ajouterCommande( com: Commande){
      this.commandes.push(com);
      }
}