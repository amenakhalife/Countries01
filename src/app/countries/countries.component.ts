import { Component, OnInit } from '@angular/core';
import {countryy} from '../classes/countryy'

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: countryy[] =[];
  constructor(){
//  let p1= new Patient();
//  p1.name= 'amena';
//  p1.age ='22';m
//  p1.img='https://cdn.pixabay.com/photo/2022/09/17/08/47/piano-7460435_960_720.jpg';
//  this.patients.push(p1);

//  let p2= new Patient();
//  p2.name= 'romy';
//  p2.age ='21';
//  p2.img='https://cdn.pixabay.com/photo/2022/09/17/08/47/piano-7460435_960_720.jpg';
//  this.patients.push(p2);

//  let p3= new Patient();
//  p3.name= 'amelia';
//  p3.age ='24';
//  p3.img='https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_960_720.jpg';
//  this.patients.push(p3);

fetch('https://restcountries.com/v3.1/all')
 .then(response => response.json())
 .then(json => {
   json.forEach((country : any)=> {
     let c= new countryy();
     c.name= country.name.common;
     c.img=country.flags.png;
     c.region= country.region;
     c.population= country.population;
     this.countries.push(c);
   })
 }

 )
  }


  ngOnInit(): void {
  }

}
