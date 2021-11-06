import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SuspenseService {

  constructor(private _http:HttpClient) { }

  suspenseApiUrl="https://www.omdbapi.com/?s=suspense&apikey=62492a24"
  
  
  suspenseSearch():Observable<any>{
    return this._http.get(this.suspenseApiUrl)
  }
}
