---
title: "Introducción al Panel de Rendimiento (Performance Panel)"
description: "Visión general del panel Performance en DevTools y flujo de trabajo básico para analizar el rendimiento de tu página"
sidebar_position: 1
---

# Introducción al Panel de Rendimiento (Performance Panel)

El **Panel de Rendimiento** (Performance Panel) de DevTools te permite **capturar**, **visualizar** y **analizar** métricas de rendimiento de tu página web en tiempo real. Con él puedes identificar cuellos de botella, medir tiempos de ejecución y optimizar la experiencia de usuario.

---

## ¿Para qué sirve el Panel de Rendimiento?

- **Medir tiempos de carga**: desde la solicitud inicial hasta el renderizado completo.  
- **Detectar bloqueos de CPU**: funciones que consumen demasiado tiempo y ralentizan la UI.  
- **Analizar FPS**: ver si tu página mantiene la fluidez en animaciones y scroll.  
- **Evaluar JavaScript**: identificar scripts lentos o eventos que disparan re-renderizados costosos.

---

## Vista general de la interfaz

1. **Barra de controles**  
   - 🔴 **Record**: inicia la captura de datos.  
   - ⏹️ **Stop**: detiene la grabación y muestra los resultados.  
   - ⚙️ Configuración de captura (sampling, screenshots, memory).

2. **Timeline principal**  
   Muestra una línea de tiempo con guías de tiempo y eventos:  
   - **Frames**: altura en píxeles del FPS.  
   - **Main Thread**: tareas de scripting, rendering y painting.  
   - **Network**: descargas de recursos.

3. **Resumen (Summary)**  
   Tras detener la grabación, aparece un panel con métricas clave:  
   - **Loading**: tiempo de carga del documento.  
   - **Scripting**: tiempo total de ejecución de JavaScript.  
   - **Rendering**: tiempo gastado en cálculo de estilos y disposición de elementos.  
   - **Painting**: tiempo en dibujar píxeles en pantalla.

4. **Detalle de eventos**  
   Al hacer zoom o seleccionar un rango, puedes explorar:  
   - **Flame Chart** y **Call Tree** (ver archivo flamechart-calltree).  
   - **Filmstrip** (capturas secuenciales de la UI; ver filmstrip-screenshots).  
   - **Bottom-Up** y **Event Log** para análisis inverso.

---

## Flujo de trabajo básico

1. Abre DevTools (`Ctrl+Shift+I` / `Cmd+Option+I`) y ve a la pestaña **Performance**.  
2. Asegúrate de habilitar **Screenshots** si necesitas capturas visuales.  
3. Haz clic en **Record**, interactúa con tu página (scroll, clics, animaciones).  
4. Detén la grabación con **Stop**.  
5. Observa el **Summary** y la **Timeline** para identificar áreas lentas.  
6. Profundiza en los subpaneles (Flame Chart, Filmstrip, Call Tree).

---

## Atajos útiles

- **Iniciar/Detener grabación**: `Ctrl + E` / `Cmd + E`  
- **Limpiar grabación**: `Ctrl + R` (mientras Performance está activo)  
- **Zoom in/out**: `Ctrl + +` / `Ctrl + -` (Cmd en Mac)  
- **Seleccionar rango**: clic y arrastra sobre la Timeline.

---

**Siguientes pasos en Performance:**  
- [Registro y Análisis de Timeline](registro-analisis-timeline)  
- [Flame Chart & Call Tree](flamechart-calltree)  
- [Filmstrip & Screenshots](filmstrip-screenshots)  
- [CPU Throttling & FPS](cpu-throttling)  
