import { IserviceService } from './../iservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  data:any;
  constructor(public service:IserviceService) { }

  ngOnInit() {
      this.service.getData().subscribe(response=>{
        this.data = response.json();
      })
  }
  
  toggleNav(){
    document.getElementById('sidebar').classList.toggle('visible');
  }

  findUsers(category){
    this.service.findData(category).subscribe(response=>{
       this.data = undefined;
       this.data = response.json();
    })
  }

}
