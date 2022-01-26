import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ExplorerComponent } from './page/explorer/explorer.component';
import { AlojarComponent } from './page/alojar/alojar.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'explorer',
    component:ExplorerComponent
  },
  {
    path:'alojar/publicar',
    component:AlojarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
