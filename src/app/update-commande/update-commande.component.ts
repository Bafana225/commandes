import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Commande } from '../model/commande.model';
import { CommandeService } from '../services/commande.service';



@Component({
  selector: 'app-update-commande',
  templateUrl: './update-commande.component.html',
  styles: [
  ]
})
export class UpdateCommandeComponent implements OnInit {

  currentCommande = new Commande();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.commandeService.consulterCommande(this.activatedRoute.snapshot.params['id']).
      subscribe(cmd => { this.currentCommande = cmd; });
  }

  updateCommande() {
    this.commandeService.updateCommande(this.currentCommande).subscribe(cmd => {
      this.router.navigate(['commandes']);
    }
    );
  }

}