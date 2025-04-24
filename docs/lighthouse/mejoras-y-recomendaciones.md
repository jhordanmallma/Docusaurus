---
id: mejoras-y-recomendaciones
title: Mejoras y Recomendaciones
sidebar_position: 4
---


Una vez que has generado y analizado tu reporte de Lighthouse, el siguiente paso es implementar las recomendaciones más impactantes para elevar la calidad de tu sitio. Aquí te mostramos cómo priorizar y aplicar las mejoras:

---

## 1. Priorizar por Impacto y Esfuerzo

| Categoría       | Tipo de Mejora                                       | Impacto  | Esfuerzo  |
|-----------------|-------------------------------------------------------|----------|-----------|
| **Performance** | Optimizar imágenes (comprimir, cambiar formato)       | Alto     | Medio     |
| **Performance** | Eliminar recursos que bloquean el renderizado         | Alto     | Alto      |
| **Accessibility** | Añadir atributos `alt` a imágenes                   | Medio    | Bajo      |
| **Accessibility** | Mejorar contraste de color                         | Medio    | Bajo      |
| **Best Practices** | Eliminar `console.log` en producción               | Bajo     | Bajo      |
| **SEO**         | Añadir `<meta name="description">`                    | Medio    | Bajo      |

1. **Alto impacto, bajo esfuerzo** → Prioridad máxima (por ejemplo, atributos `alt`, compresión de imágenes).  
2. **Alto impacto, alto esfuerzo** → Segundo paso (reestructurar carga de CSS/JS).  
3. **Bajo impacto, bajo esfuerzo** → Atacar en último lugar (limpieza de logs, minificación adicional).

---

## 2. Implementar Mejoras de Performance

### a) Optimizar Imágenes  
- Usa formatos modernos (`WebP`, `AVIF`).  
- Aplica compresión sin pérdida:  
  ```bash
  # Con imagemin-cli
  npx imagemin src/images/* --out-dir=dist/images
  ```

  ###  Implementa lazy loading:

```html
<img src="banner.jpg" loading="lazy" alt="Banner descriptivo">
```

###  b) Reducir Recursos que Bloquean el Render

**Estrategia:**  
Mueve CSS crítico inline y difiere el resto:

```html
<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
```
###  Optimiza la carga de JavaScript

**Solución:**  
Añade `defer` o `async` a tus etiquetas `<script>`:

```html
<script src="app.js" defer></script>
```

###  3. Mejorar Accesibilidad

**a) Imágenes accesibles:**  
Añade descripciones `alt` a todas las imágenes.

**b) Navegación por teclado:**  
Asegura que todos los botones y enlaces sean accesibles:

```html
<button aria-label="Cerrar menú">✕</button>
```
Comprueba el contraste de colores con herramientas como Contrast Checker.

### 4. Fortalecer Buenas Prácticas

Elimina referencias inseguras (HTTP) y consolida dependencias seguras (HTTPS).

Reemplaza APIs obsoletas y evita document.write().

Configura cabeceras de seguridad en el servidor (CSP, HSTS, X-Frame-Options).

### 5. Optimizar SEO

Asegúrate de tener una etiqueta `<title>` única y descriptiva:

```html
<title>Mi Sitio Web — Inicio</title>
```
Añade metadatos esenciales:


```html
<meta name="description" content="Descripción breve de la página">

```

Genera y enlaza un sitemap:

```xml
<!-- sitemap.xml -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ejemplo.com/</loc>
    <lastmod>2025-04-22</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>

```

### 6. Monitoreo Continuo

Integra Lighthouse CI para evaluar en cada PR o despliegue.

Usa dashboards de rendimiento (por ejemplo, [web.dev/measure](https://web.dev/measure)).

Revisa periódicamente para detectar regresiones.

Al aplicar estas recomendaciones, mejorarás no solo tus puntajes de Lighthouse, sino también la experiencia real de tus usuarios: más velocidad, mejor accesibilidad y mayor confiabilidad.
