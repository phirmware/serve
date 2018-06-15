import { IserviceService } from './iservice.service';
import { ServicesComponent } from './services/services.component';
import { Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router:Router,private service:IserviceService) { }
  helper = new JwtHelperService();
  
  canActivate(){
    if(this.service.loggedIn()) return true;
    this.router.navigate(['/login']);
    return false;
  }

  
}
