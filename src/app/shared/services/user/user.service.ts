import { Injectable, signal } from '@angular/core'
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { User } from '../../models/User'
import { Router } from '@angular/router'
import {
    combineLatest,
    delay,
    interval,
    map,
    Observable,
    of,
    Subscription,
    switchMap,
} from 'rxjs'
import { user } from '@angular/fire/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { UserInterface } from '../../models/UserInterface'

type UserIdEmail = {
    id: string
    email: string
}

@Injectable({
    providedIn: 'root',
})
export class UserService {
    path: string = 'Users'

    user$ = this.auth.user

    currentUserSignal = signal<UserIdEmail | null | undefined>(undefined)

    constructor(
        private afs: AngularFirestore,
        private router: Router,
        private auth: AngularFireAuth
    ) {
        console.log('UserService constructor')
        this.user$.subscribe((user) => {
            if (user) {
                this.currentUserSignal.set({
                    id: user.uid,
                    email: user.email || '',
                })
            } else {
                this.currentUserSignal.set(null)
                console.log('User signed out')
            }
            console.log('user: ', this.currentUserSignal())
        })
    }

    signin(email: string, password: string) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    signup(email: string, password: string) {
        return this.auth.createUserWithEmailAndPassword(email, password)
    }

    signout(): void {
        this.auth.signOut().then(() => {
            console.log('signout success')
        })
        this.router.navigate(['/signin'])
    }

    getSignedInUserId(): string | null {
        return this.currentUserSignal()?.id || null
    }

    getUserById(id: string): Observable<UserInterface | null> {
        return this.afs
            .collection<User>(this.path, (user) => user.where('id', '==', id))
            .valueChanges()
            .pipe(map((users) => (users.length > 0 ? users[0] : null)))
    }

    isSignedIn(): boolean {
        return (
            this.currentUserSignal() !== null &&
            this.currentUserSignal() !== undefined
        )
    }

    create(user: User) {
        return this.afs.collection<User>(this.path).add(user)
    }

    isSignedInObs(): Observable<boolean> {
        return this.user$.pipe(map((user) => user !== null))
    }

    isAdmin(): Observable<boolean> {
        return this.isSignedInObs().pipe(
            switchMap((isSignedIn) => {
                if (!isSignedIn) {
                    return of(false)
                }
                return this.afs
                    .collection<User>(this.path, (user) =>
                        user.where('id', '==', this.currentUserSignal()?.id)
                    )
                    .valueChanges()
                    .pipe(map((users) => users.length > 0 && users[0].admin))
            })
        )
    }
}
