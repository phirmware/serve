import { Http } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-displaycurrentuser',
  templateUrl: './displaycurrentuser.component.html',
  styleUrls: ['./displaycurrentuser.component.css']
})
export class DisplaycurrentuserComponent implements OnInit {
  currentUser;
  userInfo;
  //url = 'http://localhost:3000/'
  url = 'https://evening-peak-69588.herokuapp.com/'
  constructor(private http:Http,private router:Router) { }
  
  ngOnInit() {
    let token = localStorage.getItem('token');
    let helper = new JwtHelperService();
    let user = helper.decodeToken(token);
    if(user){
      this.currentUser = user.username;
      this.http.post(this.url + "showuser",{username:this.currentUser}).subscribe(response=>{
         this.userInfo = response.json();
    })
    }
  }

   //logout user
   logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

}
