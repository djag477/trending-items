/* 

Two criterias found to know a "\n" found in a csv.split(",") is in the right place:
- The "\n" is right after "Date" (last header of the table)
- The "\n" is right after a patter of numbers that matches a date (last value of this set of data)

*/

export const validators = [
  new RegExp(/\bDate\b\n/),
  new RegExp(/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]\n/),
];
