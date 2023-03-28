import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { CommandesComponent } from './commandes/commandes.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';
import { UpdateClientComponent } from './update-client/update-client.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { AddClientComponent } from './add-client/add-client.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    CommandesComponent,
    AddCommandeComponent,
    UpdateCommandeComponent,
    AddClientComponent,
    UpdateClientComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
