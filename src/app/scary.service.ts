import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScaryService {

  constructor(private _http:HttpClient) { }

  scaryApiUrl="https://www.omdbapi.com/?s=scary&apikey=62492a24"

  scarySearch():Observable<any>{
    return this._http.get(this.scaryApiUrl)
  }
}

