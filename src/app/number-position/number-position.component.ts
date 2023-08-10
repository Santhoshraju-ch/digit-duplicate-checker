import { Component } from '@angular/core';

@Component({
  selector: 'app-number-position',
  templateUrl: './number-position.component.html',
  styleUrls: ['./number-position.component.css']
})
export class NumberPositionComponent {
  
  
number: number = 12318; // The 5-digit number
targetDigit: number = 3; // The digit you want to find
position: number = this.findDigitPosition(this.number, this.targetDigit);

private findDigitPosition(num: number, digit: number): number {
  const numString: string = num.toString();
  const digitIndex: number = numString.indexOf(digit.toString()) + 1;
  return digitIndex > 0 ? digitIndex : -1; // Return -1 if digit is not found
}
}