import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './page/home-page/home-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { ExplorerComponent } from './page/explorer/explorer.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { AlojarComponent } from './page/alojar/alojar.component';


@NgModule({
  declarations: [
    HomePageComponent,
    CardHomeComponent,
    ExplorerComponent,
    FormularioComponent,
    AlojarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
