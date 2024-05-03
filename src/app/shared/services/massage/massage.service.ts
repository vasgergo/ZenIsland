import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class MassageService {

  constructor(private afs: AngularFirestore) { }

    path: string = 'Massages';

    getAll(){
      return this.afs.collection(this.path).valueChanges();
    }
}
