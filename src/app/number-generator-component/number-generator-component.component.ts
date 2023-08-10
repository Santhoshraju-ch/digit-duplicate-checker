import { Component } from '@angular/core';
@Component({
  selector: 'app-number-generator-component',
  templateUrl: './number-generator-component.component.html',
  styleUrls: ['./number-generator-component.component.css']
})
export class NumberGeneratorComponentComponent {
  numbers: number[] = [12345, 67890, 54321, 98765]; // Example array of numbers
  userInput: any;
  numberFound: boolean = false;

  findNumber() {
    this.numberFound = this.numbers.includes(this.userInput);
  }
}