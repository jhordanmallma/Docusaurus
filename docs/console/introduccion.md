---
title: "Introducción al Panel de Consola (Console Panel)"
description: "Visión general de la Consola en DevTools y sus funcionalidades principales"
sidebar_position: 1
---

# Introducción al Panel de Consola (Console Panel)

El **Panel de Consola** (Console Panel) forma parte de las DevTools de los navegadores y te permite interactuar directamente con la página mediante **JavaScript**, así como **ver mensajes**, **errores**, **advertencias** y **avisos** que el navegador o tu código generan.

---

## ¿Para qué sirve la Consola?

- **Depurar código**: detectar y diagnosticar errores (`error`), advertencias (`warn`) y mensajes informativos (`log`).  
- **Probar fragmentos de JavaScript**: ejecutar expresiones o funciones ad hoc sin modificar tu código fuente.  
- **Ver trazas (stack traces)**: entender el flujo de ejecución y ubicación de fallos.  
- **Monitorear rendimiento**: medir tiempos con `console.time()` y analizar resultados.  
- **Inspeccionar objetos**: visualizar estructuras de datos complejas y sus propiedades.

---

## Elementos clave de la interfaz

1. **Barra de filtros**  
   Permite mostrar u ocultar mensajes según su nivel (All, Errors, Warnings, Info) o buscar texto dentro de las entradas.

2. **Área de mensajes**  
   Muestra la salida de `console.log()`, errores, advertencias, resultados de expresiones y más. Aquí también verás avisos de seguridad o deprecaciones.

3. **Línea de comandos**  
   En la parte inferior, puedes escribir código JavaScript; al presionar Enter, se ejecuta inmediatamente en el contexto de la página.

4. **Autocompletado**  
   La consola sugiere propiedades, variables y métodos mientras escribes, agilizando la exploración del DOM y objetos globales.

---

## Atajos útiles

- **Abrir/Cerrar Consola**:  
  - Windows/Linux: `Ctrl + Shift + J`  
  - Mac: `Cmd + Option + J`

- **Limpiar la consola**:  
  - `Ctrl + L` (Windows/Linux)  
  - `Cmd + K` (Mac)

- **Navegar historial**:  
  - Flecha arriba/abajo para volver a comandos anteriores.

---

## Buenas prácticas

- Usa `console.group()` y `console.groupEnd()` para agrupar mensajes relacionados.  
- Emplea `console.table()` para visualizar arrays u objetos en formato tabular.  
- Limpia la consola antes de cada prueba para mantenerla legible.  

---

**¿Qué sigue?**  
- [Ejecución de JavaScript](ejecucion-comandos)  
- [API de la Consola](api-de-console)  
- [Filtrado y Búsqueda de Mensajes](filtros-y-busqueda)  
