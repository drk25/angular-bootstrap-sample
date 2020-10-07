import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  constructor(private mediaService: MediaService, private _Activatedroute: ActivatedRoute, sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe(params => {
      this.page = params.get('page');
      if (this.page == null)
        this.page = 'home';
      this.mediaService.getMediaByGalleryType(this.page).subscribe(actionArray => {
        this.media = actionArray.docs.map(item => {
          let tempArr = [];
          item.data()['items'].forEach(element => {
            tempArr.push(this.photoURL(element))
          });
          return {
            active: this.photoURL(item.data()['active']),
            items: tempArr,
            gallerytype: item.data()['gallerytype']
          } as Media;
        });
      });
    });
    
  }
  
  photoURL(anUrl: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(anUrl);

  }
}
