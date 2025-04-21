---
title: "Manejo de Errores y Advertencias (Error & Warning Handling)"
description: "Cómo leer, filtrar y depurar errores y advertencias en la Consola de DevTools"
sidebar_position: 7
---

# Manejo de Errores y Advertencias (Error & Warning Handling)

En la **Consola de DevTools** los errores (`console.error`) y advertencias (`console.warn`) te ayudan a identificar y solucionar problemas en tu código. En esta sección aprenderás a interpretarlos, navegar por las trazas (stack traces) y usar funciones avanzadas para detener la ejecución en el punto preciso del fallo.

---

## 1. Tipos de mensajes

- **Errores** (`Error`): indican fallos que suelen impedir la ejecución correcta del script.  
- **Advertencias** (`Warning`): sugerencias o prácticas no recomendadas, pero que no bloquean la ejecución.  
- **Deprecaciones**: avisos de características obsoletas.  
- **Info** (`console.info`): mensajes informativos.

---

## 2. Leer la traza de pila (Stack Trace)

1. Cuando aparece un error, la Consola muestra el mensaje junto a la ruta y línea del archivo:  
 ```js 
 Uncaught TypeError: x is not a function at script.js:45:13 at main.js:10:5
 ```
 2. Haz clic en el enlace `script.js:45` para abrir la fuente en el **panel Sources**.  
3. Verás el código exacto donde ocurrió el error y podrás inspeccionarlo.

---

## 3. Filtrar solo Errores o Advertencias

- En la **Barra de filtros** (All, Errors, Warnings…), haz clic en **Errors** (⛔) para ocultar todo lo demás.  
- Alterna entre niveles con **Alt+1–4** (Win/Linux) o **Option+1–4** (Mac).  
- Usa la búsqueda (Ctrl+F / Cmd+F) para localizar mensajes por texto o patrón.

---

## 4. Pausar en excepciones

Para que DevTools detenga la ejecución justo cuando ocurre un error:

1. Ve al **panel Sources**.  
2. En la barra derecha, activa **“Pause on exceptions”** (⏸️ icon).  
3. Si deseas también pausar en excepciones capturadas (caught), activa **“Pause on caught exceptions”**.  
4. Refresca la página o reproduce el flujo que genera el error: la ejecución se detendrá en la línea exacta.

---

## 5. Blackboxing de scripts

Si trabajas con librerías externas y no quieres detenerte en su código:

1. En **Sources**, haz clic derecho en el archivo o carpeta de tu librería.  
2. Selecciona **“Blackbox script”**.  
3. Los breakpoints y “pause on exception” ignorarán ese código, centrándote en tu propia lógica.

---

## 6. Uso de `debugger`

Puedes insertar la sentencia `debugger;` directamente en tu JavaScript:

```js
function calcular() {
debugger;
// resto de código...
}
```
Cuando se ejecute, DevTools pausará la ejecución en esa línea, permitiéndote inspeccionar variables y el call stack.

## 7. Buenas prácticas

- Revisa siempre primero los errores en rojo antes de cualquier otro mensaje.
- Limpia la consola (`clear()` o `Cmd+K`) entre pruebas para mantenerla legible.
- Elimina o desactiva logs de error intensivos en producción para no sobrecargar la consola del usuario.