import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Topic} from '../models/topic';

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

  updateTopic(topic: Topic) {
    return this.http.post(`${environment.apiUrl}/book/topic/update`, topic);
  }

  addTopic(topic: Topic) {
    return this.http.post(`${environment.apiUrl}/book/topic/add`, topic);
  }

  deleteTopic(topicId: number) {
    return this.http.get(`${environment.apiUrl}/book/topic/delete/${topicId}`);
  }
}
