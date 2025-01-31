import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
name: string | null = null;
id : string | null = null;
constructor(private route : ActivatedRoute){}
ngOnInit(){
  this.route.params.subscribe(params =>{
    console.log(params);
    this.name = params['name'];
    this.id = params['id'];
  });
  }
}
