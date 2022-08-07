import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcoserviceService {
  baseUrl = "https://localhost:5001/api/";

  constructor(private http: HttpClient) { }

  getImageUpload(){
    return this.http.get<any>(this.baseUrl +'SupplierProduct/TestMethod')
  }
}
