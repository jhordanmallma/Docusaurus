# Tomas de Heap (Heap Snapshots)

Las **tomas de heap** (Heap Snapshots) son capturas del estado actual de la memoria en tu aplicación. Te permiten ver **qué objetos están vivos**, **cuánta memoria ocupan**, y **cómo se relacionan entre sí**.

Esta herramienta es ideal para detectar **fugas de memoria** y analizar cómo se está utilizando el heap de JavaScript.

---

## 📸 ¿Qué es una Heap Snapshot?

Una **Heap Snapshot** es como una fotografía del montón de memoria en un momento dado. Contiene:
- Todos los objetos actuales.
- Las referencias entre objetos.
- Tamaño que ocupa cada objeto.
- Nodos dominantes que mantienen objetos vivos.

---

## 🧪 ¿Cómo tomar una Heap Snapshot?

1. Abre DevTools (`F12` o `Ctrl + Shift + I`).
2. Ve a la pestaña **Memory**.
3. Selecciona el modo **Heap snapshot**.
4. Haz clic en el botón **Take snapshot**.

Después de unos segundos, verás una tabla con información detallada del heap.

---

## 🔍 ¿Cómo leer los resultados?

- **Summary:** Vista general de los objetos y su uso de memoria.
- **Comparison:** Compara con otras snapshots para ver qué objetos han aparecido o desaparecido.
- **Containment:** Muestra la jerarquía de objetos y referencias.
- **Statistics:** Datos resumidos del uso de memoria por tipo de objeto.

---

## 🧠 Tip para detectar fugas

Toma una snapshot, luego realiza alguna interacción en tu app (por ejemplo, abre y cierra un modal), y toma otra snapshot.

Luego, compara ambas. Si objetos creados por esa interacción **no desaparecen**, puede que haya una **fuga de memoria**.

---

## 🛠️ Ejemplo práctico

1. Toma una snapshot en una página en estado inicial.
2. Ejecuta algún flujo de usuario (scroll, navegación, formularios).
3. Toma otra snapshot.
4. Ve a la vista **Comparison** y revisa los objetos que **no fueron recolectados**.

Esto es muy útil para depurar apps SPA o componentes que se montan y desmontan frecuentemente.

---

## ✅ Recomendaciones

- Usa nombres de clases o funciones claros para rastrear objetos.
- Repite el proceso varias veces para confirmar resultados.
- Utiliza el botón **garbage collect** antes de tomar una snapshot para obtener resultados más limpios.


