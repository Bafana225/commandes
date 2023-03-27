import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandesComponent } from './commandes/commandes.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';


const routes: Routes = [
  {path: "commandes", component : CommandesComponent},
  {path: "add-commande", component : AddCommandeComponent},
  {path: "update-commande/:id", component : UpdateCommandeComponent},
  {path: "", redirectTo: "commandes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }