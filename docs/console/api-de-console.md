---
title: "API de la Consola (Console API Methods)"
description: "Descripción y uso de los métodos principales de la API `console` en DevTools"
sidebar_position: 3
---

# API de la Consola (Console API Methods)

La **API de la Consola** proporciona una serie de métodos que te ayudan a **depurar**, **visualizar** y **organizar** la salida de información en DevTools. A continuación, encontrarás los más usados y cómo aplicarlos en tu flujo de trabajo.

---

## `console.log()` / `console.info()` / `console.warn()` / `console.error()`

- **`console.log(...args)`**  
  El método más básico para imprimir valores y objetos:
  ```js
  console.log("Usuario:", user);
  ```
- **`console.info(...args)`**  
  Similar a log, pero con icono ℹ️ y semántica de información:

  ```js
  console.info("Carga completa");

  ```
- **`console.warn(...args)`**  
  Muestra advertencias con icono ⚠️:

  ```js
  console.warn("Deprecated API en uso");

  ```
- **`console.error(...args)`**  
  Reporta errores con traza de pila y color rojo ⛔:

  ```js
  console.error("Fallo al cargar datos:", error);

  ```
- **`console.table()`**  
  Permite visualizar arrays u objetos en formato tabular:


  ```js
  const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" },
   ];
  console.table(usuarios);

  ```
Ideal para comparar propiedades de forma clara.

- **`console.group() / console.groupCollapsed() / console.groupEnd()`**  
  Agrupa mensajes relacionados para mantener la consola ordenada:

  ```js
  console.group("Carga de datos");
  console.log("Iniciando petición…");
  console.log("Datos recibidos:", datos);
  console.groupEnd();

  ```
`groupCollapsed()` inicia el grupo contraído por defecto.

- **`console.count() / console.countReset()`**  
  Lleva un contador para saber cuántas veces se ejecuta un bloque:


  ```js
  console.count("Visitas al botón");
  // …varias llamadas…
  console.countReset("Visitas al botón");

  ```
Muestra en consola mensajes incrementales como: `Visitas al botón: 1`, `Visitas al botón: 2`, etc.


- **`console.assert()`**  
  
  Registra un error si una condición es falsa. Útil para validaciones rápidas:

  ```js
  console.assert(user.isAdmin, "El usuario no tiene permisos de admin");


  ```
Si isAdmin es false, verás un error con el mensaje indicado.

- **`console.trace()`**  
  
  Imprime la traza de pila actual, mostrando el camino de llamadas hasta ese punto:


  ```js
  function a() { b(); }
  function b() { c(); }
  function c() { console.trace("Trace desde c"); }
  a();

  ```
Te ayuda a entender el flujo de ejecución.

- **`console.clear()`**  
  
  Limpia la consola para empezar desde cero:


  ```js
  console.clear();


  ```
También puedes pulsar `Ctrl + L` (Windows/Linux) o `Cmd + K` (Mac).

- **`console.dir() / console.dirxml()`**  
  
  Limpia la consola para empezar desde cero:


  ```js
  console.clear();


  ```
También puedes pulsar `Ctrl + L` (Windows/Linux) o `Cmd + K` (Mac).

- **`console.dir() / console.dirxml()`**  


`console.dir(obj)` muestra un árbol de propiedades de un objeto JavaScript.

`console.dirxml(node)` representa un nodo del DOM en formato XML.

```js
  console.dir(document.body);
  console.dirxml(document.body);

```

- **`console.profile() / console.profileEnd()`**  

Inicia y detiene un perfil de rendimiento guardado en DevTools:



```js
  console.profile("renderizado");
// … código a medir …
console.profileEnd("renderizado");

```

Aparecerá un perfil en el panel Performance para análisis detallado.

## Buenas prácticas

- **Elimina logs innecesarios**:  
  Desactiva o elimina `console.log` antes de llevar tu código a producción.

- **Agrupa la salida**:  
  Usa `console.group()` o `console.groupCollapsed()` para organizar mensajes relacionados.

- **Diagnóstico de fallos**:  
  Aprovecha `console.assert()` para validaciones y `console.trace()` para rastrear llamadas.

- **Medición y comparación**:  
  Combina `console.time()` con `console.group()` para comparar rendimiento de bloques de código.