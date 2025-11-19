import { romanoAArabigo, arabigoARomano } from "../romanos.js";

export default function handler(req, res) {
  const { tipo, valor } = req.query;

  // Validación básica
  if (!tipo || !valor) {
    return res.status(400).json({ error: "Faltan parámetros: tipo y valor son obligatorios." });
  }

  try {
    if (tipo === "romano") {
      const resultado = romanoAArabigo(valor);
      return res.status(200).json({ resultado });
    }

    if (tipo === "arabigo") {
      const numero = Number(valor);
      if (isNaN(numero)) {
        throw new Error("Entrada inválida: se esperaba un número arábigo.");
      }
      const resultado = arabigoARomano(numero);
      return res.status(200).json({ resultado });
    }

    return res.status(400).json({ error: "Tipo inválido: debe ser 'romano' o 'arabigo'." });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}