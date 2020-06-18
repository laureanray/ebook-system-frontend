import {Chapter} from './chapter';
import {Access} from './access';

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
  accesses: Access[];
}
