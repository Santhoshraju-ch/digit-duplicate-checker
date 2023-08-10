import { Component } from '@angular/core';

@Component({
  selector: 'app-digit-duplicate-checker-component',
  templateUrl: './digit-duplicate-checker-component.component.html',
  styleUrls: ['./digit-duplicate-checker-component.component.css']
})
export class DigitDuplicateCheckerComponentComponent {
  /*inputText1: string = '';
  inputText2: string = '';
  duplicateValuesCount: number = 0;
  indexMismatchCount: number = 0;

  compareTexts() {
    this.duplicateValuesCount = this.countDuplicateValues();
    this.indexMismatchCount = this.countIndexMismatch();
  }

  countDuplicateValues(): number {
    const uniqueDigitsText1 = new Set(this.inputText1.split(''));
    const uniqueDigitsText2 = new Set(this.inputText2.split(''));

    let count = 0;
    uniqueDigitsText1.forEach(digit => {
      if (uniqueDigitsText2.has(digit)) {
        count++;
      }
    });

    return count;
  }

  countIndexMismatch(): number {
    let count = 0;
    const minLength = Math.min(this.inputText1.length, this.inputText2.length);

    for (let i = 0; i < minLength; i++) {
      if (this.inputText1[i] === this.inputText2[i]) {
        count++;
      }
    }

    return count;
  }
*/

  text1: string = '';
  text2: string = '';
  countUnique: number = 0;
  countDifferent: number = 0;

  compareTexts12() {
    this.countUnique = this.calculateUniqueCount();
    this.countDifferent = this.calculateDifferentCount();
  }

  calculateUniqueCount() {
    let count = 0;
    // Compare characters at the same index
    for (let i = 0; i < this.text1.length; i++) {
      if (this.text1[i] === this.text2[i]) {
        count++;
      }
    }
    return count;
  }

  calculateDifferentCount() {
    let count = 0;
    // Compare characters at different indices
    for (let i = 0; i < this.text1.length; i++) {
      for (let j = 0; j < this.text2.length; j++) {
        if (i !== j && this.text1[i] === this.text2[j]) {
          count++;
        }
      }
    }
    return count;
  }
}