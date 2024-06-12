import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENV} from "../environments/environment.provider";
import {Environment} from "../environments/ienvironment";
import {Registration, User} from "../model/user.model";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user: User | null = null;

  constructor(private http: HttpClient, @Inject(ENV) private env: Environment) {

  }

  async loadUser() {
    const response$ = this.http.get<User>(this.env.apiUrl + '/user', {
      observe: 'response',
      withCredentials: true
    })
    const response = await firstValueFrom(response$)
    if (response.status === 200) {
      this.user = response.body as User;
    }
  }

  async createUser(registration: Registration): Promise<User> {
    const response$ = this.http.post<User>(this.env.apiUrl + '/user', registration,
      {
        observe: 'response',
        withCredentials: true
      })
    const response = await firstValueFrom(response$)
    if (response.status !== 201) {
      throw new Error('UserModel creation failed')
    } else {
      return this.user = response.body as User;
    }
  }


  get user(): User | null {
    return this._user;
  }

  set user(value: User | null) {
    this._user = value;
  }
}
