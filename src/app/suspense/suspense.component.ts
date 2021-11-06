import { Component, OnInit } from '@angular/core';
import { SuspenseService } from '../suspense.service';

@Component({
  selector: 'app-suspense',
  templateUrl: './suspense.component.html',
  styleUrls: ['./suspense.component.css']
})
export class SuspenseComponent implements OnInit {

  constructor(private _services:SuspenseService) { }
  suspenseDisplay:any=[]


  ngOnInit(): void {

    this._services.suspenseSearch().subscribe((result)=>{
      
      this.suspenseDisplay=result.Search
    })

  }

}
