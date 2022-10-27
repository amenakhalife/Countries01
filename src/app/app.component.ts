import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Countries';
  writeSearchedCountry:string= ''; 
  listenToChild(_countryToSearch: string){
   //alert(_countryToSearch);
   this.writeSearchedCountry= _countryToSearch;
  }
  
}
