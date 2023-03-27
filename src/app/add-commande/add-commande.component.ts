import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../model/commande.model';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html'
})
export class AddCommandeComponent implements OnInit {

  newCommande = new Commande();

  constructor(private commandeService: CommandeService,
              private rooter : Router) { }

  ngOnInit(): void {
    }
  
  addCommande(){
    this.commandeService.ajouterCommande(this.newCommande)
    .subscribe(com => {
      console.log(com);
      this.rooter.navigate(['commandes']);
    });
    }

}
