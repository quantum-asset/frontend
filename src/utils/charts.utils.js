export const MAX = 19;
export const intToRGB = function (value, alpha, max) {
  const valueAsPercentageOfMax = value / max;
  // actual max is 16777215 but represnts white so we will take a max that is
  // below this to avoid white
  const MAX_RGB_INT = 16600000;
  const valueFromMaxRgbInt = Math.floor(MAX_RGB_INT * valueAsPercentageOfMax);

  //credit to https://stackoverflow.com/a/2262117/2737978 for the idea of how to implement
  const blue = Math.floor(valueFromMaxRgbInt % 256);
  const green = Math.floor((valueFromMaxRgbInt / 256) % 256);
  const red = Math.floor((valueFromMaxRgbInt / 256 / 256) % 256);

  return "rgba(" + red + "," + green + "," + blue + "," + alpha + ")";
};