import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ComedyService {

  constructor(private _http:HttpClient) { }
  comedyDisplay:any=[]
  comedyApiUrl="https://www.omdbapi.com/?s=comedy&apikey=62492a24"
  
  
  comedySearch():Observable<any>{
    return this._http.get(this.comedyApiUrl)
  }
}
