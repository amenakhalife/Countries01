import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountryComponent } from './country/country.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CountriesComponent } from './countries/countries.component';
import { FormsModule } from '@angular/forms';
import { countrySvc } from './classes/countryService';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import { MyInterceptor } from './classes/Interceptor';
import { AddCountryComponent } from './add-country/add-country.component';
import {Routes,RouterModule} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
const routes :Routes=[
  {path:'', component:DashboardComponent},
  {path:'addctr', component:AddCountryComponent,canActivate:[AuthGuard] },
  {path:'login', component:LoginComponent},
  {path:'**', component:NotfoundComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    SearchbarComponent,
    CountriesComponent,
    AddCountryComponent,
    NotfoundComponent,
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    countrySvc,
    AuthGuard,
    AuthService,
     { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
