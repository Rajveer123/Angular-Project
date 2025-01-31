import { Component } from '@angular/core';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-examplepages',
  imports: [FormsModule, NgIf,NgSwitch,NgSwitchCase, NgSwitchDefault],
  templateUrl: './examplepages.component.html',
  styleUrl: './examplepages.component.css'
})
export class ExamplepagesComponent {
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
  handleToggle(){
    this.toggle = !this.toggle;
  }
  color = "red";
  handleColorChanged(color:string) {
  this.color = color;
  }
}
