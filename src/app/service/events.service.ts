import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
  constructor(private firestore: AngularFirestore) { }


  getEvents() {
    return this.firestore.collection('Events').snapshotChanges();
  }

}