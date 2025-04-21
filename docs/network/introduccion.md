---
title: "Introducción al Panel de Red (Network Panel)"
description: "Conceptos y flujo de trabajo básico para monitorizar el tráfico de red desde DevTools"
sidebar_position: 1
---

# Introducción al Panel de Red (Network Panel)

El **Panel de Red** (Network Panel) de DevTools te permite **ver**, **analizar** y **depurar** todas las solicitudes HTTP/S que realiza tu página—recursos HTML, CSS, JavaScript, imágenes y peticiones AJAX/fetch—en tiempo real.

---

## ¿Para qué sirve el Panel de Red?

- **Diagnosticar fallos de carga**: identifica recursos que tardan demasiado o devuelven errores (4xx/5xx).  
- **Optimizar rendimiento**: comprueba tiempos de descarga, tamaño de archivos y paralelismo (waterfall).  
- **Depurar APIs**: inspecciona cuerpo de peticiones y respuestas JSON/XML.  
- **Simular condiciones de red**: prueba tu sitio en conexiones lentas o desconectado (offline).

---

## Vista general de la interfaz

1. **Barra de herramientas** (toolbar)  
   - ◻ **Preserve log**: mantiene el historial de solicitudes al recargar.  
   - 🚫 **Disable cache**: desactiva la caché para ver descargas reales.  
   - ⚙️ Ajustes de throttling, filtros y búsqueda global.  

2. **Tabla de solicitudes** (request list)  
   Muestra cada petición con columnas:
   - **Name**: nombre o URL del recurso.  
   - **Status**: código HTTP y texto (200 OK, 404 Not Found…).  
   - **Type**: tipo de recurso (document, script, xhr…).  
   - **Initiator**: qué código o recurso originó la petición.  
   - **Size**: tamaño transferido.  
   - **Time**: tiempo total desde la solicitud hasta la respuesta.  

3. **Gráfico Waterfall** (waterfall chart)  
   Visualiza en línea de tiempo la descarga de cada recurso: DNS lookup, TCP handshake, request, response, etc.

4. **Detalles de la petición** (request details)  
   Al hacer clic en una línea de la tabla se abren pestañas con:
   - **Headers**: encabezados de petición y respuesta.  
   - **Preview / Response**: vista previa del contenido (JSON, HTML, imagen).  
   - **Timing**: desglose de fases (Blocking, DNS, Connect, SSL, Download).  
   - **Cookies**: cookies enviadas/recibidas.  

---

## Flujo de trabajo básico

1. Abre DevTools (`Ctrl+Shift+I` / `Cmd+Option+I`) y selecciona **Network**.  
2. Marca **Disable cache** si quieres ver todas las descargas.  
3. Recarga la página (`F5` o `Ctrl+R` / `Cmd+R`).  
4. Observa cómo se llenan las filas y el waterfall con cada recurso.  
5. Haz clic en cualquier solicitud para ver sus detalles en el panel inferior.  

---

## Atajos y consejos

- **Recargar con Network abierto**: para no perder las primeras peticiones.  
- **Ctrl+E** (Windows/Linux) o **Cmd+E** (Mac): limpia el listado de solicitudes.  
- **Ctrl+F** / **Cmd+F**: buscar por URL, método o texto en la lista.  
- **Network throttling**: selecciona presets (Fast 3G, Slow 3G…) para emular redes móviles.  
- **Offline**: elige “Offline” en throttling para probar comportamientos sin red.  

---

**¿Listo para profundizar?**  
- [Peticiones & Filtros](peticiones-y-filtros)  
- [Inspección de Headers](inspeccion-headers)  
- [Simulación de Red](simulacion-red)  
