import { Router } from '@angular/router';
import { IserviceService } from './../iservice.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-signup-step2',
  templateUrl: './signup-step2.component.html',
  styleUrls: ['./signup-step2.component.css','../../assets/css/bootstrap.min.css']
})
export class SignupStep2Component implements OnInit {

  constructor(private service:IserviceService,private router:Router) { }
  user;
  ngOnInit() {
    let token = localStorage.getItem('token');
    let helper = new JwtHelperService();
    this.user = helper.decodeToken(token);
  }
  
  register(){
    this.service.postData(this.service.poo).subscribe(response=>{
      this.router.navigate(['/welcome'])
    })
  }

}
