import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  httpClient=inject(HttpClient);
  baseUrl='';
  constructor() { }
   

signup(data:any){
  return this.httpClient.post(`${this.baseUrl}/`,data);

}

login(data:any){
  return this.httpClient.post(`${this.baseUrl}/`,data)
  .pipe(tap((result)=>{
    localStorage.setItem('authUser',JSON.stringify(result));
  }))
}


logout(){
  return localStorage.removeItem('authUser');
}

isLoggedIn(){
  return localStorage.getItem('authUser') !==null;
}

}
