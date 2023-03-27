import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { CommandesComponent } from './commandes/commandes.component';
import { AddCommandeComponent } from './add-commande/add-commande.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCommandeComponent } from './update-commande/update-commande.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    CommandesComponent,
    AddCommandeComponent,
    UpdateCommandeComponent,
    
    
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
