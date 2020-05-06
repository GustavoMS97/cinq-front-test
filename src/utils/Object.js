/**
 * Metodo para validar dois objetos.
 *
 * @param {Object} obj1 objeto para validar
 * @param {Object} obj2 objeto para validar
 */
export const differentObjects = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  // Testa o tamanho do array de propriedades, se são todas as mesmas e se todas têm o mesmo valor.
  return (
    keys1.length !== keys2.length ||
    keys1.filter((key) => !keys2.includes(key)).length > 0 ||
    keys1.filter((key) => obj1[`${key}`] !== obj2[`${key}`]).length > 0
  );
};

/**
 * Método para validar dois arrays de objetos.
 *
 * @param {Array} arr1 array para validar
 * @param {Array} arr2 array para validar
 */
export const differentArrayOfObjects = (arr1, arr2) => {
  const eqItems = [];
  // Testa todos os itens de um array com o outro, procurando os iguais
  arr1.forEach((item) => {
    for (let i = 0; i < arr2.length; i++) {
      const item2 = arr2[i];
      if (!differentObjects(item, item2)) {
        eqItems.push(item);
        break;
      }
    }
  });
  return arr1.length !== arr2.length || eqItems.length !== arr1.length;
};
