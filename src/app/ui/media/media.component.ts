import { Component, OnInit } from '@angular/core';
import gallerydata from '../../../assets/gallery.json';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { MediaService } from '../../service/media.service';
import { Media } from '../../model/media.model'

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
  page: string;
  public media: Media[];
  public sanitizer: DomSanitizer;
  // public slides: { url: SafeResourceUrl }[];
  public active;
    constructor(private mediaService: MediaService, private _Activatedroute: ActivatedRoute, sanitizer: DomSanitizer) { 
      this.sanitizer = sanitizer;
    }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
      this.page = params.get('page');
      this.mediaService.getMediaByGalleryType(this.page).subscribe(actionArray => {
        this.media = actionArray.docs.map(item => {
          let tempArr = []; 
          item.data()['items'].forEach(element => {
            tempArr.push(this.photoURL(element))
          });
          console.log("")
          return {
            active: this.photoURL(item.data()['active']), 
            items: tempArr,
            gallerytype: item.data()['gallerytype']
          } as Media;
        });
      });
    });
  }
  //     console.log(this.page);
  //     console.log(gallerydata);
  //     this.slides = new Array();
  //     let items = gallerydata[this.page]['items'];
  //     console.log("I am here"+ items);
  //     items.forEach((input: string) => {
  //       console.log("SOMETHING"+ input);
  //       let obj: any  = this.photoURL(input);
  //       console.log("SOMETHING ELSE"+ obj);
  //       this.slides.push(obj);
        
        
  //     });
  //     let activeUrl = gallerydata[this.page]['active'];
  //     this.active = this.photoURL(activeUrl);

  //   });
  // }

  
  photoURL(anUrl: string): SafeResourceUrl {
    console.log("In photoUrl "+ anUrl);
    return this.sanitizer.bypassSecurityTrustResourceUrl(anUrl);

}
}
