import { convertirRomanoAArabigo, convertirArabigoARomano, esRomanoValido } from '../romanos.js';

describe("convertirRomanoAArabigo", () => {
  test("Convierte I a 1", () => {
    expect(convertirRomanoAArabigo("I")).toBe(1);
  });

  test("Convierte XIV a 14", () => {
    expect(convertirRomanoAArabigo("XIV")).toBe(14);
  });

  test("Convierte mmxxv a 2025 (minúsculas)", () => {
    expect(convertirRomanoAArabigo("mmxxv")).toBe(2025);
  });

  test("Devuelve número al recibir romano válido en minúsculas", () => {
    expect(convertirRomanoAArabigo("xiv")).toBe(14);
  });

  test("Devuelve número al recibir romano válido en mayúsculas", () => {
    expect(convertirRomanoAArabigo("XIV")).toBe(14);
  });

  test("Devuelve NaN si se ingresa número arábigo como string", () => {
    expect(convertirRomanoAArabigo("123")).toBeNaN();
  });

  test("Devuelve NaN si se ingresa símbolo inválido", () => {
    expect(convertirRomanoAArabigo("ABCD")).toBeNaN();
  });

  test("Lanza error si se ingresa tipo incorrecto (número en vez de string)", () => {
    expect(() => convertirRomanoAArabigo(123)).toThrow("Entrada inválida: se esperaba un número romano en texto.");
  });
});

describe("convertirArabigoARomano", () => {
  test("Convierte 1 a I", () => {
    expect(convertirArabigoARomano(1)).toBe("I");
  });

  test("Convierte 2025 a MMXXV", () => {
    expect(convertirArabigoARomano(2025)).toBe("MMXXV");
  });

  test("Convierte 3999 a MMMCMXCIX (máximo permitido)", () => {
    expect(convertirArabigoARomano(3999)).toBe("MMMCMXCIX");
  });

  test("Lanza error si se ingresa 0", () => {
    expect(() => convertirArabigoARomano(0)).toThrow("Error");
  });

  test("Lanza error si se ingresa número decimal", () => {
    expect(() => convertirArabigoARomano(3.14)).toThrow("Entrada inválida: se esperaba un número entero.");
  });

  test("Lanza error si se ingresa texto", () => {
    expect(() => convertirArabigoARomano("XIV")).toThrow("Entrada inválida: se esperaba un número entero.");
  });
});

describe("esRomanoValido", () => {
  test("Acepta números romanos válidos en mayúsculas", () => {
    expect(esRomanoValido("XIV")).toBe(true);
  });

  test("Acepta números romanos válidos en minúsculas", () => {
    expect(esRomanoValido("xiv")).toBe(true);
  });

  test("Rechaza caracteres inválidos", () => {
    expect(esRomanoValido("ABC")).toBe(false);
  });

  test("Rechaza números arábigos", () => {
    expect(esRomanoValido("123")).toBe(false);
  });
  test("Rechaza repeticiones excesivas como IIII", () => {
    expect(esRomanoValido("IIII")).toBe(false);
  });

  test("Rechaza estructura inválida como MMMCMMM", () => {
    expect(esRomanoValido("MMMCMMM")).toBe(false);
  });

  test("Rechaza mezcla de letras y números como 12abc", () => {
     expect(esRomanoValido("12abc")).toBe(false);
  });
});