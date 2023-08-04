import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {IImage, Image} from "../models/image/image.model";
import {catchError, map, Observable, of, retry} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }

  getAllImages(productId: string | number) : Observable<IImage[]> {
    return this.http.get<Image[]>(`${environment.apiUrl}/image/${productId}`)
  }

  // getImage(productId: string | number) : Observable<IImage> {
  //   let resp =
  //   this.http.get<Image[]>(`${environment.apiUrl}/image/${productId}`).subscribe(resp=>{
  //     return resp[0]
  //   })
  //   //return
  // }

}
