import { Component, OnInit } from '@angular/core';
import { IserviceService } from '../iservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  selectedFile:File = null;

  constructor(private service:IserviceService,private http:HttpClient) { }
   
  ngOnInit() {
  }

  onFileSelected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  uploadImage(){
    const fd = new FormData();
    fd.set('image', this.selectedFile, this.selectedFile.name);
    this.http.post("http://localhost:3400/user/test/api/img",fd).subscribe(response=>{
      console.log(response);
    })
  }
}
