import {ExamItem} from './exam-item';

export class Exam {
  id: number;
  instructions: string;
  examItems: ExamItem[];
  dateCreated: string;
  dateUpdated: string;
}
