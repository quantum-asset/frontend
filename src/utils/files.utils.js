

/**
 * Descarga un archivo de texto.
 * Recive el nombre del archivo y el contenido
 * @param {string} filename 
 * @param {string} text 
 */
 export const downloadTexFile =(filename, text) =>{
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }