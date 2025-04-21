---
title: "Registro y Análisis de Timeline"
description: "Aprende a grabar y analizar la línea de tiempo del rendimiento en el panel Performance de DevTools."
sidebar_position: 2
---

# Registro y Análisis de Timeline

El **registro de la línea de tiempo (Timeline)** es la base para analizar el comportamiento de una página. Al grabar una sesión, DevTools captura todo lo que sucede en el hilo principal y lo muestra visualmente, lo que te permite identificar qué partes del proceso consumen más tiempo.

---

## ¿Cómo grabar una sesión?

1. Abre DevTools y ve a la pestaña **Performance**.
2. Haz clic en el botón **🔴 Record**.
3. Realiza una interacción representativa en tu sitio (scroll, navegación, clics...).
4. Haz clic en **⏹ Stop** para detener la grabación.
5. Aparecerá una vista con una **timeline** detallada.

> 💡 Consejo: activa la opción **Screenshots** para ver capturas de cada momento clave durante la grabación.

---

## Entendiendo la línea de tiempo

La timeline se compone de varias pistas:

### 1. **FPS (Frames Per Second)**  
Muestra la fluidez de la UI. Si hay picos bajos, podría haber cuellos de botella.

### 2. **CPU / Main Thread**  
Aquí se visualizan las tareas ejecutadas por el navegador:
- **Scripting**: ejecución de JavaScript.
- **Rendering**: cálculo de estilos y diseño.
- **Painting**: dibujado de píxeles en pantalla.

### 3. **Network**  
Carga de recursos como imágenes, scripts y hojas de estilo.

### 4. **Screenshots (Filmstrip)**  
Muestra miniaturas de lo que se renderizó en pantalla durante la sesión. Útil para ver cuándo aparece el contenido visualmente.

---

## Interpretando los colores

- 🟨 **Amarillo**: scripting (JavaScript)
- 🟩 **Verde**: rendering (estilos, layout)
- 🟦 **Azul**: painting (pintado en pantalla)
- 🟪 **Violeta**: tareas del sistema (eventos, parsers)

> ⚠️ Si ves muchas tareas largas en amarillo, probablemente tienes scripts que bloquean el hilo principal.

---

## ¿Qué buscar en la timeline?

- **Tareas largas**: aquellas que duran más de 50 ms.
- **Retrasos en el renderizado**: cuando hay mucho tiempo entre el input y el dibujo en pantalla.
- **Picos de CPU**: indican sobrecarga del navegador.
- **Carga tardía del contenido**: visible en la línea de tiempo de screenshots.

---

## Tips de análisis

- Usa el **zoom** para acercarte a momentos específicos.
- Haz clic y arrastra para seleccionar un rango de tiempo.
- Observa el **resumen** superior para tiempos totales por fase.
- Usa el panel **Call Tree** para ver el desglose de funciones.

---

**¿Qué sigue?**  
- [Flame Chart & Call Tree](flamechart-calltree)  
- [Filmstrip & Screenshots](filmstrip-screenshots)  
- [CPU Throttling & FPS](cpu-throttling)  
