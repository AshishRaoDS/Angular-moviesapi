import { Component, OnInit } from '@angular/core';
import { ActioapiService } from '../actioapi.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  constructor(private _services:ActioapiService) { }
  actionDisplay:any=[]


  ngOnInit(): void {

    this._services.actionSearch().subscribe((result)=>{
      
      this.actionDisplay=result.Search
    })

  }

}
