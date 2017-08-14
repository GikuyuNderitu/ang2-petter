import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

@Input() type: string;
@Input() noise: string;

@Output() makeNoise: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  pet() {
    this.makeNoise.emit(this.noise);
  }

}
