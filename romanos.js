// Convierte número arábigo a romano
export function convertirArabigoARomano(num) {
  // Validaciones
  if (typeof num !== "number") {
    throw new Error("Entrada inválida: se esperaba un número entero.");
  }
  if (!Number.isInteger(num)) {
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
    { valor: 1, simbolo: "I" },
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

// Convierte número romano a arábigo (acepta mayúsculas y minúsculas)
export function convertirRomanoAArabigo(roman) {
  // Validación de tipo
  if (typeof roman !== "string") {
    throw new Error("Entrada inválida: se esperaba un número romano en texto.");
  }

  const mapa = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
  const cadena = roman.toUpperCase();

  let total = 0;
  for (let i = 0; i < cadena.length; i++) {
    const actual = mapa[cadena[i]];
    const siguiente = mapa[cadena[i+1]];

    if (!actual) {
      return NaN; // símbolo inválido
    }

    if (siguiente && actual < siguiente) {
      total -= actual;
    } else {
      total += actual;
    }
  }
  return total;
}

// Valida si un número romano es correcto (acepta mayúsculas y minúsculas)
export function esRomanoValido(roman) {
  return /^[IVXLCDM]+$/i.test(roman);
}