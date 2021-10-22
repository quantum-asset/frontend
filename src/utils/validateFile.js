export const validateFile = (file, validator) => {
  const idGenerated = 1;
  let errors = [];

  const { maxFileSize } = validator;

  //check file size
  if (maxFileSize && file.size > maxFileSize) {
    errors.push(
      `El archivo excede el tamaño máximo permitido el cual es ${maxFileSize}`
    );
  }
  const fileResult = {
    id: idGenerated,
    file: file,
    valid: errors.length === 0,
    errors: errors,
  };
  // logic here
  return fileResult;
};
