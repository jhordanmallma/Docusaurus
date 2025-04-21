---
title: Pseudo‑elementos
description: Cómo ver, editar y probar pseudo‑elementos (::before, ::after, etc.) desde el Panel de Elementos.
---

#  Pseudo‑elementos 

Los **pseudo‑elementos** no existen como nodos reales en el DOM, pero DevTools te los muestra para que puedas inspeccionarlos y modificar sus estilos sin tocar tu HTML. En esta sección aprenderás a localizarlos, editarlos y probar efectos en tiempo real.

---

## 1. ¿Dónde aparecen los pseudo‑elementos?

1. En el **Árbol del DOM** (panel izquierdo), los navegadores suelen mostrar flechas desplegables junto al elemento padre:

```markdown
div.my-card  
├── ::before  
└── ::after  
```

2. En la **pestaña Styles** (panel derecho), verás reglas etiquetadas como `selector::before` o `selector::after`.

---

## 2. Ver y resaltar el pseudo‑elemento

- **Paso 1:** Selecciona el elemento padre (p.ej. `div.my-card`).  
- **Paso 2:** Expande los nodos `::before` o `::after` en el árbol.  
- **Paso 3:** Al pasar el cursor sobre uno de ellos, el inspector lo resaltará en la página.

---

## 3. Editar el contenido y estilos

1. En **Styles**, localiza la regla `div.my-card::before`.  
2. Modifica la propiedad `content` directamente:
```css
content: "★ ";
```
3. Cambia colores, tamaños, márgenes, etc., y observa al instante el resultado.  

> **Recuerda**: estos cambios son temporales y desaparecen al recargar.  

## 4. Forzar estados y pseudoclases  
A veces un pseudo‑elemento aparece solo en `:hover` o `:active`. Para verlo:  

1. Haz **clic derecho** sobre el elemento padre y elige *“Force element state”*.  
2. Activa `:hover`, `:focus` u otro estado.  
3. Ahora el pseudo‑elemento `::before`/`::after` se mostrará y podrás editarlo.  

## 5. Usos prácticos  

- **Agregar iconos decorativos**  
  ```css
  ::before { content: "🔔"; }
  ```
- **Crear overlays o fondos sin alterar el HTML.**  
- **Probar animaciones en pseudo‑elementos antes de codificarlas.**  

## ¿Listo para practicar?  

1. **Inspecciona un botón** en GitHub o tu sitio web.  
2. **Expande** sus pseudo-elementos (`::before`/`::after`).  
3. **Edita** su propiedad `content` y pruébalo en vivo.  

> *Luego continúa con* **Modificar CSS** *o* **Modelo de Caja** *para ver más técnicas de estilo.*  