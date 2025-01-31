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
users = [
  {name : "John", id: 2},
  {name : "Josh", id: 5},
  {name : "Tom", id: 6},
  {name : "Garry", id: 7},
  {name : "Hardy", id: 8},
  {name : "Peter", id: 9},
  {name : "Scott", id: 10}
];
  constructor(private router: Router){}
  sendUserName()
  {
    this.router.navigate(['profile', { name: 'Rajveer Singh'}]);
  }

}
