import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Registration } from '../model/registration.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private firestore: AngularFirestore) { }

  getAllUsers() {
    return this.firestore.collection('Registrations').snapshotChanges();
}

createRegistration(registration: Registration){
  console.log("INSIDE REGISTER SERVICE: " + JSON.stringify(registration));
  return this.firestore.collection('Registrations').add(registration);
}

updateRegistration(registration: Registration){
  delete registration.id;
  this.firestore.doc('Registrations/' + registration.id).update(registration);
}

deleteRegistration(registrationId: string){
  this.firestore.doc('Registrations/' + registrationId).delete();
}

}
