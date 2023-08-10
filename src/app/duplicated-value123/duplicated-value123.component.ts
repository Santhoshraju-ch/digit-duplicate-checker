import { Component } from '@angular/core';

@Component({
  selector: 'app-duplicated-value123',
  templateUrl: './duplicated-value123.component.html',
  styleUrls: ['./duplicated-value123.component.css']
})
export class DuplicatedValue123Component {
  /*
  inputText1: string = '';
  inputText2: string = '';

  countDuplicatedDigits(): number {
    let count = 0;
    const uniqueDigitsMap = new Map<number, boolean>();

    for (const char of this.inputText1 + this.inputText2) {
      const digit = parseInt(char, 10);

      if (!isNaN(digit) && digit >= 0 && digit <= 9) {
        if (uniqueDigitsMap.has(digit)) {
          count++;
        } else {
          uniqueDigitsMap.set(digit, true);
        }
      }
    }

    return count;
  }

*/

  
 inputText1: string = '';
 inputText2: string = '';
  duplicateCount: number = 0;
  indexMatched: boolean = false;

  compareValues() {
    // Clear previous results
    this.duplicateCount = 0;
    this.indexMatched = false;

    // Logic to compare inputText1 and inputText2
    // Find duplicate 4-digit values and check index match

    // Example logic (this is a simplified example)
    for (let i = 0; i < this.inputText1.length - 3; i++) {
      const value1 = this.inputText1.substr(i, 4);
      const value2 = this.inputText2.substr(i, 4);
      
      if (value1 === value2) {
        this.duplicateCount++;
        if (i === this.inputText1.indexOf(value1)) {
          this.indexMatched = true;
        }
      }
    }
  }



  //inputText1: string = '';
  //inputText2: string = '';
  duplicatedValuesCount: number = 0;

  checkDuplicatedValues() {
    const charMap1 = this.createCharacterMap(this.inputText1);
    const charMap2 = this.createCharacterMap(this.inputText2);

    this.duplicatedValuesCount = this.countDuplicatedValues(charMap1, charMap2);
  }

  private createCharacterMap(inputText: string): Map<string, number> {
    const charMap = new Map<string, number>();
    for (const char of inputText) {
      if (charMap.has(char)) {
        charMap.set(char, charMap.get(char)! + 1);
      } else {
        charMap.set(char, 1);
      }
    }
    return charMap;
  }

  private countDuplicatedValues(map1: Map<string, number>, map2: Map<string, number>): number {
    let count = 0;
    for (const [char, occurrences] of map1) {
      if (map2.has(char)) {
        count += Math.min(occurrences, map2.get(char)!);
      }
    }
    return count;
  }


  text1: string = '';
  text2: string = '';
  duplicates: { value: string, count: number, positions: string }[] = [];

  ngOnInit() {
    this.findDuplicates();
  }

  findDuplicates() {
    const uniqueValues = new Set();
    const duplicatedValues = new Map();

    for (let i = 0; i < this.text1.length; i++) {
      const char = this.text1.charAt(i);

      if (uniqueValues.has(char)) {
        if (!duplicatedValues.has(char)) {
          duplicatedValues.set(char, { count: 2, positions: `${i + 1}` });
        } else {
          duplicatedValues.get(char).count++;
          duplicatedValues.get(char).positions += `, ${i + 1}`;
        }
      } else {
        uniqueValues.add(char);
      }
    }

    for (let i = 0; i < this.text2.length; i++) {
      const char = this.text2.charAt(i);

      if (uniqueValues.has(char)) {
        if (!duplicatedValues.has(char)) {
          duplicatedValues.set(char, { count: 2, positions: `${i + 1}` });
        } else {
          duplicatedValues.get(char).count++;
          duplicatedValues.get(char).positions += `, ${i + 1}`;
        }
      } else {
        uniqueValues.add(char);
      }
    }

    duplicatedValues.forEach((data, value) => {
      this.duplicates.push({ value, count: data.count, positions: data.positions });
    });
  }
}