import { createPDF,createWord } from "@dropzone-ui/react";

export const listOfPDF = [
  {
    id: 4,
    valid: true,
    file: createPDF(),
    uploadStatus: "success",
    uploadMessage: "dropzone-ui <3"
  },
  { id: 1, valid: false, file: createPDF(), uploadStatus: undefined },
  { id: 2, valid: true, file: createPDF(), uploadStatus: undefined },
  { id: 3, valid: true, file: createPDF(), uploadStatus: "uploading" },
  { id: 5, valid: true, file: createPDF(), uploadStatus: "error" }
];


export const listOfWord = [
  { id: 1, valid: false, file: createWord(), uploadStatus: undefined },
  { id: 2, valid: true, file: createWord(), uploadStatus: undefined },
  { id: 3, valid: true, file: createWord(), uploadStatus: "uploading" },
  {
    id: 4,
    valid: true,
    file: createWord(),
    uploadStatus: "success",
    uploadMessage: "dropzone-ui <3"
  },
  { id: 5, valid: true, file: createWord(), uploadStatus: "error" }
];
