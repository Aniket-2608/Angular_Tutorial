import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  /*we are going to use Event Binding. we have already created a search bar in the html file. We want that if any user enters any data in the serach bar, that data should assigned to the search property here. So, basically we want to get the data from the view template and want to use it in the component class*/

  searchValue: string ="";

  changeSearchValue(eventData: Event){
    // console.log((<HTMLInputElement>eventData.target).value);
    this.searchValue = (<HTMLInputElement>eventData.target).value
  }
}
