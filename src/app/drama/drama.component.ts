import { Component, OnInit } from '@angular/core';
import { DramaService } from '../drama.service';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.css']
})
export class DramaComponent implements OnInit {

  
  constructor(private _services:DramaService) { }
  dramaDisplay:any=[]


  ngOnInit(): void {

    this._services.dramaSearch().subscribe((result)=>{
      
      this.dramaDisplay=result.Search
    })

  }

}
