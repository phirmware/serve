import { Router } from '@angular/router';
import { IserviceService } from './../iservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'signup-step',
  templateUrl: './signup-step.component.html',
  styleUrls: ['./signup-step.component.css','./css/bootstrap.min.css']
})
export class SignupStepComponent implements OnInit {

  constructor(private iservice:IserviceService,private router:Router) { }

  ngOnInit() {
  }

  free(){
    this.iservice.poo.plan = 'free';
    this.router.navigate(['/step2']);
  }

}
