import { Component, OnInit } from '@angular/core';
import { ThrillerService } from '../thriller.service';

@Component({
  selector: 'app-thriller',
  templateUrl: './thriller.component.html',
  styleUrls: ['./thriller.component.css']
})
export class ThrillerComponent implements OnInit {
  constructor(private _services:ThrillerService){}
    thrillerDisplay:any=[]
  ngOnInit(): void {

    this._services.thrillerSearch().subscribe((result)=>{
      
      this.thrillerDisplay=result.Search
    })

  }

}
