import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {authGuard} from './shared/services/guards/auth/auth.guard';
import {isAdminGuard} from "./shared/services/guards/isAdmin/is-admin.guard";

const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'myBookings',
    loadChildren: () => import('./pages/my-bookings/my-bookings.module').then(m => m.MyBookingsModule),
    canActivate: [authGuard]
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then(m => m.BookingModule),
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule),
    canActivate: [authGuard, isAdminGuard]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: '/home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
