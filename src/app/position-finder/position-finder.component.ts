import { Component } from '@angular/core';

@Component({
  selector: 'app-position-finder',
  templateUrl: './position-finder.component.html',
  styleUrls: ['./position-finder.component.css']
})
export class PositionFinderComponent {
  //inputString = "12345 is a 12345 number, but 12345 is also a number.";
  inputString = "5132 is a 1234 number, but 12345 is also a number.";
  
  //inputString = "78910 is a 00000 number, but 00000 is also a number.";
  
  positions: number[] = [];

  findPositions() {
    const numberRegex = /\b\d{5}\b/g;
    this.positions = [];
    let match;
    while ((match = numberRegex.exec(this.inputString))) {
      this.positions.push(match.index);
    }
  }
}