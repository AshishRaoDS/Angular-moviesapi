import { Component, OnInit } from '@angular/core';
import { AnimatedService } from '../animated.service';

@Component({
  selector: 'app-animated',
  templateUrl: './animated.component.html',
  styleUrls: ['./animated.component.css']
})
export class AnimatedComponent implements OnInit {

  constructor(private _services:AnimatedService) { }
  animatedDisplay:any=[]


  ngOnInit(): void {

    this._services.animatedSearch().subscribe((result)=>{
      
      this.animatedDisplay=result.Search
    })

  }

}
