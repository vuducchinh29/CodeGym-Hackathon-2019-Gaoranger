import {Component} from '@angular/core';
import {Question} from './Model/Question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'save-the-world';

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
  question = this.q1;

  doicauhoi(index) {
    this.question = this.mangcauhoi[index];
  }

}
