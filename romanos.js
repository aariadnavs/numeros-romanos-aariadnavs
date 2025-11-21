// Conversión de arábigo a romano
export function convertirArabigoARomano(num) {
  // Validaciones de tipo y rango
  if (typeof num !== "number" || !Number.isInteger(num)) {
    throw new Error("Entrada inválida: se esperaba un número entero.");
  }
  if (num < 1 || num > 3999) {
    throw new Error("Error");
  }

  const valores = [
    { valor: 1000, simbolo: "M" },
    { valor: 900, simbolo: "CM" },
    { valor: 500, simbolo: "D" },
    { valor: 400, simbolo: "CD" },
    { valor: 100, simbolo: "C" },
    { valor: 90, simbolo: "XC" },
    { valor: 50, simbolo: "L" },
    { valor: 40, simbolo: "XL" },
    { valor: 10, simbolo: "X" },
    { valor: 9, simbolo: "IX" },
    { valor: 5, simbolo: "V" },
    { valor: 4, simbolo: "IV" },
    { valor: 1, simbolo: "I" }
  ];

  let resultado = "";
  for (const { valor, simbolo } of valores) {
    while (num >= valor) {
      resultado += simbolo;
      num -= valor;
    }
  }
  return resultado;
}

// Conversión de romano a arábigo
export function convertirRomanoAArabigo(roman) {
  // Validación de tipo
  if (typeof roman !== "string") {
    throw new Error("Entrada inválida: se esperaba un número romano en texto.");
  }

  // Normalizar a mayúsculas
  roman = roman.toUpperCase();

  const valores = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;

  for (let i = 0; i < roman.length; i++) {
    const actual = valores[roman[i]];
    const siguiente = valores[roman[i + 1]];

    // Si hay un carácter inválido, devolver NaN
    if (!actual) return NaN;

    if (siguiente && actual < siguiente) {
      total += siguiente - actual;
      i++;
    } else {
      total += actual;
    }
  }
  return total;
}

// Validación estricta de números romanos
export function esRomanoValido(roman) {
  const regex = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;
  return regex.test(roman);
}