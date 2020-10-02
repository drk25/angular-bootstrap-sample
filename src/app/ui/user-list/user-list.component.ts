import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../service/registration.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(public registrationService: RegistrationService) { }
  ngOnInit() {

  }

  users;




}
