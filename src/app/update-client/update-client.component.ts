import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../model/client.model';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styles: [
  ]
})
export class UpdateClientComponent implements OnInit {

  currentClient = new Client();

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.consulterClient(this.activatedRoute.snapshot.params['id']).
      subscribe(cli => { this.currentClient = cli; });
  }

  updateClient() {
    this.clientService.updateClient(this.currentClient).subscribe(cli => {
      this.router.navigate(['clients']);
    }
    );
  }

}
