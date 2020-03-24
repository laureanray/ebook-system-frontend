import {Admin} from './admin';
import {Instructor} from './instructor';

export interface Response {
  type: string;
  admin: Admin;
  instructor: Instructor;
}
