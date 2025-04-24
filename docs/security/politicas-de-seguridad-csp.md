---
id: politicas-de-seguridad-csp
title: Políticas de Seguridad (CSP)
sidebar_position: 5
---


**Content Security Policy (CSP)** es una poderosa herramienta que ayuda a prevenir ataques como **Cross-Site Scripting (XSS)** e **inyecciones de código malicioso** al controlar los recursos que el navegador puede cargar o ejecutar en una página web.

---

## ¿Qué es CSP?

CSP es una cabecera HTTP que indica al navegador qué contenido está permitido cargar en una página. Puedes especificar desde qué dominios se pueden cargar scripts, hojas de estilo, imágenes, iframes y más.

> CSP actúa como una lista blanca de recursos autorizados.

---

## ¿Cómo se ve una política CSP?

### Ejemplo básico de cabecera HTTP:

```yaml
Content-Security-Policy: default-src 'self'; img-src *; script-src 'self' https://apis.google.com
```

Esto significa:

- Solo se permite contenido por defecto desde el mismo origen (`'self'`).
- Las imágenes pueden cargarse desde cualquier lugar (`*`).
- Solo se permiten scripts desde el mismo origen y `https://apis.google.com`.

---

## Configuración desde HTML (meta tag)

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self';">
```

> Recomendado solo en casos sencillos. Para producción, es mejor enviar la cabecera desde el servidor.

## 📋 Directivas CSP esenciales

```markdwon
┌─────────────────────┬──────────────────────────────────────────────┐
│     **Directiva**   │             **Qué controla**                 │
├─────────────────────┼──────────────────────────────────────────────┤
│ `default-src`       │ Fuente predeterminada para todo el contenido │
│ `script-src`        │ Origen de scripts permitidos (<script>)      │
│ `style-src`         │ Hojas de estilo (<style>, <link>)            │
│ `img-src`           │ Imágenes (<img>, CSS)                        │
│ `connect-src`       │ Conexiones (AJAX, WebSocket, etc.)           │
│ `frame-src`         │ <iframe> o contenido embebido                │
│ `font-src`          │ Fuentes web (@font-face)                     │
└─────────────────────┴──────────────────────────────────────────────┘

```

## Inspeccionar CSP en DevTools

1. **Abre DevTools** (F12 o clic derecho → Inspeccionar)
2. **Ve a la pestaña Network**
3. **Haz clic en la solicitud del documento principal**
4. **En Headers**, busca la sección `Content-Security-Policy`

Los errores de CSP aparecen en la **pestaña Console**:


```pgsql
Refused to load the script 'http://malicioso.com/script.js' because it violates the following Content Security Policy directive: "script-src 'self'"
```

## Ejemplo de configuración avanzada
```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://cdn.jsdelivr.net;
  style-src 'self' https://fonts.googleapis.com;
  font-src https://fonts.gstatic.com;
  img-src 'self' data:;
  object-src 'none';
```

## 📦 Configuración CSP permitida

**Permite:**
- ✅ Scripts del mismo origen (`'self'`) y CDNs confiables
- ✅ Estilos y fuentes de Google Fonts
- ✅ Imágenes locales o en formato base64 (`data:`)

**Bloquea:**
- ❌ Objetos embebidos (`<object>`, `<embed>`)
- ❌ Recursos no autorizados externos

## Herramientas recomendadas

- **CSP Evaluator** (Google)
- **Report URI**  
- **Mozilla Observatory**

## Consejos prácticos

✅ **Comienza con una política en modo "report-only"** para probar sin bloquear.  
✅ **Revisa los reportes** y ajusta la política según los resultados.  
✅ **Una vez validada**, habilita la política en modo bloqueante.  

Ejemplo de política en modo report-only:  
```http
Content-Security-Policy-Report-Only: default-src 'self'; report-uri /csp-report
```

## Conclusión

Implementar CSP es una de las mejores defensas contra XSS y otras amenazas basadas en contenido. Usar DevTools te permite validar, depurar y ajustar la política de manera efectiva, protegiendo tanto a tus usuarios como a tu aplicación web.

**Próximo tema:**  
Cómo detectar y manejar scripts peligrosos y recursos sospechosos dentro del DOM y su relación con los ataques XSS.