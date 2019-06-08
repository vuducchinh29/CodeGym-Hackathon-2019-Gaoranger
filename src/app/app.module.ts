import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainboardComponent } from './mainboard/mainboard.component';
import { QuestionAreaComponent } from './question-area/question-area.component';
import { OneLineAnswerComponent } from './one-line-answer/one-line-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainboardComponent,
    QuestionAreaComponent,
    OneLineAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
