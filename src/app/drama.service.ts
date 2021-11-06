import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DramaService {

  constructor(private _http:HttpClient) { }
  dramaDisplay:any=[]
  dramaApiUrl="https://www.omdbapi.com/?s=drama&apikey=62492a24"
  
  
  dramaSearch():Observable<any>{
    return this._http.get(this.dramaApiUrl)
  }
}
