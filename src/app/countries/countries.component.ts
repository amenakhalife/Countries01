import { Component, OnInit, Input,OnChanges} from '@angular/core';
import { getAllJSDocTags } from 'typescript';
import {countryy} from '../classes/countryy'
import { countrySvc } from '../classes/countryService';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  @Input() writeCountry = '';
  countries: countryy[] =[];
  ngOnInit(){
   // alert(this.writeCountry)
      }
      ngOnChanges(){
        //alert(this.writeCountry)
        this.cs.writeCountry= this.writeCountry;
        this.cs.getData((data:any)=>{this.countries=data})
      }
  constructor(private cs: countrySvc){
//  let p1= new Patient();
//  p1.name= 'amena';
//  p1.age ='22';
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
this.cs.getData((data:any)=>{this.countries=data})
}
}
