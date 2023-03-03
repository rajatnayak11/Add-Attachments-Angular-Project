import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Attachment } from './attachment';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  public baseURL = "http://localhost:8080/upload/file" 

  constructor(private http: HttpClient) { }



  getAttachments(): Observable<Attachment[]>{
    return this.http.get<Attachment[]>(`${this.baseURL}`);
  }

  getAttachmentById(id: number): Observable<Attachment>{
    return this.http.get<Attachment>(`${this.baseURL}/${id}`)
  }

  createAttachment(file: any): Observable<any>{
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData);
      return this.http.post<any>(this.baseURL,formData);
  }

  deleteAttachmentById(id: number): Observable<Object>{
    return this.http.delete(`${this.baseURL}/${id}`);
 }

}
