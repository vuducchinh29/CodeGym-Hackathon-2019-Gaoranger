import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {QuestionAreaComponent} from './question-area/question-area.component';
import {root} from 'rxjs/internal-compatibility';

const routes: Routes = [
  {
    path: 'q1',
    component: QuestionAreaComponent
  },
  // {
  //   path: 'questions/:id',
  //   component: root
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
