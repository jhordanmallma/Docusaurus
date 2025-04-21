---
title: "Contexto y Llamadas (Call Stack & Scope)"
description: "Comprender cómo funciona la pila de llamadas y el contexto de ejecución al depurar con DevTools"
sidebar_position: 3
---

# Contexto y Llamadas (Call Stack & Scope)

Cuando la ejecución de JavaScript se detiene por un **breakpoint**, puedes inspeccionar a detalle *cómo llegó* hasta ese punto y *qué variables existen* en ese momento. Para eso, DevTools nos proporciona el **Call Stack** y el **Scope**.

---

## 1. ¿Qué es el Call Stack?

El **Call Stack** o pila de llamadas muestra la cadena de funciones que han sido llamadas hasta llegar a la línea actual.

📌 Imagina que tienes este código:

```js
function iniciar() {
  calcular();
}

function calcular() {
  mostrarResultado();
}

function mostrarResultado() {
  console.log("Resultado mostrado");
}

iniciar();
```
Si colocas un breakpoint en console.log, el Call Stack se verá así:


```js
mostrarResultado
calcular
iniciar
(anonymous)
```

Esto indica que mostrarResultado() fue llamada por calcular(), que a su vez fue llamada por iniciar().

### 2. Explorar funciones en la pila

En el panel **Call Stack** (Pila de llamadas):
- Haz clic en cualquier función para:
  - Ver su **contexto de ejecución**
  - Saltar directamente a su ubicación en el código

**Casos de uso principales:**
✔ Reconstruir el **flujo exacto** de ejecución  
✔ Retroceder para revisar **funciones anteriores**  
✔ Verificar el **orden** de llamadas entre funciones  

### 3. Scope: el contexto de ejecución

El panel **Scope** muestra las variables accesibles en el punto actual de ejecución, organizadas por niveles:

- **Local**: Variables de la función actual
- **Closure**: Variables de funciones externas (capturadas por closures)
- **Script/Global**: Variables globales del programa

#### Ejemplo práctico:
```javascript
let globalVar = "Hola";

function externa() {
  let externaVar = "Soy externa";

  function interna() {
    let internaVar = "Soy interna";
    debugger; // Punto de pausa
  }

  interna();
}

externa();
```
Cuando se detiene en `debugger`, el Scope mostrará:

- **internaVar** (Local)
- **externaVar** (Closure)
- **globalVar** (Global)

### 4. Modificar valores desde Scope

Puedes editar variables directamente en el panel **Scope**:

1. **Haz clic** en el valor actual de la variable  
2. **Ingresa** el nuevo valor  
3. **Presiona** `Enter` para confirmar  

**Uso práctico:**  
Prueba diferentes escenarios modificando valores *en tiempo de ejecución* sin alterar tu código fuente.  

**Ejemplo:**  
Cambia `internaVar` de `"Soy interna"` a `"Valor modificado"` para ver cómo afecta el flujo.

### 5. ¿Y si no ves Scope o Call Stack?

**Solución paso a paso:**

1️⃣ **Verifica que la ejecución esté pausada**:
   - Debe estar activo un `breakpoint` o la sentencia `debugger`
   - El botón de pausa (⏸️) debe aparecer activo en DevTools

2️⃣ **Si los paneles no son visibles**:
   - Presiona `Esc` para abrir el drawer inferior
   - Navega a la pestaña **"Sources"** (o "Debugger" en Firefox)
   - Busca las secciones:
     - **Scope** (para variables)
     - **Call Stack** (para pila de llamadas)

**Consejo profesional**:  
Usa el atajo `Ctrl+Shift+D` (Windows/Linux) o `Cmd+Shift+D` (Mac) para alternar la visibilidad del drawer de depuración.


### 6. Buenas prácticas

**1. Call Stack para flujos complejos**  
- Analiza funciones encadenadas en la pila de llamadas  
- Reconstruye el camino de ejecución paso a paso  

**2. Scope para verificación en tiempo real**  
- Inspecciona los valores actuales de variables  
- Compara valores esperados vs reales durante la ejecución  

**3. Modificación temporal de variables**  
- Haz pruebas rápidas cambiando valores en el Scope  
- Simula diferentes escenarios sin modificar el código fuente  

**Beneficios clave:**  
✔ Diagnóstico más rápido de errores  
✔ Comprensión profunda del flujo del programa  
✔ Pruebas interactivas sin recompilación  