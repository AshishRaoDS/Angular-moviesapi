import { Component, OnInit } from '@angular/core';
import { SupermanService} from '../superman.service';
@Component({
  selector: 'app-superman',
  templateUrl: './superman.component.html',
  styleUrls: ['./superman.component.css']
})
export class SupermanComponent implements OnInit {

  constructor(private _services:SupermanService) { }
  supermanDisplay:any=[]


  ngOnInit(): void {

    this._services.supermanSearch().subscribe((result)=>{
      
      this.supermanDisplay=result.Search
    })

  }

}
