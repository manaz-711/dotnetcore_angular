import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';
  private CurrentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.CurrentUserSource.asObservable();

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  login(model: any){
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if (user){
          localStorage.setItem('user', JSON.stringify(user));
          this.CurrentUserSource.next(user);
        }
      })
    );
  }

  // tslint:disable-next-line: typedef
  register(model: any){
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
          if (user){
            localStorage.setItem('user', JSON.stringify(user));
            this.CurrentUserSource.next(user);
          }
      })
    );
  }
  // tslint:disable-next-line: typedef
  setCurrentUser(user: User){
    this.CurrentUserSource.next(user);
  }

  // tslint:disable-next-line: typedef
  logout(){
    localStorage.removeItem('user');
    this.CurrentUserSource.next(null);
  }
}
