import { Injectable } from '@angular/core';
import {countryy} from './countryy';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
}) 
export class countrySvc{
    writeCountry:string='';
    countries: countryy[] =[];
 
constructor(private apiCaller:HttpClient){

}

// getData(filldata:any){
//     this.countries=[];
//     var _url='';
//     if (this.writeCountry == '') {
//       _url='https://restcountries.com/v3.1/all'
//     }
//     else{
//       _url='https://restcountries.com/v3.1/name/' + this.writeCountry
//     }
    
//   fetch(_url)
//    .then(response => response.json())
//    .then(json => {
//      json.forEach((country : any)=> {
//        let c= new countryy();
//        c.name= country.name.common;
//        c.img=country.flags.png;
//        c.region= country.region;
//        c.population= country.population;
//        c.capital=country.capital;
//        this.countries.push(c);
//      });
//      if(filldata!= null)(filldata(this.countries))
//    }
  
//    )
//   }
// }

getData(filldata:any){
  this.countries=[];
  var _url='';
  if (this.writeCountry == '') {
    _url='https://restcountries.com/v3.1/all'
  }
  else{
    _url='https://restcountries.com/v3.1/name/' + this.writeCountry
  }
  this.apiCaller.get(_url)
  .subscribe((json:any)=>{
    json.forEach((country : any)=> {
      let c= new countryy();
      c.name= country.name.common;
      c.img=country.flags.png;
      c.region= country.region;
      c.population= country.population;
      c.capital=country.capital;
      this.countries.push(c);
    });
    if(filldata!= null){filldata(this.countries)}
  })
}
postData(data:any){
    this.apiCaller
        .post<any>('http://localhost:4200/addctr', data)
        .subscribe();
}
}