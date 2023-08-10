import { Component } from '@angular/core';

@Component({
  selector: 'app-number-checker',
  templateUrl: './number-checker.component.html',
  styleUrls: ['./number-checker.component.css']
})

  export class NumberCheckerComponent {
    inputNumber: string = ''; // Input from the user
    predefinedList: number[] = [12345, 67890, 54321, 98765, 43210];
    
    checkNumber(): void {
      const num = parseInt(this.inputNumber, 10);
      const position = this.predefinedList.indexOf(num);
      const duplicatedDigits = this.findDuplicatedDigits(num);
      
      console.log(`Position: ${position !== -1 ? position + 1 : 'Not found'}`);
      console.log(`Duplicated Digits: ${duplicatedDigits.length > 0 ? duplicatedDigits.join(', ') : 'None'}`);
    }
    
    private findDuplicatedDigits(num: number): number[] {
      const digitCount: number[] = new Array(10).fill(0);
      const digits: number[] = [];
      
      let n = num;
      while (n > 0) {
        const digit = n % 10;
        digitCount[digit]++;
        digits.unshift(digit);
        n = Math.floor(n / 10);
      }
      
      const duplicated: number[] = [];
      for (let i = 0; i < digitCount.length; i++) {
        if (digitCount[i] > 1) {
          duplicated.push(i);
        }
      }
      
      return duplicated;
    }
  }

