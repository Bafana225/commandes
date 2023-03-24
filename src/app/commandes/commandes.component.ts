import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commandes.component.html',
})

export class CommandesComponent implements OnInit{

  commandes? : Commande[]; 

  constructor(private commandeService: CommandeService) {
      this.commandes=[];
     }

  ngOnInit(): void {

    this.commandes = this.commandeService.listeCommandes();
  }

}
