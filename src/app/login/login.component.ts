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
      this.username = this.route.snapshot.paramMap.get("name");
      this.password = this.route.snapshot.paramMap.get("pass");
    }
}
