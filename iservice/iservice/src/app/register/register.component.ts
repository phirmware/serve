import { Router } from '@angular/router';
import { IserviceService } from './../iservice.service';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  input = document.getElementsByTagName("input");
  users: any;

  constructor(public service: IserviceService ,public router:Router) {}

  ngOnInit() {
    let token = localStorage.getItem('token');
    let helper = new JwtHelperService();
    let user = helper.decodeToken(token);
  }

  postData(data) {
    var info = JSON.stringify(data);
    this.service.postData(info).subscribe(response => {
      this.users = response.json();
      console.log(this.users);
      for (let i = 0; i < this.input.length; i++) {
        this.input[i].value = "";
      }
      this.router.navigate(['/services'])
    });
  }

}
