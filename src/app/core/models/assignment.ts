import {Book} from './book';

export class Assignment {
  id: number;
  course: string;
  year: string;
  section: string;
  instructorId: number;
  bookId: number;
  book: Book;
}
