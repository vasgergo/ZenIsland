import {Injectable, signal} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../models/User";
import {Router} from "@angular/router";
import {map, Observable, of, Subscription} from "rxjs";
import {user} from "@angular/fire/auth";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {UserInterface} from "../../models/UserInterface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path: string = 'Users';

  user$ = this.auth.user;

  currentUserSignal = signal<UserInterface | null | undefined>(undefined);


  constructor(private afs: AngularFirestore, private router: Router, private auth: AngularFireAuth) {
    console.log('UserService constructor');
    this.user$.subscribe(user => {
      if (user) {
        this.currentUserSignal.set({
          id: user.uid,
          username: 'asd',
          email: user.email || '',
          admin: true
        });
      } else {
        this.currentUserSignal.set(null);
        console.log('User signed out');
      }
      console.log('user: ', this.currentUserSignal());
    });
  }

  signin(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signout(): void {
    this.auth.signOut().then(() => {
      console.log('signout success');
    });
    this.router.navigate(['/signin']);
  }

  getSignedInUserId(): string | null {
    return this.currentUserSignal()?.id || null;
  }

  isSignedIn(): boolean {

    return this.currentUserSignal() !== null && this.currentUserSignal() !== undefined;
  }

  isSignedInObs(): Observable<boolean> {
    return this.user$.pipe(
      map(user => user !== null)
    );
  }

  create(user: User) {
    return this.afs.collection<User>(this.path).add(user);
  }

  isAdmin(): Observable<boolean> {
    if (!this.isSignedIn()) {
      console.error('No user signed in from isAdmin()');
      return of(false);
    } else {
      console.log('User signed in from isAdmin()', this.getSignedInUserId());
      return this.afs.collection<User>(this.path, user => user.where('id', '==', this.currentUserSignal()?.id))
        .valueChanges()
        .pipe(
          map(users => users.length > 0 && users[0].admin),
        );
    }
  }


}
