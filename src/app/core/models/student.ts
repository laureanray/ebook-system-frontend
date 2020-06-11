import {User} from './user';

export class Student extends User {
  studentNumber: string;
  firstLogin: boolean;
  course: string;
  yearLevel: string;
  section: string;
}
