import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent implements OnInit {
  submitted = false;
  
  constructor(private fb: FormBuilder) {
    // this.myForm = this.fb.group({
    //   firstName: this.fb.control('', Validators.required),
    //   lastName: this.fb.control('', Validators.required)
    // });
  }

  onSubmit(){
    this.submitted = true;
  }

  ngOnInit(): void {
  }

}
