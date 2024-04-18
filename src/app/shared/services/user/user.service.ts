import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  path: string = 'Users';

  constructor(private afs: AngularFirestore) {
  }

  setLoggedInUser(userId: string) {
    localStorage.setItem('userId', userId);
  }

  getLoggedInUserId() {
    return localStorage.getItem('userId');
  }

  isLoggedIn() {
    return localStorage.getItem('userId') !== null;
  }

  create(user: User) {
    return this.afs.collection<User>(this.path).add(user);
  }

  logout() {
    localStorage.removeItem('userId');
  }
}
