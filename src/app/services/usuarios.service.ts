import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ReqResponse } from '../models/req.response';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {}

  getUsers() {
    const url = 'https://reqres.in/api/users';

    return this.http.get<ReqResponse>(url)
    .pipe(
      map( resp =>{
        return resp.data.map( user => User.userObj(user))
      })
    )
  }
}
