export class Question {
  question: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correct: string;


  constructor(question: string, optionA: string, optionB: string, optionC: string, optionD: string, correct: string) {
    this.question = question;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
    this.correct = correct;
  }
}
