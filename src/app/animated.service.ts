import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AnimatedService {

 
  constructor(private _http:HttpClient) { }
  
  animatedApiUrl="https://www.omdbapi.com/?s=animated&apikey=62492a24"
  
  
  animatedSearch():Observable<any>{
    return this._http.get(this.animatedApiUrl)
  }
}
