import { IserviceService } from './../iservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service:IserviceService,private route:ActivatedRoute) { }
  id;
  user;

  ngOnInit() {
     this.route.paramMap.subscribe(params=>{
       this.id = params.get('id')
     });

     this.service.findUser(this.id).subscribe(response=>{
       this.user = response.json();
     })
  }

}
