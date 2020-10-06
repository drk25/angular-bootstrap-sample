import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfiledataComponent } from '../profiledata/profiledata.component';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../service/user.service';
import { User } from '../../model/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  page: string;
  public userIdList: { item: string }[];
  public members: User[];
  public filteredMembers: User[];

  constructor(private modalService: NgbModal, private userService: UserService, private _Activatedroute: ActivatedRoute) { }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
      this.page = params.get('page');
      this.userService.getUsersByUserType(this.page).subscribe(actionArray => {
        this.members = actionArray.docs.map(item => {
          return {
            id: item.data()['id'],
            name: item.data()['name'],
            phone: item.data()['phone'],
            email: item.data()['email'],
            role: item.data()['role'],
            url: item.data()['url'],
            userType: item.data()['userType'],
            description: item.data()['description'],
            bio_content: item.data()['bio_content']
          } as User;

        });
      });
    });
  }


  open(usr: any) {
    const modalRef = this.modalService.open(ProfiledataComponent);
    modalRef.componentInstance.member = usr;
  }


}


