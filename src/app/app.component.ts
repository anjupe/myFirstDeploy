import { Component, OnInit } from '@angular/core';
import { PhotosService } from './services/photos.service';
import { Photo } from './models/Photo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  photos: Photo[] = [];
  albumsId = [1,2,3];
  
  constructor(public photoService: PhotosService){

  }
  ngOnInit(){
    this.photoService.getPhotos().subscribe(
      photos => {
        console.log(photos);
        this.photos = photos;
      }, 
      err => console.log(err)
    )
  }
}
