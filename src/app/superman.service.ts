import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SupermanService {

  
  constructor(private _http:HttpClient) { }
  supermanDisplay:any=[]
  supermanApiUrl="https://www.omdbapi.com/?s=superman&apikey=62492a24"
  
  
  supermanSearch():Observable<any>{
    return this._http.get(this.supermanApiUrl)
  }
}
