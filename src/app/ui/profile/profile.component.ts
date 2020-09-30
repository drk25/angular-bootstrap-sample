import { Component, OnInit } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ProfiledataComponent } from '../profiledata/profiledata.component';
import { ActivatedRoute } from '@angular/router';
import userdata from '../../../assets/users.json';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  page: string;
  public userIdList: { item: string }[];
  public members: { user_id: string, name: string, role: string, url: string, bio_content: string[] }[];


  constructor(private modalService: NgbModal, private _Activatedroute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.page = params.get('page');
      console.log(this.page);
      console.log(userdata);
      this.userIdList = userdata['usertype'][this.page];
      const userdataObj = userdata['userdata'];
      console.log(userdataObj);
      this.members = new Array();
      for (var i = 0; i < this.userIdList.length; i++) {
        console.log(i);
        let id = this.userIdList[i];
        console.log(id);
        const obj = userdataObj[id+''];
        console.log(obj);
        this.members.push(obj);
      }
    });
  }
  open(id: string) {
    console.log(id);

    const userdataObj = userdata['userdata'];
    const obj = userdataObj[id];
    console.log(obj);
    const modalRef = this.modalService.open(ProfiledataComponent);
    modalRef.componentInstance.member = obj;
    }


  }


