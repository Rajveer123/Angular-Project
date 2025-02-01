import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('',[Validators.required, Validators.email])
  });
  username:string | null = "";
  constructor(private route : ActivatedRoute){}
  ngOnInit(){
    this.username = this.route.snapshot.paramMap.get('name');
    
  }
  updateData(){
    this.profileForm.controls.name.setValue('defaultName');
    this.profileForm.controls.email.setValue('default@email.com');
  }
  handleSubmit(){
    if (this.profileForm.valid) {
      alert('Form Submitted with name :'+ this.profileForm.value.name+' and email :'+ this.profileForm.value.email+'.');
    } else {
      alert('Form is invalid! Please fill all fields.');
    }
  }
}
