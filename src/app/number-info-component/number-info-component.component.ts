import { Component } from '@angular/core';

@Component({
  selector: 'app-number-info-component',
  templateUrl: './number-info-component.component.html',
  styleUrls: ['./number-info-component.component.css']
})
export class NumberInfoComponentComponent {
  number: number = 12355; // The 5-digit number
  position: number = this.findPosition(this.number);
  hasDuplicates: boolean = this.checkDuplicates(this.number);

  private findPosition(num: number): number {
    // You should implement your logic here to find the position of the number.
    // This could involve searching through an array or some other data source.
    // For the sake of example, let's assume you have an array of numbers.
    const numbers: number[] = [12355, 67890, 54321, 98765, 43210,12335,37122];
    return numbers.indexOf(num) + 1;
  }

  private checkDuplicates(num: number): boolean {
    const digitSet: Set<number> = new Set();
    let n = num;
    while (n > 0) {
      const digit = n % 10;
      if (digitSet.has(digit)) {
        return true; // Duplicate digit found
      }
      digitSet.add(digit);
      n = Math.floor(n / 10);
    }
    return false; // No duplicate digit found
  }
}




