import { FileItem, FileItemContainer } from "@dropzone-ui/react";
//import { FileItem ,FileItemContainer} from "../dropzone-ui";
import { listOfPDF, listOfWord } from "./listOfFiles";


function FileItemProps(props) {
  const handleDelete = (id) => {
    alert("deleted " + id);
  };
  return (
    <FileItemContainer view="list">
      {[...listOfWord, ...listOfPDF].map((f, index) => (
        <FileItem {...f} key={index+1} onDelete={handleDelete} info />
      ))}
    </FileItemContainer>
  );
}

export default FileItemProps;