import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-samplepages',
  imports: [],
  templateUrl: './samplepages.component.html',
  styleUrl: './samplepages.component.css'
})
export class SamplepagesComponent {
  name: string = '';
 constructor(private route : ActivatedRoute){}
 ngOnInit() {
  this.route.data?.subscribe(data => {
    this.name = data['name'];
  })
 }
}
