import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public name=""
  public shows =[
    {Title:"Batman"},
    {Title:"Avatar"},
    {Title:"Gladiator"}
  ]
  constructor() { }

  ngOnInit(){
    // fetch('https://www.omdbapi.com/?s=men&apikey=62492a24')
    // .then(response=>response.json())
    // // .then(response=>Object.assign({},...response))
    // .then(res=>this.shows=res.Search)
    // // .then(res=>console.log(res))
  }

}
