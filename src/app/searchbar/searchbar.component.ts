import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {countryy} from '../classes/countryy'
import { countrySvc } from '../classes/countryService';
import { AuthService } from '../auth/auth.service';
import { Subject, Subscription } from 'rxjs';
import { map,debounceTime } from 'rxjs/operators';

@Component({
  selector: 'searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  public keyUp = new Subject <KeyboardEvent>();
  private subscription : Subscription | null = null;
  searchedCountry:string= '';
  @Output() searchBtnClicked = new EventEmitter<string> ();
  countries: countryy[] =[];

  constructor(private cs: countrySvc, private authsvc: AuthService) { }

  ngOnInit(): void {
    this.cs.getData((data:any)=>{this.countries=data});
    this.subscription = this.keyUp.pipe
    (
     map((event:any)=>event?.target?.value),
     debounceTime(1000)
    ).subscribe(x=>console.log(x))
    }
    callSpecificCountry(){
      this.searchBtnClicked.emit(this.searchedCountry);
      //alert(this.searchedCountry)
  }
  logout(){
    this.authsvc.logout();

  }
  smartSearchHolder(){
    fetch('https://restcountries.com/v3.1/name' + this.searchedCountry)
  .then(response => response.json())
  .then(json => console.log(json))
  }
}
