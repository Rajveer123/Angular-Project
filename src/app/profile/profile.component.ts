import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
bgColor = "red";
bigFontSize = 60;
samllFontSize = 20;
toggle = false;
users = ["user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8"];
name = "Rajveer";
task = "";
todoList:{name:string, id:number}[] = []
addTask(){
this.todoList.push({name:this.task, id:this.todoList.length+1});
this.task = "";
}
deleteTask(id:number){
this.todoList = this.todoList.filter(item => item.id!==id);
}
changeFont(){
  this.toggle =!this.toggle;
}
}
