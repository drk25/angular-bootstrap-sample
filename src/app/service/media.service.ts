import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(public firestore: AngularFirestore) { }

  getMediaByGalleryType(gallerytype: string) {

    return this.firestore.collection('Media', ref => ref.where('gallerytype','array-contains', gallerytype)).get();
     
   }
}
