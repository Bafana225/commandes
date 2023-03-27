import { Component, OnInit } from '@angular/core';
import { Commande } from '../model/commande.model';
import { Router } from '@angular/router';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commandes.component.html',
})

export class CommandesComponent implements OnInit {

  commandes?: Commande[];

  constructor(private commandeService: CommandeService, 
    private router : Router,) {
  }

  ngOnInit(): void {

    this.chargerCommandes();
  }

  chargerCommandes() {
    this.commandeService.listeCommande().subscribe(cmds => {
      console.log(cmds);
      this.commandes = cmds;
    });
  }

  supprimerCommande(c: Commande) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.commandeService.supprimerCommande(c.idCommande).subscribe(() => {
        console.log("commande supprimée");
        this.chargerCommandes();
      });
  }

}
