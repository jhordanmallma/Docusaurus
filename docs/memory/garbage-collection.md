---
id: garbage-collection
title: Recolector de Basura (Garbage Collection)
sidebar_position: 6
---


El **Garbage Collector (GC)** es un componente fundamental de los navegadores modernos. Su tarea es **liberar automáticamente la memoria** que ya no está en uso, permitiendo que las aplicaciones web sean más eficientes sin que los desarrolladores tengan que gestionar manualmente cada objeto.

---

## ¿Qué es el Garbage Collector?

En JavaScript, cuando creas objetos, funciones o variables, se almacenan en memoria. Si ya no son accesibles (es decir, no hay ninguna referencia a ellos), el **GC se encarga de eliminarlos**.

### Ciclo básico:
1. Se crea un objeto.
2. Se utiliza mientras es necesario.
3. Cuando ya no hay referencias, el GC lo detecta.
4. El objeto es **recolectado** y su memoria liberada.

---

##  ¿Cómo se relaciona con DevTools?

En el panel **Memory** puedes forzar una recolección de basura haciendo clic en:

 **Collect garbage**

Esto ejecuta el GC manualmente, útil para analizar si:

- Hay objetos que deberían eliminarse y no lo hacen.
- Se confirma que las fugas de memoria no son por el motor de JS sino por nuestro código.

---

## ¿Cómo detectar si el GC no está liberando algo?

Puedes comparar un **heap snapshot antes y después** de ejecutar el GC:

1. Toma un snapshot.
2. Ejecuta `Collect garbage`.
3. Toma otro snapshot.
4. Compara: ¿los objetos persisten? Si sí, entonces están **retenidos** por referencias activas.

---

##  Código ilustrativo

```javascript
let data = [];

function crear() {
  for (let i = 0; i < 1000; i++) {
    data.push({ valor: i });
  }
}

function eliminar() {
  data = null; // 🔥 Liberar referencia
}
```
Luego de llamar a eliminar(), puedes forzar un GC y verificar si esos objetos desaparecen del heap snapshot.

###  Buenas prácticas  
- **Evita referencias innecesarias**:  
  - Elimina `EventListeners` con `.removeEventListener()`.  
  - Limpia `setInterval`/`setTimeout` con `clearInterval`/`clearTimeout`.  
- **Libera memoria manualmente**:  
  - Asigna `null` a arrays u objetos obsoletos (ej: `datos = null`).  
- **Analiza snapshots**:  
  - Busca nodos *"Detached"* (DOM no accesible pero en memoria).  
  - Identifica objetos *"Retained"* (retenidos por referencias ocultas).  

###  Recursos recomendados  
- [Memory Management (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management)  
- [DevTools y el Garbage Collector (Chrome Docs)](https://developer.chrome.com/docs/devtools/memory-problems/)  