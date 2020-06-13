import {Topic} from './topic';
import {Exam} from './exam';

export class Chapter {
  id: number;
   chapterTitle: string;
  topics: Topic[];
  exam: Exam;
  bookId: number;
}
