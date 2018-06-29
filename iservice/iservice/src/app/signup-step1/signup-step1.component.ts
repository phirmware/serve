import { Router } from '@angular/router';
import { IserviceService } from './../iservice.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'signup-step1',
  templateUrl: './signup-step1.component.html',
  styleUrls: ['./signup-step1.component.css','../../assets/css/bootstrap.min.css']
})
export class SignupStep1Component implements OnInit {
  user;
  users;
  check;
  constructor(private service:IserviceService, private router:Router) { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    let helper = new JwtHelperService();
    this.user = helper.decodeToken(token);

    this.service.getData().subscribe(response =>{
      this.users = response.json()
    })
  }

  submit(fullName,company,service,phone,country,location,category){
    this.service.poo.user = fullName.value;
    this.service.poo.email = this.user.username;
    this.service.poo.company = company.value;
    this.service.poo.service = service.value;
    this.service.poo.phone = phone.value;
    this.service.poo.country = country.value;
    this.service.poo.location = location.value;
    this.service.poo.category = category.value;

    this.users.forEach((user)=>{
      if(this.service.poo.company == user.company){
        this.check = 'Yes';
      } else{}
    });

    if(this.check == 'Yes'){
      alert('Someone already regitered with this company name');
    } else{
      this.router.navigate(['/step3']);
    }
  } 
}
