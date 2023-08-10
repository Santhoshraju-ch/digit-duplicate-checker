import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digit-checker',
  templateUrl: './digit-checker.component.html',
  styleUrls: ['./digit-checker.component.css']
})
export class DigitCheckerComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  number: number = 12345; // The 5-digit number
  duplicatedDigits: Set<number> = this.findDuplicatedDigits(this.number);
 
  private findDuplicatedDigits(num: number): Set<number> {
   
   
    const digitSet: Set<number> = new Set();
    const duplicatedSet: Set<number> = new Set();

    for (let i = 0; i < 5; i++) {
      const digit = num % 10;
      if (digitSet.has(digit)) {
        duplicatedSet.add(digit);
      } else {
        digitSet.add(digit);
      }
      num = Math.floor(num / 10);
    }

    return duplicatedSet;
  }}

