import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-add-attachments',
  templateUrl: './add-attachments.component.html',
  styleUrls: ['./add-attachments.component.css']
})
export class AddAttachmentsComponent implements OnInit {
  
  file!: File;
  
  constructor(private http: HttpClient, private attachmentService: UploadFileService) {}
  
  ngOnInit(): void {

  }


  addFile(event: any){
  this.file = event.target.files[0];
    console.log(this.file);
  }

  

  onSubmit(){
    console.log("inside onSubmit");
  //  this.attachmentService.createAttachment(formData)
  
   
      console.log("calling service class");
      this.attachmentService.createAttachment(this.file)
        .subscribe(res => {console.log(res);
          alert('Uploaded Successfully.');
      }, error => console.log(error))
    
  }
}
