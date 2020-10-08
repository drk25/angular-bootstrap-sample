import { Component, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profiledata',
  templateUrl: './profiledata.component.html',
  styleUrls: ['./profiledata.component.css']
})
export class ProfiledataComponent {

  @Input() member: Member;
  constructor(public activeModal: NgbActiveModal) { }

    
  close() {
    this.close();
  }

}
export enum ModalType {
  INFO = 'info',
  WARN = 'warn'
}
export interface Member {
  name: string;
  role: string;
  description: string;
  bio_content: string[];
}