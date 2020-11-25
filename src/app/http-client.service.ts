import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) {   }

  getUsers = () => {
    return this.http.get('https://scythe-striped-purchase.glitch.me/users');
  }
  
}
