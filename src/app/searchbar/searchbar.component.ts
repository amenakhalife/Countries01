import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {countryy} from '../classes/countryy'
import { countrySvc } from '../classes/countryService';
@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  searchedCountry:string= '';
  @Output() searchBtnClicked = new EventEmitter<string> ();
  countries: countryy[] =[];

  constructor(private cs: countrySvc) { }

  ngOnInit(): void {
    this.cs.getData((data:any)=>{this.countries=data});
    }
    callSpecificCountry(){
      this.searchBtnClicked.emit(this.searchedCountry);
      //alert(this.searchedCountry)
  }

}
