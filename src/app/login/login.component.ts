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
}
