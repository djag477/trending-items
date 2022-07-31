import { replData } from "./replData";

export const parser = (str) => {
  const headers = str.slice(0, str.indexOf("\n")).split(",");
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
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
    replData.forEach((obj, i) => {
      for (let i in obj) {
        if (obj[i].test?.(elem.Model)) helperArr = [obj.model, obj.picture];
      }
    });

    return { ...elem, Repl: helperArr[0], Picture: helperArr[1] };
  });
  return standardizedData;
};

export const dataAggregator = (arr) => {
  const helperObj = {};
  for (let i = 0; i < arr.length; i++) {
    

    helperObj[arr[i].Repl] = helperObj[arr[i].Repl] + 1 || 1;
  }

  const aggregatedData = Object.entries(helperObj);

  

  arr.forEach((element) => {
    for (let i = 0; i < aggregatedData.length; i++) {
      if (element.Repl === aggregatedData[i][0])
        aggregatedData[i][2] = element.Picture;
    }
  });

  return aggregatedData;
};
