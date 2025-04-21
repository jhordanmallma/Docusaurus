---  
title: "Estructura del DOM (Document Object Model)"  
sidebar_position: 2  
---

El **DOM (Modelo de Objetos del Documento)** es la estructura interna que representa el contenido de una página web. Cuando abres una página en el navegador, este convierte todo el HTML en una estructura jerárquica que puede ser inspeccionada y modificada dinámicamente desde el **Panel de Elementos**.

---

## ¿Qué es el DOM?

El DOM es una representación en forma de **árbol** del contenido HTML. Cada etiqueta es un **nodo**, y estos nodos están anidados unos dentro de otros de forma jerárquica.

📌 Por ejemplo:

```html
<html>
  <body>
    <h1>Título</h1>
    <p>Este es un párrafo.</p>
  </body>
</html>
```

Se representaría visualmente en el DOM así:

```html
html
└── body
    ├── h1
    └── p
```

# ¿Para qué sirve visualizar el DOM?

Visualizar el DOM desde el inspector permite:

✅ **Comprender** cómo está estructurada una página  
✅ **Diagnosticar** problemas de maquetación  
✅ **Acceder fácilmente** a elementos para editar su contenido  
✅ **Verificar** si un script o componente se renderizó correctamente  

---

## 🔧 Tips útiles

🔹 **Menú contextual** (clic derecho en cualquier etiqueta):
   - Editar como HTML  
   - Eliminar elemento  
   - Copiar selector  
   -  Copiar XPath  

🔹 **Hover effect**: Al pasar el mouse sobre un nodo, el navegador resalta el elemento en la página  

🔹 **Selección rápida**: Usa el botón de flecha (🔎) en la barra de herramientas del inspector para seleccionar elementos directamente en la vista del sitio


---

## 🛠️ Ejemplo práctico

1. Abre cualquier sitio web  
2. Presiona `F12` o clic derecho → *"Inspeccionar"*  
3. Navega al panel **Elements** (Chrome/Edge) o **Inspector** (Firefox)  
4. Explora el árbol del DOM:  
   ```html
   <html>
     <body>
       <header>...</header>
       <main>...</main>
     </body>
   </html>
   ```
5. Observa cómo cada nodo se relaciona con la estructura visual



