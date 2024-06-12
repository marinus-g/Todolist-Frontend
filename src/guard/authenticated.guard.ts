import {CanActivateFn, Router} from '@angular/router';
import {AuthenticationService} from "../service/authentication.service";
import {inject} from "@angular/core";

export const authenticatedGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthenticationService);
  const isAuthenticated: boolean = await authService.isAuthenticated();
  if (!isAuthenticated) {
    const router = inject(Router);
    return router.createUrlTree(['/login']);
  }
  return true;
};
