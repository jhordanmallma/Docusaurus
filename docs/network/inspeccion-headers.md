---
title: "Inspección de Headers (Request & Response Headers)"
description: "Cómo ver, copiar y editar encabezados de petición y respuesta en el panel Network de DevTools"
sidebar_position: 3
---

# Inspección de Headers (Request & Response Headers)

Los **encabezados** (headers) HTTP transportan metadatos de la **solicitud** y la **respuesta**, como tipo de contenido, caché, autenticación, CORS y más. Entenderlos es esencial para depurar peticiones y optimizar el intercambio de datos.

---

## 1. Ver Headers de Solicitud

1. En el **Panel de Red** (`Network`), haz clic en la petición que te interese.  
2. Selecciona la pestaña **Headers** en el panel de detalles.  
3. Bajo **Request Headers** encontrarás campos como:
   - `Host`  
   - `User-Agent`  
   - `Accept`  
   - `Content-Type` (si es POST/PUT)  
   - `Authorization` (si usas tokens)  
   - Cookies (`Cookie`)  

Estos encabezados se envían desde el navegador al servidor.

---

## 2. Ver Headers de Respuesta

En la misma vista de **Headers**, desplázate hasta **Response Headers** para ver:
- `Status Code` y mensaje (200 OK, 404 Not Found…).  
- `Content-Type` (tipo de datos devueltos: `application/json`, `text/html`, etc.).  
- `Cache-Control` y `Expires` (políticas de caché).  
- `Set-Cookie` (para crear o actualizar cookies).  
- Encabezados CORS (`Access-Control-Allow-Origin`, etc.).

Esto te ayuda a verificar que el servidor esté enviando los datos correctamente y con la configuración adecuada.

---

## 3. Copiar y Exportar Headers

- **Copiar headers**: haz clic derecho en cualquier sección de **Request** o **Response Headers** y selecciona **“Copy value”** o **“Copy header”** para usarlo en tus pruebas.  
- **Exportar HAR**: en la lista de peticiones, haz clic derecho → **“Save all as HAR with content”** para obtener un archivo `.har` que incluye headers y cuerpos completos.

---

## 4. Editar y Reenviar Peticiones

DevTools permite modificar una petición antes de reenviarla:

1. Haz clic derecho sobre la petición en la tabla de Network.  
2. Selecciona **“Edit and Resend”**.  
3. Cambia la URL, método, encabezados o cuerpo.  
4. Pulsa **“Send”** para reenviar la petición con los nuevos datos.

Útil para probar distintos valores de cabeceras de autenticación o simular distintos `Content-Type`.

---

## 5. Ejemplo práctico

Imagina una llamada `fetch` en tu código:

```js
fetch('/api/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Token': 'abc123'
  },
  body: JSON.stringify({ nombre: "María" })
});
```
En Network, filtra por XHR y busca `/api/usuarios`.

Abre la pestaña **Headers**:

- Verifica que `Content-Type` sea `application/json`.  
- Comprueba que `X-Custom-Token` aparece correctamente.  

Usa **Edit and Resend** para cambiar `X-Custom-Token` a otro valor y observa la respuesta.

### 6. Buenas prácticas

- Revisa siempre el **Status Code** antes de analizar headers.  
- Usa **copiado de headers** para reproducir peticiones en herramientas externas (Postman, cURL).  
- **Edita y reenvía** peticiones para probar distintas configuraciones sin cambiar tu código fuente.  