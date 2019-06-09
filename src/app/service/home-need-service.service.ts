import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUser} from '../Model/user';
import {ITurn} from '../Model/turn';

@Injectable({
  providedIn: 'root'
})
export class HomeNeedServiceService {
  private readonly API_USER_URL = 'http://localhost:3000/awesomes';
  private readonly API_TURN_URL = 'iiiiiiiiiiiiiuuuuuuuuuuuuuuuu';

  constructor(private http: HttpClient) {
  }

  updateUser(user: IUser): Observable<IUser> {
    user.id = 1;
    return this.http.put<IUser>(this.API_USER_URL + '/' + user.id, user);
  }

  postTurn(t: ITurn): Observable<ITurn> {
    return this.http.post<ITurn>(`${this.API_TURN_URL}`, t);
  }
}
