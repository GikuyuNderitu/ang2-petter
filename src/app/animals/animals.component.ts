import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

@Output() petted: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  makeNoise(noise) {
    this.petted.emit(noise);
  }

}
