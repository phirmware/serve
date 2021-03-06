import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class IserviceService {
 // url = "https://evening-peak-69588.herokuapp.com/" || "http://localhost:3000/";
  url = "http://localhost:3000/";
  poo = {
    user: '',
    company: '',
    service: '',
    email: '',
    phone: '',
    country: '',
    location:'',
    plan: '',
    category: ''
  }

  constructor(private http: Http) {}

  //get services
  getData() {
    return this.http.get(this.url);
  }

  //register company
  postData(info) {
    return this.http.post(this.url, info);
  }

  //find category
  findData(category){
    return this.http.get(this.url + 'category/' + category);
  }

  //find company
  findUser(company){
    return this.http.get(this.url + 'user/' + company );
  }

  //upload image
  uploadImage(image){
    console.log(image);
    return this.http.post(this.url + 'upload/',image);
  }

  //signup user
  signUp(info){
    return this.http.post(this.url + "signup/",info);
  }

  //create details
  createDetails(company, details){
    console.log(details);
    return this.http.post(this.url + 'user/' + company,{details:details});
  }

  // find detail
  findDetail(company){
    return this.http.get(this.url + 'user/' + company + '/detail');
  }

  //check if user is logged in
  loggedIn(){
    var helper = new JwtHelperService();
    var token = localStorage.getItem('token');
    if(token){
      return true;
    }
    return false;
  }
}
