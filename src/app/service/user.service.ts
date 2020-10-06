import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  formData: User;

  
  constructor(public firestore: AngularFirestore) {  


  }
  getUsers() {
    return this.firestore.collection('Users').snapshotChanges();
  }
  getUsersByUserType(usertype: string) {

   return this.firestore.collection('Users', ref => ref.where('usertype','array-contains', usertype)).get();
    
  }
}
