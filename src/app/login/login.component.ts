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
  handleButtonClick() {
    this.experiance++;
    console.log('Button clicked :'+ this.experiance);
  }
  calculateNumbers(a: number, b: number){
    this.handleButtonClick();
    console.log('Total number: '+ (a+b+this.experiance));
    console.log('Title: '+ this.title);
  }
  count = 0;
  handleButtonClicked(type: string){
    switch(type){ 
      case 'Increment':
        this.count = this.count+1;
        break;
      case 'Decrement':
        if(this.count > 0) {
          this.count = this.count-1;
        }
        break;
      default:
        this.count = 0;
        break;
    }
}
}
