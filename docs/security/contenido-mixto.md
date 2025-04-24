---
id: contenido-mixto
title: Contenido Mixto
sidebar_position: 4
---


Cuando una página se carga a través de una conexión segura (HTTPS) pero incluye recursos cargados por conexiones no seguras (HTTP), estamos frente a un caso de **contenido mixto** (*Mixed Content*). Este problema puede comprometer la seguridad del sitio y afectar la experiencia del usuario.

---

## ¿Por qué es un problema?

Aunque la página principal esté servida por HTTPS, un recurso HTTP puede ser interceptado o modificado por un atacante. Esto rompe la confidencialidad e integridad de la conexión y permite ataques como **inyección de scripts maliciosos**.

---

## Tipos de contenido mixto

1. **Activo (bloqueado por defecto):**
   - Scripts (`<script>`), iframes, hojas de estilo (`<link rel="stylesheet">`)
   - Alto riesgo → el navegador lo bloquea automáticamente.

2. **Pasivo (avisado o bloqueado):**
   - Imágenes, videos, audio
   - Menor riesgo, pero aún puede ser interceptado o alterado.

---

## Cómo detectar contenido mixto con DevTools

1. Abre DevTools.
2. Ve a la pestaña **Security**.
3. Si hay contenido mixto, verás un mensaje como:

```markdown
This page includes insecure resources
```
4. También puedes revisar la pestaña **Console**, donde se listan advertencias como:

```markdown
Mixed Content: The page at 'https://ejemplo.com' was loaded over HTTPS, but requested an insecure image 'http://inseguro.com/logo.png'.

```


---

## Ejemplo de código con contenido mixto

```html
<!-- Página HTTPS con una imagen servida por HTTP -->
<img src="http://dominio-inseguro.com/imagen.jpg" alt="Imagen insegura">
```

## Cómo solucionarlo
- ✅ Cambia todos los recursos a HTTPS si están disponibles.
- ✅ Usa URLs relativas (//) si estás seguro de que el recurso también ofrece HTTPS:

```html
<img src="//dominio-seguro.com/imagen.jpg">

```
- ✅ Almacena localmente los recursos cuando sea posible.

##  Herramientas adicionales

### 1. **Panel de Seguridad (Security Panel)**
   - Muestra una lista detallada de todos los recursos cargados de forma insegura (mixed content).
   - Identifica problemas con certificados SSL/TLS.
   - Proporciona información sobre políticas de seguridad (CSP, HSTS).

### 2. **Panel de Consola (Console Panel)**
   - Reporta en tiempo real todos los intentos de carga no segura (HTTP en páginas HTTPS).
   - Muestra advertencias específicas con URLs afectadas.
   - Filtrable por tipo de error (Mixed Content, CORS, etc).

### 3. **Verificadores HTTPS / Lighthouse**
   | Herramienta | Función |
   |------------|---------|
   | **Lighthouse** | Auditoría integrada en DevTools que revisa contenido mixto y configuración HTTPS |
   | **SSL Labs Test** | Escaneo externo de certificados y configuración SSL |
   | **Why No Padlock?** | Identifica recursos que rompen el HTTPS |

##  Prevención desde el servidor

Puedes prevenir el contenido mixto forzando HTTPS en todos los recursos desde el backend o servidor web:

### Ejemplo en Apache (`.htaccess`)

```apache
# Forzar HTTPS y prevenir contenido mixto
Header always set Content-Security-Policy "upgrade-insecure-requests;"
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Ejemplo en HTML (`meta tag`)

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```
Esto le dice al navegador que actualice automáticamente cualquier recurso HTTP a HTTPS.

##  Conclusión

El contenido mixto (mixed content) es una de las brechas de seguridad más comunes en la web, pero **fácilmente prevenible** con las herramientas adecuadas. A través de este análisis hemos visto que:

✔️ El **panel Security de DevTools** identifica recursos inseguros en tiempo real  
✔️ Los **íconos en la barra de direcciones** dan alertas visuales inmediatas  
✔️ Las **redirecciones HTTPS** y políticas CSP solucionan el problema de raíz  

### Próximos pasos recomendados:
1. Ejecutar auditoría **Lighthouse > Security** periódicamente  
2. Implementar **HSTS** para forzar conexiones seguras  
3. Monitorear la consola para detectar nuevas inclusiones inseguras  

🔜 **En la próxima sección:** Profundizaremos en cómo configurar políticas avanzadas de seguridad con:  
- **Content Security Policy (CSP)** para whitelist de recursos  
- **Strict-Transport-Security (HSTS)** para forzar HTTPS  
- **Feature Policy** para limitar APIs sensibles  

