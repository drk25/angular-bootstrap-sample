import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { NgForm } from "@angular/forms";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  checkboxes = ["Student","Board","Faculty",""];
  checkboxGroup: FormGroup;
  constructor(public userService: UserService, private fb: FormBuilder, private firestore: AngularFirestore) { }
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    role: new FormControl(''),
    userType: new FormControl(this.checkboxes),
    description: new FormControl('')

  });
  
  ngOnInit() {
    this.resetForm();
  }

  
  resetForm(form?: NgForm) {
    console.log("INSIDE RESETFORM")
    if (form != null)
      form.resetForm();
    this.userService.formData = {
      id: null,
      name: '',
      email: '',
      role: '',
      phone: null,
      userType: [],
      description: [],
      url: '',
      bio_content: [],
    }
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    let data = Object.assign({}, form.value);
    // delete data.id;
    if (form.value.id == null)
      this.firestore.collection('Users').add(data);
    else {
      this.firestore.doc('Users/' + form.value.id).set(data);
      
    }
    this.resetForm(form);
  }

}
