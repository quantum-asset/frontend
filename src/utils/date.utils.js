export class SuperDate {
  static parseDate = (date = "") => {
    console.log("before parse", date);
    let responseDate = {
      yy: "",
      mm: "",
      dd: "",
      hh: "",
      mn: "",
      ss: "",
    };
    if (date !== "" && date.includes("T")) {
      const splitedDAte = date.split("T");
      let datePart = splitedDAte[0];
      let timePart = splitedDAte[1];
      let timeValue = timePart.split(".")[0];
      let timeOffset = timePart.split(".")[1];
      responseDate = {
        ...responseDate,
        ...{
          yy: datePart.split("-")[0],
          mm: datePart.split("-")[1],
          dd: datePart.split("-")[2],
          hh: timeValue.split(":")[0],
          mn: timeValue.split(":")[1],
          ss: timeValue.split(":")[2],
          timeOffset: timeOffset,
        },
      };
    }
    console.log("afetr parse", responseDate);

    return responseDate;
  };
}
