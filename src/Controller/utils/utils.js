/**
 * Make query for backend
 * @param {*} filtrosKeys 
 * @param {*} filtrosValues 
 * @returns 
 */
export const makeQuery = (filtrosKeys = [], filtrosValues = []) => {
    console.log("make query",filtrosKeys,filtrosValues);
  let result = "";
  if (filtrosKeys.length > 0) {
    result += "?";
    for (let i = 0; i < filtrosKeys.length; i++) {
      result += `${filtrosKeys[i]}=${filtrosValues[i]}`;
      if (filtrosKeys.length - i > 1) {
        result += "&";
      }
    }
    return result;
  } else {
    return "";
  }
};

