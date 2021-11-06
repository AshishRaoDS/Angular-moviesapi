import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ThrillerService {
  constructor(private _http:HttpClient) { }
  thrillerDisplay:any=[]
  thrillerApiUrl="https://www.omdbapi.com/?s=thriller&apikey=62492a24"
  
  
  thrillerSearch():Observable<any>{
    return this._http.get(this.thrillerApiUrl)
  }
}
