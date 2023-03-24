import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelComponent } from './model/model.component';
import { ClientComponent } from './client/client.component';
import { CommandeComponent } from './commande/commande.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    ClientComponent,
    CommandeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
