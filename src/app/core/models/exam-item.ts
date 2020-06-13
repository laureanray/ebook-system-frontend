import {Choice} from './choice';

export class ExamItem {
  id: number;
  examType: string;
  answer: string;
  choices: Choice[];
  examId: number;
  hash: string;
  num: number;
  question: string;
}
