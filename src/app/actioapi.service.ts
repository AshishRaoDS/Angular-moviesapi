import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActioapiService {

  constructor(private _http:HttpClient) { }
actionDisplay:any=[]
actionApiUrl="https://www.omdbapi.com/?s=action&apikey=62492a24"


actionSearch():Observable<any>{
  return this._http.get(this.actionApiUrl)
}
}
