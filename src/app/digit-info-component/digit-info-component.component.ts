import { Component } from '@angular/core';

@Component({
  selector: 'app-digit-info-component',
  templateUrl: './digit-info-component.component.html',
  styleUrls: ['./digit-info-component.component.css']
})
export class DigitInfoComponentComponent {
  number: number = 1352; // The 5-digit number
  targetDigit: number = 2; // The digit you want to find
  
  findPositionAndDuplicates() {
    const numAsString = this.number.toString();
    const targetIndex = numAsString.indexOf(this.targetDigit.toString()) + 1;
    
    let hasDuplicates = false;
    for (let i = 0; i < numAsString.length - 1; i++) {
      if (numAsString.indexOf(numAsString[i], i + 1) !== -1) {
        hasDuplicates = true;
        break;
      }
    }
    
    return { targetIndex, hasDuplicates };
  }
}