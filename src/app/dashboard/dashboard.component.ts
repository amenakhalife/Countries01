import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Countries';
  writeSearchedCountry:string= ''; 
  listenToChild(_countryToSearch: string){
   //alert(_countryToSearch);
   this.writeSearchedCountry= _countryToSearch;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
