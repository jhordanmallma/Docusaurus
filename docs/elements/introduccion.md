---
title: "Introducción al Panel de Elementos"
sidebar_position: 1  
---

El **Panel de Elementos** (o **Elements Panel**) es una de las herramientas más poderosas del Inspector de Elementos. Permite visualizar y editar el **HTML** y el **CSS** de una página web en tiempo real. Gracias a este panel, puedes inspeccionar cualquier componente visual de un sitio web y comprender cómo está construido y estilizado.

---

## ¿Qué puedes hacer con el Panel de Elementos?

Aquí tienes un resumen de sus principales utilidades:

- **Inspeccionar la estructura HTML** de la página (DOM).
- **Ver y modificar estilos CSS** asociados a cada elemento.
- **Agregar, quitar o editar elementos del DOM.**
- **Activar o desactivar reglas CSS temporalmente.**
- **Ver pseudoelementos** como `::before` y `::after`.
- **Analizar clases, estilos en línea, herencia y especificidad.**
- **Ver los estilos aplicados por el navegador por defecto (user agent styles).**

---

## Partes principales del panel

El Panel de Elementos generalmente está dividido en dos secciones:

### Árbol DOM (izquierda)

Muestra la estructura jerárquica del documento HTML. Aquí puedes:

- Expandir o contraer elementos `<div>`, `<ul>`, `<nav>`, etc.
- Hacer clic derecho en cualquier nodo para editar, eliminar o copiar.
- Ver atributos como `class`, `id`, `src`, `href`, etc.

### Reglas CSS (derecha)

Muestra todos los estilos aplicados al elemento seleccionado:

- Estilos internos (`<style>`), externos (`.css`) e inline (`style=""`).
- Pseudoclases como `:hover`, `:focus`, `:active`.
- Propiedades heredadas de elementos padres.
- Caja del modelo (Box model): margin, border, padding y tamaño del contenido.

---

## Ejemplo práctico

1. Abre el inspector con `F12` o clic derecho > "Inspeccionar".
2. Haz clic en el ícono de selección (esquina superior izquierda del inspector).
3. Selecciona un elemento en la página (por ejemplo, un título).
4. En la sección derecha verás sus estilos CSS. Prueba modificarlos en tiempo real (por ejemplo, cambia el color o el tamaño de letra).
5. Observa cómo los cambios se aplican inmediatamente, sin recargar la página.

>  Estos cambios **no se guardan permanentemente**, son temporales y se pierden al recargar.

---

##  Tip adicional

Puedes editar el HTML directamente. Solo haz doble clic sobre cualquier etiqueta, atributo o contenido, ¡y pruébalo! Es excelente para hacer pruebas rápidas sin tener que cambiar el código fuente original.

---

##  Conclusión

El Panel de Elementos es ideal tanto para desarrolladores como para personas que quieren aprender cómo está estructurada una página web. Dominar este panel te ayudará a depurar errores visuales, probar diseños y entender el comportamiento del código.

