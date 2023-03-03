import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAttachmentsComponent } from './add-attachments/add-attachments.component';
import { QuickUploadComponent } from './quick-upload/quick-upload.component';
import { ShowAttachmentsComponent } from './show-attachments/show-attachments.component';

const routes: Routes = [
  
  {path: 'show-attachments', component: ShowAttachmentsComponent},
  {path: 'add-attachments', component: AddAttachmentsComponent},
  {path: 'quick-upload', component: QuickUploadComponent  },
  {path: '', redirectTo: '/show-attachments', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
