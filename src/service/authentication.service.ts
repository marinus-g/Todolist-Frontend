import {Inject, Injectable} from '@angular/core';
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {Environment} from "../environments/ienvironment";
import {ENV} from "../environments/environment.provider";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private userService: UserService, private http: HttpClient,
              @Inject(ENV) private env: Environment) {
  }

  async isAuthenticated() {
    return this.userService.user !== null;
  }

  async authenticate(param: { password: string; login: string }) {
    const response$ = this.http.post(this.env.apiUrl + '/login', param, {
      observe: 'response',
      withCredentials: true
    })
    const response = await firstValueFrom(response$)
    if (response.status !== 200) {
      throw new Error('Authentication failed')
    } else {
      this.userService.user = response.body as any;
    }
  }
}
