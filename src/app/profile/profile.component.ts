import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  name = new FormControl('rajveer');
  email = new FormControl('test@test.com');
  username:string | null = "";
  constructor(private route : ActivatedRoute){}
  ngOnInit(){
    this.username = this.route.snapshot.paramMap.get('name');
  }
  updateData(){
    this.name.setValue('defaultName');
    this.email.setValue('default@email.com');
  }
  submitData(){
    alert('Form Submitted with values i.e name = ' + this.name.value + ' email = ' + this.email.value);
  }
}
