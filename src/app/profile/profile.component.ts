import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
users = ["user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8"];
name = "Rajveer";
}
