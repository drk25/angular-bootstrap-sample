import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent {

  isSubmitted = false;

  itemValue = '';
  items: Observable<any[]>;
  items2: any;
  constructor(
    public db: AngularFireDatabase,
    public dbStore: AngularFirestore,
    public registerService: RegistrationService) {
    // let allUsers = this.dbStore.firestore.collection('Registrations');
    // allUsers.get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.id, "=>", doc.data());
    //   })
    // })
  }
  registerForm = new FormGroup({
    name: new FormControl(Validators.required),
    email: new FormControl(Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")),
    phone: new FormControl(Validators.required, Validators.pattern("[0-9 ]{11}"))

  });
  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    this.registerService.createRegistration(this.registerForm.value);
  }

  ngOnInit() { 

   }
}
