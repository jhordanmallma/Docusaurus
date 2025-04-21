---
title: "Depuración con Breakpoints (Breakpoints)"
description: "Cómo poner, usar y gestionar puntos de interrupción en el panel Sources de DevTools"
sidebar_position: 2
---

# Depuración con Breakpoints (Breakpoints)

Los **breakpoints** (puntos de interrupción) son la base de la depuración paso a paso: permiten pausar la ejecución de tu JavaScript en una línea concreta o bajo ciertas condiciones, para inspeccionar el estado de la aplicación.

---

### 1. Poner un breakpoint simple

1. Abre DevTools (`Ctrl+Shift+I` / `Cmd+Option+I`) y ve a la pestaña **Sources**.  
2. En el navegador de archivos (panel izquierdo), abre el archivo `.js` que quieras depurar.  
3. Haz clic en la zona del **gutter** (números de línea) junto al número de línea donde deseas pausar.  
4. Aparecerá un punto azul que indica que el breakpoint está activo.

Cuando recargues o ejecutes la funcionalidad correspondiente, la ejecución se detendrá justo en esa línea.

---

### 2. Breakpoints condicionales

Para pausar solo cuando se cumpla una condición:

1. Haz clic derecho sobre un breakpoint existente (punto azul).  
2. Elige **“Edit breakpoint…”**.  
3. Introduce una expresión JavaScript que deba evaluarse a `true`, por ejemplo:
   ```js
   user.isAdmin === false
   ```
4. Presiona Enter. Ahora el breakpoint solo detendrá la ejecución cuando la condición se cumpla.

### 3. Breakpoints de eventos y XHR/fetch

**Event Listener Breakpoints:**  
En la sección *"Event Listener Breakpoints"* (panel derecho):  
- Expande categorías como **Mouse**, **Keyboard** o **Timer**.  
- Marca eventos (ej. `click`).  
- La ejecución se detendrá cada vez que ocurra ese evento en la página.  

**XHR / Fetch Breakpoints:**  
En *"XHR/fetch Breakpoints"*:  
- Haz clic en **"+"**.  
- Especifica una URL o patrón (ej. `/api/usuarios`).  
- La ejecución se detendrá cuando se realice esa petición de red.  

### 4. Gestionar y eliminar breakpoints

- **Desactivar temporalmente un breakpoint:**  
  Haz clic sobre el punto azul → se volverá **gris**.  

- **Eliminar un breakpoint:**  
  - Haz **clic derecho** sobre él y selecciona *"Remove breakpoint"*.  
  - O bien, haz clic sobre el breakpoint manteniendo pulsada **Alt/Option**.  

- **Panel Breakpoints (Drawer inferior/lateral):**  
  - Lista todos tus breakpoints.  
  - Permite **activar/desactivar** o **eliminar en bloque**.  


  ### 5. Avanzando en la ejecución

Cuando la ejecución está pausada, usa los controles de depuración:  

| Acción       | Atajo          |
|--------------|----------------|
| **Step Over** (Avanzar paso a paso) | `F10` |
| **Step Into** (Entrar en función) | `F11` |
| **Step Out** (Salir de función) | `Shift + F11` |
| **Resume** (Reanudar ejecución) | `F8` |

Estos controles permiten:  
- Avanzar **línea a línea**,  
- Entrar en **funciones**,  
- Salir de ellas, o  
- **Reanudar** la ejecución normal.  


### 6. Ejemplo práctico

```javascript
// archivo app.js
function procesarUsuarios(users) {
  users.forEach(u => {
    console.log("Procesando", u.name);
    validarUsuario(u);
  });
}

function validarUsuario(user) {
  if (!user.isActive) {
    console.error("Usuario inactivo:", user.id); // [Coloca aquí tu breakpoint]
  }
}
```

### Pasos para depurar:

1. Abre `app.js` en la pestaña **Sources** (o **Debugger**)
2. Añade un breakpoint en la línea con `console.error`
3. Recarga la aplicación con un usuario inactivo
4. La ejecución se pausará automáticamente
5. Inspecciona el objeto `user` en el panel de variables

### 7. Buenas prácticas

- **Breakpoints condicionales**  
  Úsalos para evitar pausas en cada iteración de bucles.  
  *Ejemplo:* Pausar solo cuando `i > 100` en un bucle largo.

- **Organización de breakpoints**  
  - Agrupa tus breakpoints en el panel correspondiente  
  - Usa nombres descriptivos cuando sea posible  
  - Desactiva temporalmente los que no uses activamente  

- **Limpieza post-depuración**  
  - Elimina todos los breakpoints al terminar  
  - Usa el botón "Remove all breakpoints" para limpieza rápida  
  - Esto evita interrupciones en futuras sesiones de prueba  

