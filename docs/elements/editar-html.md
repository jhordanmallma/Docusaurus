---  
title: "Editar HTML"  
sidebar_position: 3  
---

# Editar HTML

Una de las funcionalidades más potentes del panel de elementos en las herramientas de desarrollo (DevTools) es la capacidad de editar el HTML directamente en el navegador. Esto permite realizar pruebas rápidas sin necesidad de modificar los archivos fuente.

## Acceder al panel de elementos

1. Abre tu navegador (como Chrome o Edge).
2. Haz clic derecho sobre cualquier parte de la página.
3. Selecciona **"Inspeccionar"** o presiona `Ctrl+Shift+I` (`Cmd+Opt+I` en Mac).
4. Se abrirá el panel de DevTools. Asegúrate de estar en la pestaña **"Elements"**.

## Editar el HTML en vivo

Una vez dentro del panel de elementos:

1. Sitúa el cursor sobre el elemento HTML que deseas modificar.
2. Haz clic derecho sobre la etiqueta y selecciona:
   - **Edit as HTML** para editar toda la estructura del nodo.
   - **Edit text** para modificar solo el contenido de texto dentro del nodo.

También puedes hacer doble clic sobre:
- El nombre de la etiqueta.
- Un atributo (como `class`, `id`, etc.).
- El valor de un atributo.

### Ejemplo

Supón que tienes el siguiente código HTML en la página:

```html
<h1 class="titulo">Bienvenido</h1>
```
Puedes cambiarlo directamente desde DevTools a:

```html
<h1 class="titulo">¡Hola Mundo!</h1>
```
El cambio se verá inmediatamente en la página, aunque no es permanente. Al recargar, el HTML original volverá a aparecer.

# Insertar nuevos elementos

Puedes agregar nuevos elementos HTML directamente dentro del DOM:

1. Haz clic derecho en el nodo donde quieras insertar el nuevo contenido.
2. Selecciona *"Edit as HTML"*.
3. Añade el código HTML deseado.

**Atajo útil**:  
Usa `Ctrl+Enter` (o `Cmd+Enter` en Mac) sobre una etiqueta seleccionada para insertar un nuevo elemento hermano justo debajo.

---

## Usos comunes

- Probar diseños rápidamente.
- Ocultar o mostrar elementos sin modificar CSS.
- Depurar estructuras anidadas.
- Simular contenido dinámico.

---

## Recomendaciones

 **Importante**:  
Los cambios hechos en DevTools son temporales (se pierden al recargar la página).

- Usa esta herramienta para:
  - Prototipos rápidos.
  - Pruebas visuales.
- Si un cambio es relevante, **implémentalo directamente en tu código fuente**.


**¿Listo para editar el HTML en tiempo real?**  
¡Sigue explorando y experimentando desde el panel de elementos! 🛠️✨


