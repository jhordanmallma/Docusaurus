---
title: "Flame Chart y Árbol de Llamadas"
description: "Aprende a interpretar el Flame Chart y el Call Tree para identificar cuellos de botella en el rendimiento."
sidebar_position: 3
---

# Flame Chart y Árbol de Llamadas

El análisis de rendimiento en DevTools va más allá de ver la línea de tiempo. Dos herramientas fundamentales para entender **qué código está ralentizando tu sitio** son el **Flame Chart (gráfico de llamas)** y el **Call Tree (árbol de llamadas)**.

---

## ¿Qué es el Flame Chart?

El **Flame Chart** representa la **ejecución del hilo principal** en forma de barras apiladas. Cada barra muestra una función ejecutada, su duración y quién la llamó.

- El **ancho** de cada barra indica cuánto tiempo tomó esa función.
- La **profundidad** indica llamadas anidadas.

> 🔥 Cuanto más ancha una barra, más tiempo tarda esa función.  
> 💡 Las barras en la parte superior son las funciones más recientes.

---

### ¿Cómo interpretarlo?

- Pasa el mouse sobre una barra para ver el nombre de la función, archivo fuente y duración.
- Si ves muchas barras anchas seguidas, hay una **cadena de funciones lentas**.
- Las llamadas de funciones pesadas suelen estar asociadas a renderizado, cálculos de layout o ejecución intensiva de JavaScript.

---

## ¿Qué es el Call Tree?

El **Call Tree** muestra una lista jerárquica de funciones ejecutadas, ordenadas por duración.

- Se organiza en forma de **árbol descendente**, desde el evento raíz hasta cada función invocada.
- Puedes ver cuánto tiempo consume cada función directamente (Self Time) y en total (Total Time).

### Columnas clave:

- **Total Time**: tiempo total que tardó esta función incluyendo sus llamadas internas.
- **Self Time**: tiempo que tardó solo esa función, sin contar lo que llaman otras funciones.

---

## ¿Qué buscar?

- Funciones con **Self Time alto**: son las que realmente consumen tiempo, no solo las que llaman otras.
- Funciones que se repiten con frecuencia y tienen **Total Time elevado**: pueden estar ejecutándose más veces de lo necesario.
- Cadenas largas de llamadas anidadas: podrías tener lógica innecesariamente compleja.

---

## Cómo acceder a estas vistas

1. Graba una sesión en la pestaña **Performance**.
2. Haz clic en un rango de la línea de tiempo.
3. Desplázate hacia abajo hasta las pestañas:
   - `Call Tree`
   - `Bottom-Up`
   - `Event Log`
   - `Flame Chart` (por defecto activa)

---

## Tips adicionales

- Usa la vista **Bottom-Up** para ver qué funciones tardan más sin importar quién las llamó.
- Usa el filtro de búsqueda para centrarte en funciones específicas (`input`, `render`, `update`...).
- Combina estas herramientas con el **Filmstrip** para ver visualmente cuándo sucedieron los bloqueos.

