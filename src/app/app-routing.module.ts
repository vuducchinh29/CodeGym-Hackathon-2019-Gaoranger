import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Manhinh03Component} from './manhinh03/manhinh03.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'questions/:id',
    component: Manhinh03Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
