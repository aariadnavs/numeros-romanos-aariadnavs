# Conversor de Números Romanos

Aplicación web y API para convertir números arábigos a números romanos (y viceversa) con validaciones estrictas.

## Características del programa

- ✅ Conversión de arábigo a romano (1–3999)
- ✅ Conversión de romano a arábigo (validando gramática)
- ✅ API pública desplegada en Vercel (/a2r y /r2a)
- ✅ Validaciones de errores (formato inválido, repeticiones excesivas, rango incorrecto)
- ✅ Tests unitarios con Jest para asegurar calidad

## Instalacion local
1. Clonar el repositorio
   `git clone` https://github.com/aariadnavs/numeros-romanos-aariadnavs.git
3. Instalar las dependencias con `npm install`.
4. Ejecutar en local (con servidor dev).
   `npm run dev`
6. Correr los tests
   `npm test`

## Uso de la API
Ejemplos de endpoints:
- *Arábigo → Romano*

GET https://tu-app.vercel.app/a2r?arabic=2025
Response: { "roman": "MMXXV" }

- Romano → Arábigo

GET https://tu-app.vercel.app/r2a?roman=MMXXV
Response: { "arabic": 2025 }
 
- Errores

GET /a2r?arabic=12abc
Response: { "error": "Número inválido" }


## Frontend

- Interfaz simple en index.html + script.js para probar las conversiones.
- Diseño con paleta fría, accesible y dinámica para el ojo humano y los usuarios.


## Tests

- Framework: Jest
- Cobertura:
- Conversión correcta de números válidos
- Manejo de minúsculas/mayúsculas
- Errores en entradas inválidas (IIII, MMMCMMM, 12abc, etc.)


## Despliegue

- Plataforma: Vercel
- Configuración: vercel.json con rewrites para /a2r y /r2a.

# Proyecto desarrollado por Ariadna Santillan

<img width="1919" height="1032" alt="imagen" src="https://github.com/user-attachments/assets/f62c2d11-5c90-4189-bca5-0873b199a8b1" />



