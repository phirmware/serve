import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class IserviceService {
  url = "http://localhost:3000/";
  constructor(private http: Http) {}
  getData() {
    return this.http.get(this.url);
  }

  postData(info) {
    var data = JSON.parse(info);
    return this.http.post(this.url, data);
  }

  findData(category){
    return this.http.get(this.url + 'category/' + category);
  }

  findUser(company){
    return this.http.get(this.url + 'user/' + company );
  }

  uploadImage(image){
    console.log(image);
    return this.http.post(this.url + 'upload/',image);
  }
}
