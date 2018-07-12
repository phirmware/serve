import { IserviceService } from './../iservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  data:any;
  category = 'Cards';
  constructor(public service:IserviceService) { }

  ngOnInit() {
      this.service.getData().subscribe(response=>{
        this.data = response.json();
      })
  }
  

  findUsers(category){
    this.data = undefined;
    this.service.findData(category).subscribe(response=>{
       this.data = response.json();
       if(response.json()[0] == undefined){
         this.category = 'Empty';
       } else{
         this.category = response.json()[0].category;
       }
    })
  }

}
