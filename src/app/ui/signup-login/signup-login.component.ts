import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from  'rxjs';
import { RegistrationService } from '../../service/registration.service';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent {
  title = 'Angular8Firebase';
  description = 'Angular-Fire-Demo';
  
  registerForm: FormGroup;
  isSubmitted  =  false;

  itemValue = '';
  items: Observable<any[]>;
 
  constructor(
    public db: AngularFireDatabase,
    public registerService: RegistrationService) {
    this.items = db.list('items').valueChanges();
  }
  get formControls() { return this.registerForm.controls; }
  onSubmit() {
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    // if(this.registerForm.invalid){
    //   return;
    // }
    this.registerService.createRegistration(this.registerForm.value);
  }
  
    // this.registerService.createRegistration(this.fb.)
    // this.db.list('items').push({ content: this.itemValue});
    // this.itemValue = '';
    ngOnInit() {
      this.registerForm = new FormGroup({
        name: new FormControl(),
        email: new FormControl(), 
        phone: new FormControl()
      
      });
    }
  }
