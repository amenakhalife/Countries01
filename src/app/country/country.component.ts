import { Component, Input, OnInit } from '@angular/core';
import { TestScheduler } from 'rxjs/testing';
import { textSpanContainsPosition } from 'typescript';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrls:['./country.component.css']
})
export class CountryComponent{
 @Input() title:string = 'My title'
 @Input() population:number = 2;
 @Input() region:string = 'description'
 @Input() img:string = 'image'
 @Input() capital:string='capital'

 showPopulation(){
  alert(this.population)
 }
  //name:string= 'Mohammad'
  //test(){
//this.name ='Amena';
  }

 // constructor() {
   // setInterval(()=> {
   //   this.name += 'x';
   // }, 3000)
  // }

//}
