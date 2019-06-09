import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from '../Model/Question';
import {ITurn} from '../Model/turn';
import {IUser} from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private readonly API_Q_URL = 'http://localhost:8080/api/turns';
  private readonly API_T_URL = '';

  constructor(private http: HttpClient) {
  }
  getTenQuestionByCategoryId(id: number): Observable<Question[]> {
    return this.http.get<Question[]>(this.API_Q_URL + '/' + id);
  }

  getTurnById(id: number): Observable<ITurn> {
    return this.http.get<ITurn>(`${this.API_Q_URL}/start/${id}`);
  }
  getUser(id: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.API_Q_URL}/user/${id}`);
  }

  saveTurn(turn: ITurn): Observable<ITurn> {
    return this.http.put<ITurn>(this.API_Q_URL, turn);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${this.API_Q_URL}/${id}`);
  }
}
