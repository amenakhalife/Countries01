import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { amena } from './ak';

import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CountriesComponent } from './countries/countries.component';
import { FormsModule } from '@angular/forms';
import { countrySvc } from './classes/countryService';

@NgModule({
  declarations: [
    AppComponent,
    amena,
    CountryComponent,
    SearchbarComponent,
    CountriesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [countrySvc],
  bootstrap: [AppComponent]
})
export class AppModule { }
