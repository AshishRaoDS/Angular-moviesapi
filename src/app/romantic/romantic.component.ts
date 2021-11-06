import { Component, OnInit } from '@angular/core';
import { RomanticService} from '../romantic.service';

@Component({
  selector: 'app-romantic',
  templateUrl: './romantic.component.html',
  styleUrls: ['./romantic.component.css']
})
export class RomanticComponent implements OnInit {

  constructor(private _services:RomanticService) { }
  romanticDisplay:any=[]


  ngOnInit(): void {

    this._services.romanticSearch().subscribe((result)=>{
      
      this.romanticDisplay=result.Search
    })

  }

}
