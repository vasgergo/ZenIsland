import { CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core'
import { UserService } from '../../user/user.service'
import { map } from 'rxjs'

export const authGuard: CanActivateFn = () => {
   const router = inject(Router)
   const userService = inject(UserService)

   return userService.isSignedInObs().pipe(
      map((isSignedIn) => {
         if (isSignedIn) {
            console.log('authGuard isSignedIn')
            return true
         } else {
            router.navigate(['/signin'])
            console.log('authGuard is NOT SignedIn')
            return false
         }
      }),
   )

   // if (userService.isSignedIn()) {
   //   console.log('authGuard isSignedIn');
   //   return true;
   // } else {
   //   router.navigate(['/signin']);
   //   console.log('authGuard is NOT SignedIn');
   //   return false;
   // }
}
