import { CanActivateFn } from '@angular/router';
export const authGuard: CanActivateFn = () => {
  return localStorage.getItem('UID') !== null;
};
