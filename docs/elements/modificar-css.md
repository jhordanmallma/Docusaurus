---  
title: "Modificar CSS"  
sidebar_position: 5  
---


El panel de elementos no solo te permite inspeccionar el HTML, ¡también puedes editar y experimentar con el CSS en tiempo real! 

---

## ¿Por qué editar el CSS desde aquí?

Modificar estilos directamente desde las herramientas del navegador es útil para:

- Probar nuevos estilos sin modificar archivos fuente.
- Diagnosticar errores visuales o de diseño.
- Visualizar cómo se verían ciertos cambios antes de hacerlos permanentes.

---

## ¿Cómo hacerlo? 

### 1. Abre el panel de elementos
Haz clic derecho sobre cualquier elemento del sitio web y selecciona **“Inspeccionar”**.

### 2. Selecciona el elemento que deseas modificar
En la vista HTML, ubica el elemento. El navegador resaltará su ubicación en la página.

### 3. Cambia los estilos en el panel derecho
Al lado derecho del panel, verás una sección llamada **“Styles”** o **“Estilos”**, con todas las reglas CSS aplicadas al elemento.

Puedes:
- Agregar nuevas propiedades.
- Cambiar valores existentes.
- Quitar reglas (haciendo clic en la casilla al lado del nombre de la propiedad).

*Los cambios se aplican al instante**, pero **solo son temporales** (se pierden al recargar la página).

---

## Ejemplo práctico

Supongamos que tienes este botón:

```html
<button class="btn">Haz clic aquí</button>
```
En el panel de estilos puedes cambiar:

```css
.btn {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
}
```
A algo más llamativo:

```css
.btn {
  background-color: #e74c3c;
  color: yellow;
  padding: 15px 30px;
  font-weight: bold;
}
```
Y verás el cambio de inmediato.

## Agregar clases o eliminar estilos

Otras acciones disponibles:

**Gestión de clases**  
Haz clic en cualquier nombre de clase para:  
✓ Añadirla  
✓ Eliminarla  

**Edición avanzada**  
Escribe directamente en la sección `element` para:  
✓ Crear nuevas reglas CSS  
✓ Modificar estilos existentes  

## Ver qué archivo aplica el estilo

Cada regla CSS mostrada incluye una referencia (como `style.css:25`), lo que te indica:
- **Archivo de origen**: dónde está definido el estilo
- **Línea exacta**: ubicación específica en el código

Esto es especialmente útil si necesitas editar el código fuente para hacer cambios permanentes.

## Recuerda

Estos cambios **no se guardan automáticamente**. 

Úsalos para:
-  Experimentar con diferentes estilos
-  Entender cómo funcionan las propiedades CSS
-  Depurar problemas de diseño

Una vez que encuentres la solución perfecta, **aplica los cambios permanentemente** editando tus archivos `.css`.