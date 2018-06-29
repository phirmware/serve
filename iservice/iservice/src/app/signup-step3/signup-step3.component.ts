import { IserviceService } from './../iservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-step3',
  templateUrl: './signup-step3.component.html',
  styleUrls: ['./signup-step3.component.css','../../assets/css/bootstrap.min.css']
})
export class SignupStep3Component implements OnInit {

  constructor(private service : IserviceService,private router:Router) { }

  ngOnInit() {
  }

  openPage(){
    this.router.navigate(['/user',this.service.poo.company])
  }

}
