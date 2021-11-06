import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RomanticService {

  
  constructor(private _http:HttpClient) { }
  
  romanticApiUrl="https://www.omdbapi.com/?s=romantic&apikey=62492a24"
  
  
  romanticSearch():Observable<any>{
    return this._http.get(this.romanticApiUrl)
  }
}
