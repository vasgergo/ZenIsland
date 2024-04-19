import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../models/User";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path: string = 'Users';

  constructor(private afs: AngularFirestore, private router: Router) {
  }

  setSignedInUser(UID: string) {
    localStorage.setItem('UID', UID);
  }

  getSignedInUserId(): string | null{
    return localStorage.getItem('UID');
  }

  isSignedIn(): boolean{
    return localStorage.getItem('UID') !== null;
  }

  create(user: User) {
    return this.afs.collection<User>(this.path).add(user);
  }
  signout(): void{
    localStorage.removeItem('UID');
    this.router.navigate(['/signin']);
  }
}
