import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  // get primEmail(){
  //   return this.userEmails.get('primaryEmail')
  //   }

  //  title = 'email-validation-tutorial';
  //  userEmails = new FormGroup({
	//  primaryEmail: new FormControl(''),
  // 	Validators.required,
 	// Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])

   
  // });

  constructor(private authsvc: AuthService, private router: Router ) { }

  // ngOnInit(): void {
  // }
fakeLogin(){
  this.authsvc.isLoggedIn=true;
  this.router.navigate(['addctr']);
}
}