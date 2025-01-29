import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Rajveer First Angular Application';
  experiance = 2
  toggle = false
  handleButtonClick() {
    this.experiance++;
    this.toggle = !this.toggle
    console.log('Button clicked :' + this.experiance);
  }
  calculateNumbers(a: number, b: number) {
    this.handleButtonClick();
    console.log('Total number: ' + (a + b + this.experiance));
    console.log('Title: ' + this.title);
  }
  count = 0;
  buttonDisabled: boolean = true;
  handleButtonClicked(type: string) {
    switch (type) {
      case 'Increment':
        this.count = this.count + 1;
        break;
      case 'Decrement':
        this.count = this.count - 1;
        break;
      default:
        this.count = 0;
        break;
    }
    this.buttonDisabled = this.count > 0 ? false : true;
  }
  handleEvents(event: Event){
    console.log('Event type : ' + event.type);
    console.log('Target : ' + event.target);
    if(event.target as HTMLInputElement){
      console.log('Value : ' + (event.target as HTMLInputElement).value);
    }
  }
  email:string = ""
  getEmail(value: string){
    console.log('getEmail :'+ value);
    this.email = value;
  }
  students = [{
    name: 'John',
    age: 80,
    grade: 'A'
  },{
    name: 'Joshua',
    age: 78,
    grade: 'B'
  },{
    name: 'Josh',
    age: 34,
    grade: 'C'
  },{
    name: 'Johan',
    age: 67,
    grade: 'D'
  },{
    name: 'Tonny',
    age: 56,
    grade: 'E'
  },{
    name: 'Tom',
    age: 34,
    grade: 'F'
  },{
    name: 'Harry',
    age: 56,
    grade: 'G'
  },{
    name: 'Hudson',
    age: 25,
    grade: 'H'
  }];
  getSelectedStudentName(studentName : string) {
    alert('Selected Student name is ' + studentName);
  }
}
