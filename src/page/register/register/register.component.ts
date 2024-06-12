import {Component, NgModule} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {routes} from "../../../app/app.routes";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  protected username: string | null = null;
  protected email: string | null  = null;
  protected password: string | null  = null;

  protected error: string | null = null;

  constructor(private userService: UserService, private route: Router) {

  }

  protected handleSubmit() {
    if (!this.username || !this.email || !this.password) {
      this.error = "Please fill in all fields"
      return
    }
    this.error = null;
    this.userService.createUser({
      username: this.username,
      email: this.email,
      password: this.password
    })
      .then(value => {
        this.route.navigate(['/'])
          .catch(reason => {
            console.error(reason);
          })
      })
  }
}
