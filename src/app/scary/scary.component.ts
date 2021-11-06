import { Component, OnInit } from '@angular/core';
import { ScaryService } from '../scary.service';

@Component({
  selector: 'app-scary',
  templateUrl: './scary.component.html',
  styleUrls: ['./scary.component.css']
})
export class ScaryComponent implements OnInit {

  constructor(private _services:ScaryService) { }

  scaryDisplay:any=[]
  ngOnInit(): void {
    this._services.scarySearch().subscribe((result)=>{
      this.scaryDisplay=result.Search
    })
  }

}
