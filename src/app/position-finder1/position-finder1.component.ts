import { Component } from '@angular/core';

@Component({
  selector: 'app-position-finder1',
  templateUrl: './position-finder1.component.html',
  styleUrls: ['./position-finder1.component.css']
})
export class PositionFinder1Component {
  number: string = '12344'; // Input 5-digit number
  duplicatedDigits: string[] = []; // Array to store duplicated digits

  checkDigits() {
    const digitCount: number[] = new Array(10).fill(0);
    this.duplicatedDigits = [];

    if (this.number.length !== 5) {
      // Check if the input is a valid 5-digit number
      return;
    }

    for (let i = 0; i < this.number.length; i++) {
      const digit = parseInt(this.number[i], 10);
      digitCount[digit]++;
      if (digitCount[digit] > 1 && !this.duplicatedDigits.includes(digit.toString())) {
        this.duplicatedDigits.push(digit.toString());
      }
    }
  }
}