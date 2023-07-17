import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public addToStorage(key:string, value: string) {
    localStorage.setItem(key, value);
  }

  public addToStorageAsStringify<Type>(key:string, value: Type) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public parseGet<Type>(key: string): Type | null {
    if(this.isContain(key)) {
      // @ts-ignore
      return JSON.parse(localStorage.getItem(key));
    }
    return null;
  }

  public isContain(key: string) {
    return localStorage.getItem(key) != null;
  }

}
