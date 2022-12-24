import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {countryy} from '../classes/countryy'
import {Router} from '@angular/router'
import { countrySvc } from '../classes/countryService';
import { AuthService } from '../auth/auth.service';

@Injectable({
providedIn: 'root'
})
@Component({
  selector: 'add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit{
  countryadded=new countryy();
    //  country1:any=''
  // newc:any=''
  
  constructor(private route :Router ,private apiCaller:HttpClient, private cs:countrySvc ){
    
    
  }
  ngOnInit() {          
//     this.apiCaller.post<countryy>('https://restcountries.com/v3.1/name/{name}', {name :'',region:'',img:'',population:'',capital:'' }).subscribe(data => {
//         this.postId = data.id;
//     })
// }

//   saveCountry(){  
//   var country1 = document.getElementById('country1.1');
//   var  Original_Content = `
//  <div>
//  <img [src]="imgg" style="width: 100% ; height: 100%"  class="card-img-top" alt="...">
//  </div>
//  <div class="col-md-8">
//  <div class="card-body">
//    <h5  class="card-title">{{title}}</h5>
//  <p class="card-text">{{region}}</p>
//  <p  class="card-text">capital :  {{capital}}</p>
//  <div (click)="showPopulation()" class="d-flex justify-content-center align-items-center container" style="height:auto;">
//  <a  class="btn btn-primary" id="screen"> Population
//  </a>
//  </div>
//  </div>
//  `
//  this.apiCaller.get('http://localhost:3000/newcountries')
//    .subscribe((json:any)=>{
//      json.forEach((country1 : any)=> {
//        var content = Original_Content;
//        content= content.replace('{{title}}',country1.A);
//        content= content.replace('{{region}}',country1.B);
//        content = content.replace('imgg', country1.C) 
//        content = content.replace('{{capital}}', country1.D)
//        content = content.replace('showPopulation()', country1.E)
  
//        var newc = document.createElement('div')
//      newc.innerHTML= content;
//     newc.className = 'col-md-4"';
//      this.country1.push(newc)
      
//      });

//     })

//    this.route.navigate([''])
//    console.log(this.countryadded)


//  }
//  }
  
  
}
addCountry(){
  this.cs.postData(this.countryadded);
  this.countryadded.name='';
  this.countryadded.img='';
  this.countryadded.region='';
  this.countryadded.population=0;
  this.route.navigate([''])

}
}
