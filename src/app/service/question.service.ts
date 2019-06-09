import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../Model/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly API_Q_URL = 'http://localhost:8080/api/turns';
  private readonly API_CAT_URL = '';

  constructor(private http: HttpClient) {
  }
  getTenQuestionByCategoryId(id: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.API_Q_URL + '/' + id);
  }

  getTurnByUserName(userName: string): Observable<Question> {
    return this.http.get<Question>(`${this.API_Q_URL}/${userName}`);
  }

  createPost(post: Partial<Question>): Observable<Question> {
    return this.http.post<Question>(this.API_Q_URL, post);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.API_Q_URL}/${id}`);
  }
}
