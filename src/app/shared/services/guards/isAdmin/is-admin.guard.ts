import { CanActivateFn, Router } from '@angular/router'
import { inject } from '@angular/core'
import { UserService } from '../../user/user.service'
import { map, Observable } from 'rxjs'

export const isAdminGuard: CanActivateFn = (route, state): Observable<boolean> => {
   const userService = inject(UserService)
   const router = inject(Router)

   return userService.isAdmin().pipe(
      map((isAdmin) => {
         console.log('isAdmin: ', isAdmin)
         if (!isAdmin) {
            router.navigate(['/home'])
            return false
         } else {
            return true
         }
      }),
   )
}
