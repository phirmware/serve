import { IserviceService } from "./../iservice.service";
import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  errorMessage:any;
  constructor(private http:Http,private router:Router,private service:IserviceService) { }

  ngOnInit() {
  }
  sendInfo(info){
    this.service.signUp(info).subscribe(response =>{
      var token = response.json();
      if(token && token.token){
        localStorage.setItem('token',token.token);
        this.router.navigate(['/step1']);
      }else{
        this.errorMessage = response.json().message;
      }
      
    })
  }
}
