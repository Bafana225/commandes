import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { CommandesComponent } from './commandes/commandes.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    CommandesComponent,
    AddCommandeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
