import { Router } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { Component, OnInit } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  currentUser;
  constructor(private authGuard:AuthGuardService,private router:Router) {}

  ngOnInit() {
    
  }

  //check if user is logged in
  loggedIn() {
    let token = localStorage.getItem('token');
    if(!token){
      return false
    }
    return true;
  }
  
  //logout user
  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }
}
