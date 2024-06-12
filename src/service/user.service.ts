import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ENV} from "../environments/environment.provider";
import {Environment} from "../environments/ienvironment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(http: HttpClient, @Inject(ENV) private env: Environment) { }


  async createUser(username: string, password: string): Promise<void> {

  }

}
