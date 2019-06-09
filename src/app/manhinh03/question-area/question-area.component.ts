import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../Model/Question';

@Component({
  selector: 'app-question-area',
  templateUrl: './question-area.component.html',
  styleUrls: ['./question-area.component.scss']
})
export class QuestionAreaComponent implements OnInit {
  @Input() questionNhan: Question;

  @Output() checkCorrect = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  checkPoint() {
    this.checkCorrect.emit();
  }
}
