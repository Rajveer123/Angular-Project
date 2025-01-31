import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
username:string = "";
password:string = "";

  constructor(private router: Router){}
  sendUserName()
  {
    this.router.navigate(['profile', { name: 'Rajveer Singh'}]);
  }

}
