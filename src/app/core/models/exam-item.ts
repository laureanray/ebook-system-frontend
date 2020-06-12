import {Choice} from './choice';

export class ExamItem {
  id: number;
  examType: number;
  answer: string;
  choices: Choice[];
  examId: number;
}
