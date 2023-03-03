import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quick-upload',
  templateUrl: './quick-upload.component.html',
  styleUrls: ['./quick-upload.component.css']
})

export class QuickUploadComponent implements OnInit {
  
  public multipleFiles = [];
  
  ngOnInit(): void {
    
  }

addMultipleFile(event:any)
{
  if( event.target.files.length>0)
  {
    this.multipleFiles = event.target.files;
    console.log(this.multipleFiles);
  }

  const formdata = new FormData();
  for(let fl of this.multipleFiles)
  {
    formdata.append('files',fl);
    console.log(formdata);
  }

}

  onMultipleSubmit(){

    const formdata = new FormData();

    for(let fl of this.multipleFiles)
    {
      formdata.append('files',fl);
      
    }

  }

}
