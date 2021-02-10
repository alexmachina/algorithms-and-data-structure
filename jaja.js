function sameFrequency(n1, n2) {
  // criar uma tabela de frequencia para n1.
  let frequency = {};
  for (let i = 0; i < n1.length; i++) {
    const key = n1[i];
    frequency[key] = frequency[key] ? ++frequency[key] : 1;
  }

  // caso o item de n2 não exista na tabela de frequencia, retornar false. Caso exista, subtrair 1 da tabela de frequencia

  for (let i = 0; i < n2.length; i++) {
    const key = n2[i];
    if (!frequency[key]) {
      return false;
    }

    frequency[key]--;
  }

  return true;
}
console.log(sameFrequency("123", "123"));
