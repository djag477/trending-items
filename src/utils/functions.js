/* similar resource to the dataValidator.js. An object for each bicycle model with different properties, 
the standard model name, a picture and different regular expressions to asssign the right name and picture*/
import { replData } from "./replData";

export const parser = (str) => {
  /* takes the headers out of the csv string slicing until the first line break "\n" */
  const headers = str.slice(0, str.indexOf("\n")).split(",");
  /* takes the rest of the string and splits it by "\n" to make the rows*/
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  /* takes each row and reduces it to an object where each header is a key with its corresponding value paired to make a single array of objects */
  const arr = rows.map((elem) => {
    const cell = elem.split(",");
    const cellValue = headers.reduce((object, header, index) => {
      object[header] = cell[index];
      return object;
    }, {});
    return cellValue;
  });
  return arr;
};

export const dataStandardizer = (arr) => {
  const standardizedData = arr.map((elem) => {
    let helperArr;
    // itirates over every object in replData
    replData.forEach((obj, i) => {
      // if any property of the object is a regular expression it evaluates which umbrella name fits the model name by the user and also assigns the picture
      for (let i in obj) {
        if (obj[i].test?.(elem.Model)) helperArr = [obj.model, obj.picture];
      }
    });
    // includes a Repl (umbrella model name) and Picture property to each row object, so it's possible to sort by occurances of the model
    return { ...elem, Repl: helperArr[0], Picture: helperArr[1] };
  });
  return standardizedData;
};

export const dataAggregator = (arr) => {
  //Counts occurances of a Repl
  const helperObj = {};
  for (let i = 0; i < arr.length; i++) {
    helperObj[arr[i].Repl] = helperObj[arr[i].Repl] + 1 || 1;
  }

  const aggregatedData = Object.entries(helperObj);
  // includes the picture of each of the Repls
  arr.forEach((element) => {
    for (let i = 0; i < aggregatedData.length; i++) {
      if (element.Repl === aggregatedData[i][0])
        aggregatedData[i][2] = element.Picture;
    }
  });

  return aggregatedData;
};
