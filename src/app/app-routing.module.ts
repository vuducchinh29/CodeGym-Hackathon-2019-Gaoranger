import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionAreaComponent} from './question-area/question-area.component';

const routes: Routes = [
  {
    path: 'q1',
    component: QuestionAreaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
