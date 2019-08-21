import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:4200/users?email=${email}`)
      .map((response: Response) => response.json())
      .map((user: User[]) => console.log(user));
  }
}
