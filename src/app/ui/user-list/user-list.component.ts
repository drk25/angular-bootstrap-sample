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
    this.getAllUsers();

  }

  users;

  getAllUsers = () => this.registrationService.getAllUsers().subscribe(res => (this.users = res));

  delUser = data => this.registrationService.deleteUser(data);

  markCompleted = data => this.registrationService.updateUser(data);


}
