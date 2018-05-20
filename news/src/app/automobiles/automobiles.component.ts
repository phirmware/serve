import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-automobiles',
  templateUrl: './automobiles.component.html',
  styleUrls: ['./automobiles.component.css']
})
export class AutomobilesComponent implements OnInit {
  stories: any;
  results: any[];
  constructor(private http: Http) {
    this.http
      .get(
        "https://api.nytimes.com/svc/mostpopular/v2/mostshared/Automobiles/30.json?api-key=a5852fe82b0a4d219585ddd910eea5d7"
      )
      .subscribe(response => {
        this.stories = response.json();
        this.results = this.stories.results;
      });
  }

  ngOnInit() {
  }

}
