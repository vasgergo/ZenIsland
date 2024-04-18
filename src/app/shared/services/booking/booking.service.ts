import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Booking} from "../../models/Booking";

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  path: string = 'Bookings';

  constructor(private afs: AngularFirestore) { }

    create(booking:Booking){
    return this.afs.collection<Booking>(this.path).doc(booking.id).set(booking);
  }

  createId(){
    return this.afs.createId();
  }
}
