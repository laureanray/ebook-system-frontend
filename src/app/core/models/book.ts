import {Chapter} from './chapter';

export class Book {
  id: number;
  bookTitle: string;
  bookDescription: string;
  bookAuthor: string;
  chapters: Chapter[];
  dateCreated: string;
  dateUpdated: string;
  bookCoverURL: string;
}
