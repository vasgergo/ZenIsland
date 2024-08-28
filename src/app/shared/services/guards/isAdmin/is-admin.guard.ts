import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {UserService} from '../../user/user.service';
import {map, Observable, of} from 'rxjs';

export const isAdminGuard: CanActivateFn = (route, state):Observable<boolean> => {
    const userService = inject(UserService);
    const router = inject(Router);
    const userId = userService.getSignedInUserId();

    if (userId) {
        return userService.isAdmin(userId).pipe(map((user) => {
          if (user[0].admin) {
            return true;
          } else {
            router.navigate(['/homes']);
            return false;
          }
        }));
    }
    return of(false);
};
