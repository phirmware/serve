import { ActivatedRoute, Router } from '@angular/router';
import { IserviceService } from './../iservice.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
   id;
   user;
   userDetail;
  constructor(private service:IserviceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id')
    });

    //CKEDITOR.replace( 'editor1' );
    this.service.findUser(this.id).subscribe(response=>{
      this.user = response.json();
      this.userDetail = this.user[0].details;
    });
  }

  createDetails(details){
    this.service.createDetails(this.id, details.value).subscribe(response =>{
      console.log(response.json());
      this.router.navigate(['/user',this.id]);
    });
 }



}
