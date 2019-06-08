import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../Model/Question';

@Component({
  selector: 'app-question-area',
  templateUrl: './question-area.component.html',
  styleUrls: ['./question-area.component.scss']
})
export class QuestionAreaComponent implements OnInit {
  @Input() questionNhan: Question;

  constructor() {
  }

  ngOnInit() {
  }

}
