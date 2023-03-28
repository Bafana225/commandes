import { Injectable } from '@angular/core';
import { Client } from '../model/client.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})

export class ClientService {
    apiURL: string = 'http://localhost:8080/commandes/clients-api';
    clients! : Client[]; 
  
  constructor(private http : HttpClient) { }

  listeClient(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiURL);
  }

  ajouterClient(client: Client): Observable<Client> {
    console.log(client);
    return this.http.post<Client>(this.apiURL, client, httpOptions);
  }

  supprimerClient(id: number) {
    console.log("Client supprimé");
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  consulterClient(id: number): Observable<Client> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Client>(url);
  }

  updateClient(client: Client): Observable<Client> {
    return this.http.put<Client>(this.apiURL, client, httpOptions);
  }

}
