import {CanActivateFn, Router} from '@angular/router';
import {AuthenticationService} from "../service/authentication.service";
import {inject} from "@angular/core";
import {UserService} from "../service/user.service";

export const authenticatedGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthenticationService);
  const userService = inject(UserService);
  const router = inject(Router);
  await userService.loadUser()
  const isAuthenticated: boolean = await authService.isAuthenticated();
  if (!isAuthenticated) {
    return router.createUrlTree(['/login']);
  }
  return true;
};
