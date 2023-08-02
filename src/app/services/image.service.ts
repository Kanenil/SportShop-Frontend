import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IImage, Image} from "../models/image/image.model";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }

  getAllImages(productId: string | number) : Observable<IImage[]> {
    return this.http.get<Image[]>(`${environment.apiUrl}/image/${productId}`)
  }

  getImage(productId: string | number) : Observable<IImage> {
    return this.http.get<Image[]>(`${environment.apiUrl}/image/${productId}`).pipe(
      map(resp => {
        return resp[0]
      })
    )
  }

}
