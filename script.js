document.addEventListener("DOMContentLoaded", () => {
  const inputValor = document.getElementById("valor");
  const selectTipo = document.getElementById("tipo");
  const botonConvertir = document.getElementById("convertir");
  const resultadoDiv = document.getElementById("resultado");

  botonConvertir.addEventListener("click", async () => {
    const valor = inputValor.value.trim();
    const tipo = selectTipo.value;

    if (!valor) {
      resultadoDiv.textContent = "Por favor ingresa un valor.";
      resultadoDiv.style.color = "red";
      return;
    }

    try {
      const res = await fetch(`/api/romanos?tipo=${tipo}&valor=${valor}`);
      const data = await res.json();

      if (data.error) {
        resultadoDiv.textContent = `⚠️ ${data.error}`;
        resultadoDiv.style.color = "red";
      } else {
        resultadoDiv.textContent = `✅ Resultado: ${data.resultado}`;
        resultadoDiv.style.color = "#1565c0"; // azul frío
      }
    } catch (err) {
      resultadoDiv.textContent = "❌ Error de conexión con el servidor.";
      resultadoDiv.style.color = "red";
    }
  });
});