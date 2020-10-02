import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private firestore: AngularFirestore) { }
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    completed: new FormControl(false)

  });

  getAllUsers() {
    return this.firestore.collection('Registrations').snapshotChanges();
  }

  createUser(data) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("Registrations")
        .add(data)
        .then(res => { }, err => reject(err));
    });
  }

  updateUser(data) {
    return this.firestore
      .collection("Registrations")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  deleteUser(data) {
    return this.firestore
      .collection("Registrations")
      .doc(data.payload.doc.id)
      .delete();
  }
}
