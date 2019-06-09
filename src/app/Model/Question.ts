export class Question {
  content: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  result: string;


  constructor(content: string, optionA: string, optionB: string, optionC: string, optionD: string, result: string) {
    this.content = content;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
    this.result = result;
  }
}
