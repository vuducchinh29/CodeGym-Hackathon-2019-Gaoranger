import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainboardComponent implements OnInit {
  @Output() sendIndex = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  changeQuestion(para) {
    this.sendIndex.emit(para);
  }
}
