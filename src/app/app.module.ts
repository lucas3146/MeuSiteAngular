import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { JogosComponent } from './jogos/jogos.component';
import { ClienteComponent } from './cliente/cliente.component';
import{ReactiveFormsModule}from'@angular/forms';

// Import de api
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FormularioComponent } from './clientes/formulario/formulario.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { NovidadesComponent } from './novidades/novidades.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    JogosComponent,
    ClienteComponent,
    FormularioComponent,
    DestaqueComponent,
    NovidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
