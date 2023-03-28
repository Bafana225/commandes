import { Injectable } from '@angular/core';
import { Commande } from '../model/commande.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})

export class CommandeService {
    apiURL: string = 'http://localhost:8080/commandes/api';
    commandes! : Commande[]; 
  
  constructor(private http : HttpClient) { }

  listeCommande(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.apiURL);
  }

  ajouterCommande(com: Commande): Observable<Commande> {
    console.log(com);
    return this.http.post<Commande>(this.apiURL, com, httpOptions);
  }

  supprimerCommande(id: number) {
    console.log("Commande supprimée");
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }


  consulterCommande(id: number): Observable<Commande> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Commande>(url);
  }

  updateCommande(com: Commande): Observable<Commande> {
    return this.http.put<Commande>(this.apiURL, com, httpOptions);
  }

}