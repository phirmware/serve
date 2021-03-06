import { Router } from "@angular/router";
import { Http } from "@angular/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  constructor(private http: Http, private router: Router) {}
  //url = "https://evening-peak-69588.herokuapp.com/"
  url = 'http://localhost:3000/'
  ngOnInit() {}
  //login
  sendInfo(user) {
    //post to login url
    this.http.post(this.url + "login", user).subscribe(response => {
      var check = response.json().message;
      //check if login worked
      if (check == "success") {
        //login worked then get token
        this.http
          .post(this.url + "jwt", user)
          .subscribe(response => {
            var token = response.json();
            if (token && token.token) {
              //save token in local storage then navigate to services page
              localStorage.setItem("token", token.token);
              this.router.navigate(["/services"]);
            } else {
              //else display error
              this.errorMessage = response.json().message;
            }
          });
      } else {
        this.errorMessage = check;
      }
    });
  }
}
