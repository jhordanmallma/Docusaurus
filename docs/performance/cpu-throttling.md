---
title: "CPU Throttling y FPS"
description: "Aprende a simular dispositivos lentos y analizar la fluidez visual de tu aplicación con métricas de rendimiento como FPS."
sidebar_position: 5
---

# CPU Throttling y FPS

El panel **Performance** de DevTools permite simular entornos con recursos limitados y evaluar cómo responde tu sitio ante condiciones más exigentes. Aquí entran dos herramientas clave: **CPU Throttling** y el monitor de **FPS (Frames por Segundo)**.

---

## ¿Qué es el CPU Throttling?

El **CPU Throttling** simula dispositivos con menor potencia de procesamiento. Esto te permite ver cómo se comporta tu sitio en teléfonos o computadoras más lentas.

### ¿Cómo activarlo?

1. Abre DevTools (`F12` o clic derecho → "Inspeccionar").
2. Ve a la pestaña **Performance**.
3. Abre el menú de configuración (ícono de engranaje ⚙️).
4. En la sección `CPU`, elige una opción como:
   - **No throttling** (sin límite)
   - **4x slowdown** (simula una CPU 4 veces más lenta)

🧪 Ahora al grabar, DevTools simulará ese entorno más restringido.

---

## ¿Qué se logra con esto?

- Identificar **tareas de larga duración**.
- Ver **bloqueos del hilo principal**.
- Medir cuánto tiempo le toma a tu aplicación **responder al usuario** en condiciones reales.

---

## ¿Qué es el FPS?

**FPS** significa **Frames Per Second** (cuadros por segundo). En el navegador, se espera que la interfaz corra a **60 FPS** para ofrecer una experiencia fluida.

🔴 **Caídas por debajo de 30 FPS** pueden sentirse como lentitud o trabones ("lag").

---

## ¿Cómo activar el medidor de FPS?

1. Presiona `Ctrl + Shift + P` (o `Cmd + Shift + P` en Mac).
2. Escribe y selecciona: `Show FPS meter`.

Esto mostrará una gráfica en la esquina superior izquierda del sitio:

📈 El medidor indica:

- Líneas verdes altas = buena fluidez
- Líneas rojas/bajas = bajo rendimiento

---

## Ejemplo de uso

Supón que un usuario se queja de lentitud al hacer scroll en un listado de productos:

1. Activas el medidor FPS.
2. Navegas la página.
3. Observas caídas drásticas cuando se muestran imágenes nuevas.
4. Esto podría indicar:
   - Falta de **lazy loading**
   - Carga sin compresión
   - Renderizados costosos en scroll

---

## Consejo práctico

🔧 Usa **CPU Throttling** y **FPS** en conjunto para probar tu aplicación en condiciones similares a:

- Celulares con pocos recursos
- Computadoras viejas
- Aplicaciones con muchas animaciones



