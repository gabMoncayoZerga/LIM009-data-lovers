/* Manejo del DOM */
/*JavaScript: Cómo filtrar un array de objetos basado en un atributo
El elemento filter arroja un array dada una condición
*/
//CREANDO COPIA DE LA DATA//

  const copyData = (wbank) => {
  const wbankData = [];
  for (let i = 0; i < wbank.length; i++) {
    wbankData.push(Object.assign({}, wbank[i]));
  }
  return wbankData;
