import { Component, OnInit, NgModuleRef } from '@angular/core';

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
  public members: { user_id: string, name: string, role: string, usertype: string[],  url: string, description: string, bio_content: string[] }[];


  constructor(private modalService: NgbModal, private _Activatedroute: ActivatedRoute) {

  }
  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.page = params.get('page');
      console.log(this.page);
      console.log(userdata);
      //this.userIdList = userdata['usertype'][this.page];
      //const userdataObj = userdata['userdata'];
      //console.log(userdataObj);
      this.members = new Array();
      for (var i = 0; i < userdata.length; i++) {
        console.log("What is I " + i);
        let userObj = userdata[i];
        console.log("Before fetching type" + userObj);
        let type = userObj.usertype;
        type.forEach(element => {
          console.log("Before if block" + element)
          if (element == this.page){
            console.log("here " + element);
            this.members.push(userObj);
          }
        });
        
      }
    });
  }
  open(usr: any) {
    console.log(usr);

    //const userdataObj = userdata['userdata'];
    //const obj = userdata[id];
    //console.log(obj);
    const modalRef = this.modalService.open(ProfiledataComponent);
    modalRef.componentInstance.member = usr;
    }


  }


