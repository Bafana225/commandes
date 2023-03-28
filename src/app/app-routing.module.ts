import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './commandes/commandes.component';
import { ClientsComponent } from './clients/clients.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';
import { AddClientComponent } from './add-client/add-client.component';
import { UpdateClientComponent } from './update-client/update-client.component';


const routes: Routes = [
  {path: "commandes", component : CommandesComponent},
  {path: "clients", component : ClientsComponent},
  {path: "add-commande", component : AddCommandeComponent},
  {path: "update-commande/:id", component : UpdateCommandeComponent},
  {path: "add-client", component : AddClientComponent},
  {path: "update-client/:id", component : UpdateClientComponent},
  {path: "", redirectTo: "commandes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }