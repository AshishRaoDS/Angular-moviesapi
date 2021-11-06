import { Component, OnInit } from '@angular/core';
import { ComedyService } from '../comedy.service';
@Component({
  selector: 'app-comidies',
  templateUrl: './comidies.component.html',
  styleUrls: ['./comidies.component.css']
})
export class ComidiesComponent implements OnInit {

  constructor(private _services:ComedyService) { }
  comedyDisplay:any=[]


  ngOnInit(): void {

    this._services.comedySearch().subscribe((result)=>{
      
      this.comedyDisplay=result.Search
    })

  }

}
