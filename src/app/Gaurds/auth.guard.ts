import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userAuthService = new UserAuthService();
  const router = new Router();

  if (userAuthService.isUserLogged) {
    return true;
  } else {
    alert('You must login first');
    router.navigate(['/login']);
    return false;
  }
};
