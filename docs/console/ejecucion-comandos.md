---
title: "Ejecución de JavaScript (Executing JavaScript)"
description: "Cómo evaluar expresiones y ejecutar código JavaScript en el Panel de Consola"
sidebar_position: 2
---

# Ejecución de JavaScript

El **Panel de Consola** no es solo para ver mensajes: su línea de comandos integrada te permite **ejecutar cualquier fragmento de JavaScript** en el contexto de la página abierta. En esta sección aprenderás a evaluar expresiones, interactuar con el DOM y aprovechar atajos y comandos especiales.

---

###  Acceder a la línea de comandos

1. Abre las DevTools (p. ej. `Ctrl+Shift+I` / `Cmd+Option+I` o clic derecho > **Inspeccionar**).  
2. Sitúate en la pestaña **Console**.  
3. En la parte inferior verás el **prompt** (`>`), listo para escribir código.

---

###  Evaluar expresiones básicas

- Operaciones matemáticas:
  ```js
  > 2 + 2
  4
  ```
- Cadenas de texto:
 ```js
  > "Hola" + ", mundo!"
"Hola, mundo!"
  ```
Cada línea que escribas se evalúa al pulsar Enter y muestra el resultado.

### Variables y contexto de página

- Cualquier variable global definida por tus scripts es accesible:
 ```js
  > miVariable  // si existe en window.miVariable
 ```
- El objeto `window` es el contexto por defecto:
```js
  > window.location.href
"https://tusitio.com/pagina"
 ```
### Seleccionar elementos del DOM

La consola ofrece atajos para obtener elementos sin usar `document.querySelector` manualmente:

- `$0`: elemento actualmente seleccionado en el panel **Elements**.
- `$1`, `$2`, …: elementos seleccionados anteriormente.
- `$()`: alias de `document.querySelector`.
- `$$()`: alias de `document.querySelectorAll`.

```js
> $0.style.border = "2px solid red"
> $$("img")  // devuelve NodeList de todas las imágenes
```

### Comandos de la consola

`clear()`: limpia la consola.

`copy(expr)`: copia al portapapeles el resultado de expr.

`inspect(obj)`: abre el inspector sobre obj en el panel Elements.

`monitorEvents(obj, eventType)`: muestra eventos disparados en obj.

```js
> copy(document.title)
> inspect(document.body)
> monitorEvents(window, "click")
```

### Múltiples líneas y atajos**  

- **Shift + Enter**: Inserta salto de línea sin ejecutar.  
- **Flecha ↑/↓**: Recorre el historial de comandos.  
- **Tab**: Autocompleta variables y propiedades.  

Para escribir funciones o bloques largos, mantén presionado **Shift** y pulsa **Enter** para cada nueva línea.

### Ejemplo práctico

```js
// 1. Selecciona un elemento
const card = document.querySelector(".mi-card");

// 2. Modifica su estilo
card.style.backgroundColor = "#ff0";

// 3. Añade un manejador de clic
card.addEventListener("click", () => alert("¡Card clickeada!"));
```
Pega este bloque en la consola (con Shift + Enter entre líneas) y observa el resultado en tu página.


### Buenas prácticas
- Limpia la consola (`clear()`) antes de probar.  
- Usa `console.group()` / `groupEnd()` para agrupar salida.  
- Al terminar, elimina event listeners añadidos para no afectar tu aplicación.

