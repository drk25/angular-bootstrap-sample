import { Component, OnInit } from '@angular/core';
import gallerydata from '../../../assets/gallery.json';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  page: string;
  public sanitizer: DomSanitizer;
  public slides: { url: SafeResourceUrl }[];
  public active;
    constructor(private _Activatedroute: ActivatedRoute, sanitizer: DomSanitizer) { 
      this.sanitizer = sanitizer;
    }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.page = params.get('page');
      console.log(this.page);
      console.log(gallerydata);
      this.slides = new Array();
      let items = gallerydata[this.page]['items'];
      console.log("I am here"+ items);
      items.forEach((input: string) => {
        console.log("SOMETHING"+ input);
        let obj: any  = this.photoURL(input);
        console.log("SOMETHING ELSE"+ obj);
        this.slides.push(obj);
        
        
      });
      let activeUrl = gallerydata[this.page]['active'];
      this.active = this.photoURL(activeUrl);

    });
  }
  photoURL(anUrl: string): SafeResourceUrl {
    console.log("In photoUrl "+ anUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(anUrl);

}
}
