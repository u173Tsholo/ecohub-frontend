import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
 ngOnInit(): void {
   throw new Error('Method not implemented.');
 }

 //url; //Angular 8
 url: any; //Angular 11, for stricter type
 msg = "";
 
 //selectFile(event) { //Angular 8
 selectFile(event: any) { //Angular 11, for stricter type
   if(!event.target.files[0] || event.target.files[0].length == 0) {
     this.msg = 'You must select an image';
     return;
   }
   
   var mimeType = event.target.files[0].type;
   
   if (mimeType.match(/image\/*/) == null) {
     this.msg = "Only images are supported";
     return;
   }
   
   var reader = new FileReader();
   reader.readAsDataURL(event.target.files[0]);
   
   reader.onload = (_event) => {
     this.msg = "";
     this.url = reader.result; 
   }
 }
 
}