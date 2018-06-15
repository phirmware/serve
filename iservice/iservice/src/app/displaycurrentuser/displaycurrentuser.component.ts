import { Http } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displaycurrentuser',
  templateUrl: './displaycurrentuser.component.html',
  styleUrls: ['./displaycurrentuser.component.css']
})
export class DisplaycurrentuserComponent implements OnInit {
  currentUser;
  userInfo;
  constructor(private http:Http) { }

  ngOnInit() {
    let token = localStorage.getItem('token');
    let helper = new JwtHelperService();
    let user = helper.decodeToken(token);
    if(user){
      this.currentUser = user.username;
      this.http.post("http://localhost:3000/showuser",{username:this.currentUser}).subscribe(response=>{
         this.userInfo = response.json();
    })
    }
  }

}
