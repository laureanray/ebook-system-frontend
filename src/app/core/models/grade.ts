import {Exam} from './exam';

export class Grade {
  id: number;
  examId: number;
  exam: Exam;
  studentId: number;
  score: number;
  total: number;
  percent: number;
}
