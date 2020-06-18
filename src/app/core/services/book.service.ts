import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Topic} from '../models/topic';
import {Book} from '../models/book';
import {Chapter} from '../models/chapter';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }

  getAllBooks() {
    return this.http.get(`${environment.apiUrl}/book`);
  }

  getBook(id: number) {
    return this.http.get(`${environment.apiUrl}/book/${id}`);
  }

  getAccessibleBooks(studentId: number) {
    return this.http.get(`${environment.apiUrl}/book/accessible/${studentId}`);
  }

  getAssignedProf(studentId: number, bookId: number) {
    return this.http.get(`${environment.apiUrl}/book/get-assigned/${studentId}/${bookId}`);
  }

  updateTopic(topic: Topic) {
    return this.http.post(`${environment.apiUrl}/book/topic/update`, topic);
  }

  addTopic(topic: Topic) {
    return this.http.post(`${environment.apiUrl}/book/topic/add`, topic);
  }

  addChapter(chapter: Chapter) {
    return this.http.post(`${environment.apiUrl}/book/chapter/add`, chapter);
  }

  deleteChapter(chapterId: number) {
    return this.http.get(`${environment.apiUrl}/book/chapter/delete/${chapterId}`);
  }

  deleteTopic(topicId: number) {
    return this.http.get(`${environment.apiUrl}/book/topic/delete/${topicId}`);
  }

  uploadBookCover(formData: FormData) {
    return this.http.post(`${environment.apiUrl}/book/upload-cover`, formData, {reportProgress: true, observe: 'events'});
  }

  addBook(book: Book) {
    return this.http.post(`${environment.apiUrl}/book/add`, book);
  }

  removeCourse(bookId: number, courseId: number) {
    return this.http.get(`${environment.apiUrl}/book/removeAccess/${bookId}/${courseId}`);
  }

  makeAccessibleToAll(bookId: number) {
    return this.http.get(`${environment.apiUrl}/book/makeAccessibleToAll/${bookId}`);
  }

  makeNotAccessibleToAll(bookId: number) {
    return this.http.get(`${environment.apiUrl}/book/makeNotAccessibleToAll/${bookId}`);
  }
}
