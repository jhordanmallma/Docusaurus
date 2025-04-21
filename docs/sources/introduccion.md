---
title: "Introducción al Panel de Fuentes (Sources Panel)"
description: "Visión general y flujo de trabajo básico en el panel Sources de DevTools"
sidebar_position: 1
---

# Introducción al Panel de Fuentes (Sources Panel)

El **Panel de Fuentes** (Sources Panel) de DevTools te permite **explorar**, **depurar** y **editar** el código fuente de tu aplicación (JavaScript, HTML, CSS) directamente en el navegador. Gracias a él puedes:

- Navegar por los archivos y carpetas que carga la página.  
- Poner y gestionar **breakpoints** para pausar la ejecución del script.  
- Inspeccionar el **call stack** y el ámbito de variables en cada punto de interrupción.  
- Probar cambios en vivo sin salir de DevTools.  

---

## ¿Cuándo usar el Panel de Fuentes?

- Para depurar errores en tu código JavaScript paso a paso.  
- Cuando necesites entender el flujo de ejecución y el estado de las variables.  
- Para editar archivos en vivo y ver el resultado inmediato.  
- Al optimizar rendimiento y estudiar el comportamiento de funciones críticas.  

---

## Vista general de la interfaz

Al abrir DevTools (`Ctrl+Shift+I` / `Cmd+Option+I`) y seleccionar la pestaña **Sources**, encontrarás:

1. **Navegador de archivos** (panel izquierdo):  
   Árbol jerárquico con todas las fuentes cargadas (carpetas de tu proyecto, librerías externas, overrides).

2. **Editor de código** (panel central):  
   Visualiza el contenido de cada archivo. Aquí puedes añadir, quitar o editar líneas de código.

3. **Panel lateral derecho**:  
   - **Call Stack**: muestra la pila de llamadas cuando la ejecución está detenida.  
   - **Scope**: lista las variables locales, de cierre (closures) y globales disponibles en el punto actual.

4. **Panel inferior (Drawer)**:  
   Opcionalmente, puedes abrir una **Consola** o **Breakpoints** adicionales, así como pestañas de **Watch** y **XHR Breakpoints**.

---

## Flujo de trabajo básico

1. **Selecciona un archivo** en el navegador de fuentes.  
2. **Coloca un breakpoint** haciendo clic en el número de línea.  
3. **Recarga** la página o ejecuta la funcionalidad que deseas depurar.  
4. Cuando la ejecución se detenga, explora el **call stack** y los **scopes** para entender el estado de tu aplicación.  
5. Usa los botones de **Step Over**, **Step Into** y **Step Out** para avanzar en el código.  
6. Realiza cambios en el editor y guarda (`Ctrl+S` / `Cmd+S`) para aplicar parches rápidos (si tienes habilitado Live Edit).

---

## Atajos útiles

- **Ir a archivo**: `Ctrl+P` / `Cmd+P`  
- **Ir a línea**: `Ctrl+G` / `Cmd+G`  
- **Toggle breakpoint**: clic en el gutter o `Ctrl+B` / `Cmd+B`  
- **Step Over**: `F10`  
- **Step Into**: `F11`  
- **Step Out**: `Shift+F11`  
- **Toggle drawer**: `Esc`  

---

**Próximos pasos en Sources:**  
- [Navegación de Archivos](navegacion-de-archivos)  
- [Depuración con Breakpoints](breakpoints)  
- [Contexto y Ejecución](contexto-y-llamadas)  
- [Edición en Vivo](edicion-en-vivo)  
