---
title: "Medición de Tiempo (Time Measurement)"
description: "Uso de `console.time()`, `console.timeEnd()` y `console.timeLog()` para medir rendimiento desde la Consola de DevTools"
sidebar_position: 5
---

# Medición de Tiempo (Time Measurement)

En el **Panel de Consola** de DevTools puedes medir de forma sencilla y precisa el tiempo de ejecución de bloques de código usando los métodos nativos de la API de consola. Esta funcionalidad es ideal para identificar cuellos de botella y optimizar el rendimiento de tu aplicación.

---

## 1. Iniciar un temporizador con `console.time()`

```js
console.time("cargaInicial");
// ... código que quieres medir ...
```
El argumento `"cargaInicial"` es una etiqueta que identifica el temporizador.

**Uso:**
1. Abre la Consola de desarrollo (DevTools)
2. Ejecuta este código
3. Deja que tu aplicación continúe su ejecución normal

## 2. Finalizar y mostrar el tiempo con console.timeEnd()

```javascript
console.timeEnd("cargaInicial");
// Salida: cargaInicial: 123.45ms
```

- Al llamar a `console.timeEnd()` con la misma etiqueta:  
  *La Consola mostrará el tiempo transcurrido en milisegundos*

- Utilidad principal:  
  *Permite medir con precisión desde el inicio hasta el final de un proceso específico*

- Características clave:
  - Funciona en pareja con `console.time()`
  - Muestra el resultado automáticamente en la consola
  - Soporta múltiples temporizadores simultáneos (con etiquetas diferentes)
  - Se limpia automáticamente al finalizar

## 3. Registrar tiempos intermedios con console.timeLog()

**Para monitorear múltiples etapas de un proceso:**

```javascript
console.time("proceso");  // Inicia temporizador

// ... paso 1 del proceso ...
console.timeLog("proceso", "después de paso 1");  // Registro intermedio 1

// ... paso 2 del proceso ...
console.timeLog("proceso", "después de paso 2");  // Registro intermedio 2

console.timeEnd("proceso");  // Finaliza y muestra tiempo total
```

La Consola mostrará:

```makefile
proceso: 10.50ms después de paso 1
proceso: 25.20ms después de paso 2
proceso: 40.00ms
```

## 4. Múltiples temporizadores simultáneos

**Mide diferentes procesos independientes en paralelo:**

```javascript
// Inicia dos temporizadores con etiquetas distintas
console.time("renderizado");
console.time("peticiones");

// ... código relacionado con renderizado UI ...
console.timeEnd("renderizado");  // Finaliza solo el de renderizado

// ... código para llamadas API/fetch ...
console.timeEnd("peticiones");   // Finaliza solo el de peticiones
```
**La Consola mostrará ambos tiempos por separado, lo que facilita comparar diferentes secciones.**

## 5. Ejemplo práctico: midiendo carga de datos

**Implementación para medir una petición API:**

```javascript
console.time("fetchUsuarios"); // Inicia temporizador

fetch("/api/usuarios")
  .then(res => res.json())
  .then(usuarios => {
    // Registro intermedio con datos útiles
    console.timeLog("fetchUsuarios", 
      `${usuarios.length} usuarios cargados`);
    
    // Procesamiento adicional...
    console.timeEnd("fetchUsuarios"); // Finaliza temporizador
  })
  .catch(error => {
    console.error("Error en fetchUsuarios:", error);
    console.timeEnd("fetchUsuarios"); // Asegura cierre en errores
  });
 ```
- Mide desde la petición hasta la conversión JSON.

- Usa `console.timeLog` para saber cuántos usuarios llegaron antes de terminar. 

### 6. Consejos y mejores prácticas

- Usa etiquetas claras (por ejemplo, `"render-header"`, `"load-data"`).
- Elimina `console.time` y `console.timeEnd` en producción o envuélvelos en un flag de desarrollo.
- Para medir funciones recursivas o loops, pon `console.timeLog` dentro de cada iteración.
- Aprovecha agrupaciones (`console.group()`) para estructurar la salida cuando tengas muchos temporizadores.
