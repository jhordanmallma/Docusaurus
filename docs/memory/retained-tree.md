---
id: retained-tree
title: Árbol de Retención (Retained Tree)
sidebar_position: 4
---

El **Retained Tree** (árbol de retención) en las herramientas de memoria de DevTools permite rastrear **qué objetos están reteniendo a otros en memoria**, y por qué **no han sido liberados por el recolector de basura**.

Este análisis es clave para **detectar fugas de memoria** y **referencias innecesarias**.

---

##  ¿Qué es el Retained Tree?

Cuando inspeccionas un objeto en una heap snapshot, puedes ver su **retained tree**, es decir, una jerarquía que muestra **qué objetos referencian a ese objeto**, impidiendo su liberación.

---

##  ¿Dónde se encuentra?

1. Abre una snapshot en la pestaña **Memory**.
2. Selecciona un objeto sospechoso.
3. En la parte inferior del panel, selecciona la vista **Retainers** o **Retained Tree**.

Esto mostrará cómo ese objeto está siendo **retenido** por otros objetos en memoria.

---

##  ¿Por qué es útil?

Te ayuda a responder:

- ¿Quién está manteniendo vivo este objeto?
- ¿Hay referencias desde el DOM, eventos o variables globales?
- ¿Puedo romper la cadena para liberar memoria?

---

##  Ejemplo ilustrativo

```javascript
let ref;

function iniciar() {
  const datos = { nombre: "Usuario" };
  ref = datos; // 'datos' ahora está referenciado globalmente
}
iniciar();
```

En este caso, `datos` nunca se libera porque está referenciado desde la variable global `ref`.  

 **Al inspeccionar `datos`, verás algo así en el Retained Tree:**  

```pgsql
(window) → ref → Object { nombre: "Usuario" }
```

 **Diagrama explicativo**  

```mermaid
graph TD
  A[window] --> B[ref]
  B --> C[{nombre: "Usuario"}]
```
 La cadena de referencias muestra claramente que window mantiene vivo al objeto.

 **¿Cómo romper la cadena?**  

Puedes liberar el objeto eliminando referencias:  

```javascript
ref = null;

```
Después de esto, si no hay otras referencias activas, el objeto puede ser recolectado y desaparecerá del Retained Tree en la siguiente snapshot.


###  Buenas prácticas  
- Evita variables globales innecesarias.  
- Asegúrate de remover listeners, intervalos y referencias circulares.  
- Usa `WeakMap` o `WeakRef` si necesitas referencias no retenedoras.  

###  Recursos recomendados  
- **Artículo:** [Memory leaks in JavaScript (MDN)](https://developer.mozilla.org/)  
- **DevTools Docs:** Retainers view  