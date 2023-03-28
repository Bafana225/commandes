import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../model/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html'
})
export class AddClientComponent implements OnInit {

  newClient = new Client();

  constructor(private clientService: ClientService,
              private router : Router) { }

  ngOnInit(): void {
    }
  
  addClient(){
    this.clientService.ajouterClient(this.newClient)
    .subscribe(cli => {
      console.log(cli);
      this.router.navigate(['clients']);
    });
    }

}
