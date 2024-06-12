import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthenticationService} from "../../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  protected username: string | null = null;
  protected password: string | null = null;
  protected error: string | null = null;

  constructor(private authService: AuthenticationService, private router: Router) {
  }

  protected handleSubmit() {
    if (!this.username || !this.password) {
      this.error = "Please fill in all fields";
      return;
    }
    this.authService.login({login: this.username, password: this.password})
      .catch(reason => {
        this.error = reason;
      })
      .finally(() => {
        this.authService
          .isAuthenticated()
          .then(isAuthenticated => {
            if (isAuthenticated) {
              this.router.navigate(['/'])
                .catch(reason => {
                  console.error(reason.data);
                });
            }
          })
      })
  }
}
