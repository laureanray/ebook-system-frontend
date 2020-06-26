import {User} from './user';
import {Assignment} from './assignment';

export class Instructor extends User {
  username: string;
  employeeNumber: string;
  honorifics: string;
  assignments: Assignment[];
  firstLogin: boolean;
}
