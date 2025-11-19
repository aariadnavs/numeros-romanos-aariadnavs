// Mapa de valores romanos
const valoresRomanos = {
  I: 1, V: 5, X: 10, L: 50,
  C: 100, D: 500, M: 1000
};

// Orden de símbolos para validación
const simbolosValidos = Object.keys(valoresRomanos);

// Función: Romano → Arábigo
function romanoAArabigo(romano) {
  if (typeof romano !== "string") {
    throw new Error("Entrada inválida: se esperaba un número romano en texto.");
  }

  const entrada = romano.toUpperCase().trim();

  if (!/^[IVXLCDM]+$/.test(entrada)) {
    throw new Error("Error: el valor ingresado no parece ser un número romano válido.");
  }

  let total = 0;
  let anterior = 0;

  for (let i = entrada.length - 1; i >= 0; i--) {
    const actual = valoresRomanos[entrada[i]];
    if (actual < anterior) {
      total -= actual;
    } else {
      total += actual;
      anterior = actual;
    }
  }

  return total;
}

// Función: Arábigo → Romano
function arabigoARomano(numero) {
  if (typeof numero !== "number" || !Number.isInteger(numero)) {
    throw new Error("Entrada inválida: se esperaba un número entero.");
  }

  if (numero < 1 || numero > 3999) {
    throw new Error("Error: el número debe estar entre 1 y 3999.");
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
  let restante = numero;

  for (const item of valores) {
    while (restante >= item.valor) {
      resultado += item.simbolo;
      restante -= item.valor;
    }
  }

  return resultado;
}

// Exportar funciones
export { romanoAArabigo, arabigoARomano };