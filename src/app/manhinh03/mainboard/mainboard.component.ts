import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.scss']
})
export class MainboardComponent implements OnInit {
  @Output() sendIndex = new EventEmitter<string>();
  // @Output() sendImageURL = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  changeQuestion(para) {
    this.sendIndex.emit(para);
  }

  // changeArea(param) {
  //   this.sendImageURL.emit(param);
  // }

}
