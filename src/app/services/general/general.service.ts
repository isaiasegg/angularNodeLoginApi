import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http'; 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable()
export class GeneralService { 
  
  //
  constructor(private http: HttpClient) { 
  }
  

  login(user) {
    const data = JSON.stringify(user);
    return this.http.post('/api/login/', data, httpOptions);
  } 

  register(user) {
    const data = JSON.stringify(user);
    return this.http.post('/api/register/', data, httpOptions);
  } 

}
