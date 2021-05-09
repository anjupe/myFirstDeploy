import { Component, OnInit } from '@angular/core';

import { PhotosService } from '../../services/photos.service';
import { Photo } from '../../models/Photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: Photo[] = [];

  constructor(public photosService: PhotosService) { }

  ngOnInit(){
    this.photosService.getPhotos().subscribe(
      photos => {
        console.log(photos);
        this.photos = photos;
      }, 
      err => console.log(err)
    )
  }

  click(){
    alert('¡FUNCIONA!')
  }

}
