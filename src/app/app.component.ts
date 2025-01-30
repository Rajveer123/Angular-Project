import { Component } from '@angular/core';
import { ExamplepagesComponent } from "./examplepages/examplepages.component";

@Component({
  selector: 'app-root',
  imports: [ExamplepagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Application';
}
