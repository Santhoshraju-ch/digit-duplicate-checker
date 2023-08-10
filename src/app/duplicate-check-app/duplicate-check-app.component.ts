import { Component } from '@angular/core';

@Component({
  selector: 'app-duplicate-check-app',
  templateUrl: './duplicate-check-app.component.html',
  styleUrls: ['./duplicate-check-app.component.css']
})
export class DuplicateCheckAppComponent {

  

  inputString = "2540 is a  2541 number, but 5122 is also a number.";
 
  duplicates: string[] = [];

  findDuplicates(): void {
    const numberRegex = /\b\d{4}\b/g;
    const matches = this.inputString.match(numberRegex);

    if (matches) {
      const duplicatesSet = new Set<string>();
      const uniqueDuplicatesSet = new Set<string>();

      for (const match of matches) {
        if (duplicatesSet.has(match)) {
          uniqueDuplicatesSet.add(match);
        } else {
          duplicatesSet.add(match);
        }
      }

      this.duplicates = Array.from(uniqueDuplicatesSet);
    } else {
      this.duplicates = [];
    }
  

  }}