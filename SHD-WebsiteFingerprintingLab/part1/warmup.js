const runs = 10;

console.log("Hello World!")
function measureOneLine() {
  const LINE_SIZE = 16; // 64/sizeof(int)
  let result = [];

  // Fill with -1 to ensure allocation
  const M = new Array(runs * LINE_SIZE).fill(-1);

  for (let i = 0; i < runs; i++) {
    const start = performance.now();
    let val = M[i * LINE_SIZE];
    const end = performance.now();

    result.push(end - start);
  }

  return result;
}

function measureNLines() {
  let nResult = [];
  let N = 1000000;
  for(let i = 0; i < N; i++){
    nResult= nResult.concat(measureOneLine());   
  } 
  console.log(average(nResult));
  return nResult;
}

function average(array) {
  // Verificar se a array não está vazia para evitar divisão por zero
  if (array.length === 0) {
      return 0; // Ou qualquer valor padrão que você deseje retornar para uma array vazia
  }

  // Somar todos os elementos da array
  let soma = array.reduce((total, elemento) => total + elemento, 0);

  // Calcular a média dividindo a soma pelo número de elementos
  let media = soma / array.length;

  return media;
}

document.getElementById(
  "exercise1-values"
).innerText = `1 Cache Line: [${measureOneLine().join(", ")}]`;

document.getElementById(
  "exercise2-values"
).innerText = `N Cache Lines: [${measureNLines().join(", ")}]`;
