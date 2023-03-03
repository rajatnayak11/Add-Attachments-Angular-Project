import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowAttachmentsComponent } from './show-attachments/show-attachments.component';
import { AddAttachmentsComponent } from './add-attachments/add-attachments.component';
import { QuickUploadComponent } from './quick-upload/quick-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowAttachmentsComponent,
    AddAttachmentsComponent,
    QuickUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
