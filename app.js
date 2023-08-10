// Sample input string
const inputString = "12345 is a 12345 number, but 54321 is also a number.";

// Regular expression to match 5-digit numbers
const numberRegex = /\b\d{5}\b/g;

// Find all matches of 5-digit numbers
const matches = inputString.match(numberRegex);

if (matches) {
  const duplicates = new Set();
  const uniqueDuplicates = new Set();

  for (const match of matches) {
    if (duplicates.has(match)) {
      uniqueDuplicates.add(match);
    } else {
      duplicates.add(match);
    }
  }

  if (uniqueDuplicates.size > 0) {
    console.log("Duplicate 5-digit numbers:", Array.from(uniqueDuplicates));
  } else {
    console.log("No duplicate 5-digit numbers found.");
  }
} else {
  console.log("No 5-digit numbers found in the string.");
}