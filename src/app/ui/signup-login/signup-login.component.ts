import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { RegistrationService } from '../../service/registration.service';
import { EventsService } from '../../service/events.service';
import { Event } from 'src/app/model/event.model';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.css']
})
export class SignupLoginComponent {

  isSubmitted = false;
  eventList: Event[]; 
  eventDateTimeArr : [];
  itemValue = '';
  items: Observable<any[]>;
  items2: any;
  constructor(
    public db: AngularFireDatabase,
    public dbStore: AngularFirestore,
    private fb: FormBuilder,
    public eventsService: EventsService,
    public registerService: RegistrationService) {
    // let allUsers = this.dbStore.firestore.collection('Registrations');
    // allUsers.get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc.id, "=>", doc.data());
    //   })
    // })
  }
  registerForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    
    
    eventName: new FormControl(''),
    eventDescription: new FormControl(''),
    eventDateTime: new FormControl(''),
    eventImg: new FormControl(''),

  });
  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    this.registerService.createUser(this.registerForm.value);
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required]],
        eventName: [''],
        eventDescription: [''],
        eventDateTime: ['', [Validators.required]],
        eventImg: ['', [Validators.required]],
    });

    this.eventsService.getEvents().subscribe(actionArray => {
      this.eventList = actionArray.map(item => {
        return {
          eventName: item.payload.doc.data()['eventName'],
          eventDescription: item.payload.doc.data()['eventDescription'],
          eventDateTime: item.payload.doc.data()['eventDateTime'],
          eventImg: item.payload.doc.data()['eventImg'],
          
        } as Event;
      })
    });

  }


  eventSchedule(eventName) {

    console.log("INSIDE eventSchedule " + eventName);
    let eventSchData = this.eventList.find((data: any) => data.eventName === eventName);
    if (eventSchData) {
      this.eventDateTimeArr = eventSchData.eventDateTime;      
    } else {
      this.eventDateTimeArr = [];
    }


}

}