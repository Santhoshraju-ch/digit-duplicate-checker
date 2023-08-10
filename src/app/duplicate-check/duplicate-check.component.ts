import { Component } from '@angular/core';

@Component({
  selector: 'app-duplicate-check',
  templateUrl: './duplicate-check.component.html',
  styleUrls: ['./duplicate-check.component.css']
})
export class DuplicateCheckComponent {
 number: number = 12345; // The 5-digit number
  duplicateDigits: string = this.findDuplicateDigits(this.number);

  private findDuplicateDigits(num: number): string {
    let duplicateDigits = '';

    for (let i = 0; i <= 9; i++) {
      let count = 0;
      let n = num;
      
      while (n > 0) {
        const digit = n % 10;
        if (digit === i) {
          count++;
        }
        n = Math.floor(n / 10);
      }
      
      if (count > 1) {
        duplicateDigits += `${i} `;
      }
    }

    return duplicateDigits.trim();
  }
}