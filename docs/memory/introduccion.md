# Introducción a la pestaña Memoria (Memory)

La pestaña **Memory** en DevTools permite analizar y optimizar el uso de memoria de una página web. Es una herramienta fundamental para detectar **fugas de memoria**, entender cómo se **almacenan objetos en el heap**, y ver cómo cambia el uso de memoria con el tiempo.

> ⚠️ El mal uso de la memoria puede provocar que una página se vuelva lenta, pesada o incluso inutilizable. Por eso, analizar el comportamiento de la memoria es crucial para el rendimiento general.

---

## ¿Cuándo usar la pestaña Memory?

- Cuando tu aplicación web comienza a volverse lenta con el tiempo.
- Si se detecta un aumento constante del uso de memoria (Memory leaks).
- Para diagnosticar por qué ciertos objetos no están siendo recolectados por el Garbage Collector.
- Cuando necesitas entender cómo está distribuida la memoria del heap.

---

## Modos principales de análisis en la pestaña Memory

Al abrir la pestaña Memory verás tres modos principales:

### 1. 🧠 **Heap snapshot**
Captura una instantánea de toda la memoria utilizada por objetos JS. Ideal para:
- Ver todos los objetos activos.
- Buscar objetos que no deberían seguir en memoria.
- Detectar referencias retenidas innecesarias.

### 2. ⏱️ **Allocation instrumentation on timeline**
Graba asignaciones de objetos con el tiempo. Ideal para:
- Rastrear el momento exacto en que se crean objetos.
- Ver qué código está causando asignaciones frecuentes.
- Analizar el comportamiento de la memoria a lo largo de una sesión.

### 3. 📷 **Allocation sampling**
Toma muestras periódicas para mostrar estadísticas aproximadas del uso de memoria. Es menos preciso, pero más rápido.

---

## ¿Cómo funciona?

La pestaña Memory interactúa con el motor de JavaScript del navegador para mostrar:

- Objetos en memoria (Heap).
- Funciones que han creado esos objetos.
- Cuántas veces se han creado ciertos objetos.
- Si esos objetos aún están referenciados.

Además, puedes **forzar una recolección de basura (Garbage Collection)** manualmente para ver qué objetos son realmente necesarios.

---

## Conclusión

El panel Memory es una herramienta poderosa para mejorar el rendimiento de tus aplicaciones. En los siguientes temas, veremos cómo utilizar cada funcionalidad paso a paso para identificar fugas, reducir el consumo de memoria y escribir código más eficiente.

---

**¿Listo para seguir?**  
Continúa con: [`tomas-de-heap.md`](./tomas-de-heap.md)
