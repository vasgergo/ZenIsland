import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isSignedIn = localStorage.getItem('UID') !== null;
  if (!isSignedIn) {
    router.navigate(['/signin']);
    return false;
  }
  return true;
};
