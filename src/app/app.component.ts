import { Component } from '@angular/core';
import { DemopagesComponent } from "./demopages/demopages.component";

@Component({
  selector: 'app-root',
  imports: [DemopagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Application';
}
