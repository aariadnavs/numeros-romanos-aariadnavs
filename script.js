document.addEventListener("DOMContentLoaded", () => {
  // Romano → Arábigo
  const romanoInput = document.getElementById("romanoInput");
  const convertirRomanoBtn = document.getElementById("convertirRomano");
  const resultadoRomano = document.getElementById("resultadoRomano");

  convertirRomanoBtn.addEventListener("click", async () => {
    const valor = romanoInput.value.trim();
    if (!valor) {
      resultadoRomano.textContent = "Por favor ingresa un número romano.";
      resultadoRomano.style.color = "red";
      return;
    }
    try {
      const res = await fetch(`/api/r2a?roman=${encodeURIComponent(valor)}`);
      const data = await res.json();
      if (!res.ok) {
        resultadoRomano.textContent = `⚠️ ${data.error}`;
        resultadoRomano.style.color = "red";
      } else {
        resultadoRomano.textContent = `✅ Resultado: ${data.arabic}`;
        resultadoRomano.style.color = "#1565c0";
      }
    } catch {
      resultadoRomano.textContent = "❌ Error de conexión.";
      resultadoRomano.style.color = "red";
    }
  });

  // Arábigo → Romano
  const arabigoInput = document.getElementById("arabigoInput");
  const convertirArabigoBtn = document.getElementById("convertirArabigo");
  const resultadoArabigo = document.getElementById("resultadoArabigo");

  convertirArabigoBtn.addEventListener("click", async () => {
    const valor = arabigoInput.value.trim();
    if (!valor) {
      resultadoArabigo.textContent = "Por favor ingresa un número arábigo.";
      resultadoArabigo.style.color = "red";
      return;
    }
    try {
      const res = await fetch(`/api/a2r?arabic=${encodeURIComponent(valor)}`);
      const data = await res.json();
      if (!res.ok) {
        resultadoArabigo.textContent = `⚠️ ${data.error}`;
        resultadoArabigo.style.color = "red";
      } else {
        resultadoArabigo.textContent = `✅ Resultado: ${data.roman}`;
        resultadoArabigo.style.color = "#1565c0";
      }
    } catch {
      resultadoArabigo.textContent = "❌ Error de conexión.";
      resultadoArabigo.style.color = "red";
    }
  });
});