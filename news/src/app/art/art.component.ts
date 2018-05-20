import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-art",
  templateUrl: "./art.component.html",
  styleUrls: ["./art.component.css"]
})
export class ArtComponent implements OnInit {
  stories: any;
  results: any[];
  constructor(private http: Http) {
    this.http
      .get(
        "https://api.nytimes.com/svc/mostpopular/v2/mostshared/Arts/1.json?api-key=a5852fe82b0a4d219585ddd910eea5d7"
      )
      .subscribe(response => {
        this.stories = response.json();
        this.results = this.stories.results;
      });
  }

  ngOnInit() {}
}
