---
title: "Filmstrip y Capturas de Pantalla"
description: "Aprende a usar el filmstrip y las capturas para identificar visualmente cuellos de botella en el rendimiento."
sidebar_position: 4
---

# Filmstrip y Capturas de Pantalla

La pestaña **Performance** de DevTools no solo te muestra métricas de ejecución. También te permite **ver cómo se carga tu página, paso a paso**, con capturas sincronizadas con la línea de tiempo.

---

## ¿Qué es el Filmstrip?

El **Filmstrip** es una secuencia de capturas de pantalla que se toman automáticamente mientras DevTools graba la actividad de tu sitio.

🔍 **Permite identificar en qué momento visual exacto se renderiza cada parte de la página.**

Ejemplo visual:

```markdown
┌────────┬──────┬──────┬──────┬──────┬──────┬──────┐
│ Tiempo │ 0s   │ 0.5s │ 1s   │ 1.5s │ 2s   │ 2.5s │
├────────┼──────┼──────┼──────┼──────┼──────┼──────┤
│ Acción │ Img  │ Bg   │ Txt  │ Btn  │ 100% │ Idle │
└────────┴──────┴──────┴──────┴──────┴──────┴──────┘
```


Cada fotograma está alineado con eventos importantes como:

- Carga de recursos
- Scripts ejecutados
- Reflow del layout
- Pintado de componentes

---

## ¿Cómo se activa el Filmstrip?

1. Ve a la pestaña **Performance**.
2. Activa la opción ✅ `Enable advanced paint instrumentation` si está disponible.
3. Presiona el botón de grabación (●), interactúa con la página y luego detén la grabación.
4. DevTools mostrará el **Filmstrip** en la parte superior de la línea de tiempo.

---

## ¿Cómo usarlo para detectar problemas?

- Si hay **una gran diferencia entre dos capturas**, puede que algo esté bloqueando el renderizado.
- Si la página **se ve vacía por mucho tiempo** y de pronto aparece todo de golpe, puede indicar que los recursos críticos no están optimizados.
- Las capturas pueden ayudarte a detectar si el renderizado ocurre tarde debido a:
  - Scripts bloqueantes
  - Carga lenta de fuentes o imágenes
  - CSS mal optimizado

---

## Capturas de Pantalla Manuales

También puedes **tomar screenshots manuales** en otros paneles como:

- Pestaña **Lighthouse**
- Pestaña **Rendering** → activar opción `Show paint flashing` para ver qué partes se repintan

---

## ¿Qué no debes hacer?

🚫 No te fíes solo de los números. Las capturas **te dan contexto visual**.  
🚫 No asumas que un “First Paint” significa que el contenido útil ya está disponible.

---

## Consejo adicional: Relaciónalo con eventos

Las capturas del Filmstrip están alineadas con eventos como:

- `DOMContentLoaded`
- `First Contentful Paint`
- `Layout Shift`

Esto te permite saber no solo **qué** se carga, sino **cuándo** y **cómo afecta al usuario**.

---

## ¿Qué sigue?

Profundiza en herramientas para simular redes lentas o baja potencia de CPU:

👉 [CPU Throttling & FPS](cpu-throttling)

