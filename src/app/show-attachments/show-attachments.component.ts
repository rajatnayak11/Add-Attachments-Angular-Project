import { Component, OnInit } from '@angular/core';
import { Attachment } from '../attachment';
import { UploadFileService } from '../upload-file.service';

@Component({
  selector: 'app-show-attachments',
  templateUrl: './show-attachments.component.html',
  styleUrls: ['./show-attachments.component.css']
})
export class ShowAttachmentsComponent implements OnInit {
  
  public attachment = new Attachment;
  public attachments!: Attachment[];

  constructor(private attachmentService: UploadFileService){}


  ngOnInit(): void {
    this.getAttachments();
  }

  getAttachments(){
    this.attachmentService.getAttachments().subscribe(data => this.attachments = data);
  }

  onClickDelete(id: number)
  {
    this.attachmentService.deleteAttachmentById(id).subscribe(data =>{
      this.getAttachments();
    })
  }

  onClickDownload(id: number)
  {
    this.attachmentService.getAttachmentById(id).subscribe(data => {
      this.attachment = data;
    })

  }

  


}
