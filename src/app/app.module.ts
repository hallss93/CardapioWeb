import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { InsercaoComponent } from './insercao/insercao.component';
import { ListagemComponent } from './listagem/listagem.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    InsercaoComponent,
    ListagemComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
