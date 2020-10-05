import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../service/registration.service';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  list: User[];
  constructor(public registrationService: RegistrationService,
    private userService: UserService, private firestore: AngularFirestore) { }


  ngOnInit() {
    this.userService.getUsers().subscribe(actionArray => {
      this.list = actionArray.map(item => {
        return {
          id: item.payload.doc.id,
          name: item.payload.doc.data()['name'],
          phone: item.payload.doc.data()['phone'],
          email: item.payload.doc.data()['email'],
          role: item.payload.doc.data()['role'],
          userType: item.payload.doc.data()['userType'],
          description: item.payload.doc.data()['description'],
        } as User;
      })
    });
  }

  onEdit(usr: User) {
    let existingUserID = usr.id;
    console.log("ID: " + existingUserID)
    this.userService.formData = Object.assign({}, usr);
  }

  
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.firestore.doc('Users/' + id).delete();
    }
  }
}
