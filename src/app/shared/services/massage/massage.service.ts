import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {Massage} from "../../models/Massage";

@Injectable({
  providedIn: 'root'
})
export class MassageService {

  constructor(private afs: AngularFirestore) { }

    path: string = 'Massages';

    getAll():Observable<Massage[]>{
      return this.afs.collection<Massage>(this.path).valueChanges();
    }
}
