import {Chapter} from './chapter';
import {Course} from './course';

export class Book {
  id: number;
  bookTitle: string;
  bookDescription: string;
  bookAuthor: string;
  chapters: Chapter[];
  dateCreated: string;
  dateUpdated: string;
  bookCoverURL: string;
  accessibleToAll: boolean;
  courses: Course[];
}
