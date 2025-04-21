---
title: "Peticiones y Filtros (Requests & Filters)"
description: "Cómo capturar, filtrar y buscar solicitudes HTTP/S en el panel Network de DevTools"
sidebar_position: 2
---

# Peticiones y Filtros (Requests & Filters)

El **Panel de Red** te permite ver todas las **solicitudes** que hace tu página y aplicar **filtros** para centrarte en lo que más te interesa. En esta sección aprenderás a capturar peticiones, usar los filtros predefinidos y buscar URLs o métodos específicos.

---

## 1. Captura de peticiones

1. Abre DevTools (`Ctrl+Shift+I` / `Cmd+Option+I`) y ve a la pestaña **Network**.  
2. Asegúrate de que **Preserve log** esté activo si quieres conservar el historial al recargar.  
3. Marca **Disable cache** para forzar descargas completas en cada recarga.  
4. Recarga la página (`F5` / `Ctrl+R` / `Cmd+R`): verás la lista de peticiones llenarse en tiempo real.

---

## 2. Filtros predefinidos por tipo

Justo encima de la lista de solicitudes encontrarás botones para mostrar u ocultar tipos de recurso:

- **All**: todas las solicitudes.  
- **Docs**: documentos HTML.  
- **JS**: scripts JavaScript.  
- **CSS**: hojas de estilo.  
- **Img**: imágenes.  
- **Media**: audio/video.  
- **Font**: fuentes.  
- **WS**: WebSockets.  
- **XHR**: XMLHttpRequest / Fetch.  
- **Other**: otros tipos (Beacon, Manifest…).

Haz clic en cualquiera para enfocarte en un tipo de recurso.

---

## 3. Búsqueda de URLs y campos

Pulsa <kbd>Ctrl</kbd> + <kbd>F</kbd> (Windows/Linux) o <kbd>Cmd</kbd> + <kbd>F</kbd> (Mac) para abrir el buscador:

- Escribe parte del **nombre de la URL** (p. ej. `api/usuarios`).  
- Filtra por **método** (`GET`, `POST`) o por **código de estado** (`404`, `500`).  
- Usa expresiones regulares activando la opción `.*` para patrones avanzados.

---

## 4. Filtros avanzados y agrupación

- **Hide data URLs**: oculta solicitudes con `data:`.  
- **Group by frame**: agrupa peticiones por iframe o pestaña.  
- **Group by domain**: agrupa por dominio origen.  
- **Filter by status code**: haz clic en una celda de Status y elige “Filter by status code”.

---

## 5. Ejemplo práctico

1. Filtra **XHR** para ver solo peticiones AJAX.  
2. Busca `login` para localizar la llamada de autenticación.  
3. Agrupa por dominio para separar llamadas a tu API de las de terceros (CDNs, analytics).  
4. Usa <kbd>Ctrl + E</kbd> para limpiar la lista entre pruebas.

---

## 6. Atajos útiles

- **Limpiar listado**: <kbd>Ctrl + E</kbd> / <kbd>Cmd + E</kbd>  
- **Buscar en Network**: <kbd>Ctrl + F</kbd> / <kbd>Cmd + F</kbd>  
- **Toggle filters**: clic en los botones de tipo o escribe un término directo en la barra de filtros.  



