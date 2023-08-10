import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-text-compare-component-values',
  templateUrl: './text-compare-component-values.component.html',
  styleUrls: ['./text-compare-component-values.component.css']
})
export class TextCompareComponentValuesComponent {
  inputText1: string = '';
  inputText2: string = '';
  result: string = '';

  compareTexts() {
    const uniqueDigitsText1 = this.getUniqueDigits(this.inputText1);
    const uniqueDigitsText2 = this.getUniqueDigits(this.inputText2);

    const duplicateCount = this.countDuplicateDigits(uniqueDigitsText1, uniqueDigitsText2);

    // Generate a message with the duplicate count
    this.result = `Number of duplicated digits in unique values: ${duplicateCount}`;
  }

  getUniqueDigits(text: string): string {
    let uniqueDigits = '';
    for (let i = 0; i < text.length; i++) {
      if (!uniqueDigits.includes(text[i])) {
        uniqueDigits += text[i];
      }
    }
    return uniqueDigits;
  }

  countDuplicateDigits(text1: string, text2: string): number {
    let count = 0;
    for (let i = 0; i < text1.length; i++) {
      if (text2.includes(text1[i])) {
        count++;
      }
    }
    return count;
  }

  //inputText1: string = '';
  //inputText2: string = '';
  comparisonResult: {
    duplicatedDigitsCount: number,
    uniqueValues: string,
    matchedIndexes: string,
  } | null = null;

  compareInputs() {
    const result: any = {
      duplicatedDigitsCount: 0,
      uniqueValues: '',
      matchedIndexes: '',
    };

    const text1Set = new Set(this.inputText1);
    const text2Set = new Set(this.inputText2);

    for (const digit of text1Set) {
      if (text2Set.has(digit)) {
        result.duplicatedDigitsCount++;
        result.matchedIndexes += `Index: ${this.inputText1.indexOf(digit)} `;
      }
    }

    result.uniqueValues = [...text1Set].join(', ');

    this.comparisonResult = result;
  }

}


