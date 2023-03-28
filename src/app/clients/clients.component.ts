import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client.model';
import { Router } from '@angular/router';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './clients.component.html',
})

export class ClientsComponent implements OnInit {

  clients?: Client[];

  constructor(private clientService: ClientService, 
    private router : Router,) {
  }

  ngOnInit(): void {

    this.chargerClients();
  }

  chargerClients() {
    this.clientService.listeClient().subscribe(clients => {
      console.log(clients);
      this.clients = clients;
    });
  }

  supprimerClient(c: Client) {
    console.log(c.id);
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.clientService.supprimerClient(c.id).subscribe(() => {
        console.log("client supprimé");
        this.chargerClients();
      });
  }

}
