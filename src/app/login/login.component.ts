import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    username:string | null = "";
    password:string | null = "";
    constructor(private route : ActivatedRoute){}
    ngOnInit(){
      //Code to handle get values passed as routeLink as well as query parameters on same page
      if(this.route.snapshot.url.toString().split("=").length > 1) { 
        this.username = this.route.snapshot.paramMap.get("name");
        this.password = this.route.snapshot.paramMap.get("pass");
      } else {
        this.route.queryParamMap.subscribe(params =>{
          this.username = params.get("name");
          this.password = params.get("pass");
        })
      }
    }
}
