import {Component, OnInit} from '@angular/core';
import {Question} from '../Model/Question';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../service/question.service';
import {ITurn} from '../Model/turn';
import {IUser} from '../Model/user';

@Component({
  selector: 'app-manhinh03',
  templateUrl: './manhinh03.component.html',
  styleUrls: ['./manhinh03.component.scss']
})
export class Manhinh03Component implements OnInit {

  q1 = new Question('Java là ngôn ngữ lập trình?', 'Hướng đối tượng', 'Hướng hành vi', 'Hướng cấu trúc', 'Dựa trên đối tượng', 'A');
  q2 = new Question('Các bước để xây dựng và thực thi một chương trình java Các bước để xây dựng và thực thi một chương trình java', 'Soạn thảo, gỡ lỗi, biên dịch, nạp và chạy', 'Soạn thảo, gỡ lỗi, biên dịch, nạp và chạy', 'Nạp, soạn thảo, biên dịch, chạy', 'Soạn thảo, nạp và chạy', 'A2');
  q3 = new Question('Java là ngôn ngữ lập trình?', 'Hướng đối tượng', 'Hướng hành vi', 'Hướng cấu trúc', 'Dựa trên đối tượng', 'A');
  q4 = new Question('Các bước để xây dựng và thực thi một chương trình java Các bước để xây dựng và thực thi một chương trình java', 'Soạn thảo, gỡ lỗi, biên dịch, nạp và chạy', 'Soạn thảo, gỡ lỗi, biên dịch, nạp và chạy', 'Nạp, soạn thảo, biên dịch, chạy', 'Soạn thảo, nạp và chạy', 'A2');
  q5 = new Question('Java là ngôn ngữ lập trình?', 'Hướng đối tượng', 'Hướng hành vi', 'Hướng cấu trúc', 'Dựa trên đối tượng', 'A');
  q6 = new Question('Các bước để xây dựng và thực thi một chương trình java Các bước để xây dựng và thực thi một chương trình java', 'Soạn thảo, gỡ lỗi, biên dịch, nạp và chạy', 'Soạn thảo, gỡ lỗi, biên dịch, nạp và chạy', 'Nạp, soạn thảo, biên dịch, chạy', 'Soạn thảo, nạp và chạy', 'A2');
  q7 = new Question('Java là ngôn ngữ lập trình?', 'Hướng đối tượng', 'Hướng hành vi', 'Hướng cấu trúc', 'Dựa trên đối tượng', 'A');
  q8 = new Question('Các bước để xây dựng và thực thi một chương trình java Các bước để xây dựng và thực thi một chương trình java', 'Soạn thảo, gỡ lỗi, biên dịch, nạp và chạy', 'Soạn thảo, gỡ lỗi, biên dịch, nạp và chạy', 'Nạp, soạn thảo, biên dịch, chạy', 'Soạn thảo, nạp và chạy', 'A2');
  q9 = new Question('Java là ngôn ngữ lập trình?', 'Hướng đối tượng', 'Hướng hành vi', 'Hướng cấu trúc', 'Dựa trên đối tượng', 'A');
  q10 = new Question('Các bước để xây dựng và thực thi một chương trình java Các bước để xây dựng và thực thi một chương trình java', 'Dựa trên đối tượng', 'Dựa trên đối tượng', 'Nạp, soạn thảo, biên dịch, chạy', 'Soạn thảo, nạp và chạy', 'A2');

  mangcauhoi = [this.q1, this.q2, this.q3, this.q4, this.q5, this.q6, this.q7, this.q8, this.q9, this.q10];
  question: Question;
  mangTraLoi = new Array(10);
  markPoint = 0;
  turn: ITurn;
  user: IUser;

  doicauhoi(indexChoosen) {
    if (!(parseInt(indexChoosen[0]) == 9 && parseInt(indexChoosen[1]) == 9)) {
      this.question = this.mangcauhoi[parseInt(indexChoosen[0])];
      this.mangTraLoi[parseInt(indexChoosen[1])] = indexChoosen[1] + indexChoosen[2];
      for (let i = 0; i < this.mangTraLoi.length; i++) {
        console.log(this.mangTraLoi[i]);
      }
    } else {
      this.mangTraLoi[parseInt(indexChoosen[1])] = indexChoosen[2] + indexChoosen[3];
      for (let i = 0; i < this.mangTraLoi.length; i++) {
        console.log(this.mangTraLoi[i]);
      }
    }
  }

  // gameturn: ITurn;

  constructor(
    private route: ActivatedRoute,
    private questService: QuestionService
  ) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.questService.getTenQuestionByCategoryId(id).subscribe(
      next => {
        (this.mangcauhoi = next);
        this.addClassForCorrectAnswer();
        this.question = this.mangcauhoi[0];
      },
      error => {
        console.log(error);
      });
    this.questService.getTurnById(1).subscribe(n => {this.turn = n;
    this.questService.getUser(id).subscribe(next => this.user = next , e => console.log(e));
    }, e => console.log(e) );
  }

  // saveTurn() {
  //
  // }

  addClassForCorrectAnswer() {
    let result;
    for (let i = 0; i < this.mangcauhoi.length; i++) {
      result = this.mangcauhoi[i].result;
      console.log(result);
      document.getElementById(result).classList.add('dung');
    }
  }


  checkPoint() {
    for (let i = 0; i < this.mangcauhoi.length; i++) {
      if (this.mangcauhoi[i].result === this.mangTraLoi[i]) {
        ++this.markPoint;
      }
    }
    alert(  'Chà, nhà ngươi đã trả lời đúng được ' + this.markPoint + '/10 câu!');
    this.markPoint = 0;
  }
}
