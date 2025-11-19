import { romanoAArabigo, arabigoARomano } from "../romanos.js";

describe("romanoAArabigo", () => {
  test("Convierte I a 1", () => {
    expect(romanoAArabigo("I")).toBe(1);
  });

  test("Convierte XIV a 14", () => {
    expect(romanoAArabigo("XIV")).toBe(14);
  });

  test("Convierte mmxxv a 2025 (minúsculas)", () => {
    expect(romanoAArabigo("mmxxv")).toBe(2025);
  });

  test("Lanza error si se ingresa número arábigo", () => {
    expect(() => romanoAArabigo("123")).toThrow("Error");
  });

  test("Lanza error si se ingresa símbolo inválido", () => {
    expect(() => romanoAArabigo("ABCD")).toThrow("Error");
  });

  test("Lanza error si se ingresa tipo incorrecto", () => {
    expect(() => romanoAArabigo(123)).toThrow("Entrada inválida: se esperaba un número romano en texto.");
  });

});

describe("arabigoARomano", () => {
  test("Convierte 1 a I", () => {
    expect(arabigoARomano(1)).toBe("I");
  });

  test("Convierte 2025 a MMXXV", () => {
    expect(arabigoARomano(2025)).toBe("MMXXV");
  });

  test("Convierte 3999 a MMMCMXCIX (máximo permitido)", () => {
    expect(arabigoARomano(3999)).toBe("MMMCMXCIX");
  });

  test("Lanza error si se ingresa 0", () => {
    expect(() => arabigoARomano(0)).toThrow("Error");
  });

  test("Lanza error si se ingresa número decimal", () => {
    expect(() => arabigoARomano(3.14)).toThrow("Entrada inválida: se esperaba un número entero.");
  });

  test("Lanza error si se ingresa texto", () => {
    expect(() => arabigoARomano("XIV")).toThrow("Entrada inválida: se esperaba un número entero.");
  });

});