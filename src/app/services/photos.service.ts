import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/Photo';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  url = 'https://jsonplaceholder.typicode.com/photos?_limit=8';

  constructor(private http: HttpClient) { }

  getPhotos(){
    return this.http.get<Photo[]>(this.url);
  }
}
