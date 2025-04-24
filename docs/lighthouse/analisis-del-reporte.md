---
id: analisis-del-reporte
title: Análisis del Reporte
sidebar_position: 2
---


El reporte de Lighthouse se organiza en varias secciones clave. Cada una ofrece puntuaciones y hallazgos con recomendaciones prácticas.

---

## 1. Performance

### Métricas principales  
- **LCP (Largest Contentful Paint)**: tiempo hasta que el elemento más grande es visible (ideal < 2.5 s).  
- **FID (First Input Delay)**: retraso en la primera interacción del usuario (ideal < 100 ms).  
- **CLS (Cumulative Layout Shift)**: estabilidad visual (ideal < 0.1).  
- **TTI (Time to Interactive)**: tiempo hasta que la página es completamente interactiva.  
- **TBT (Total Blocking Time)**: tiempo bloqueado por scripts (ideal < 300 ms).

### Oportunidades (“Opportunities”)  
Lighthouse calcula cuánto tiempo podrías ahorrar optimizando recursos, por ejemplo:  
- **Eliminar recursos que bloquean el renderizado**  
- **Reducir el tamaño de imágenes**  
- **Usar carga diferida (lazy-load)**

### Diagnostics  
Datos adicionales como tiempo de ejecución de scripts, solicitudes de red y tamaños de recursos.

---

## 2. Accessibility

### Puntuación y criterios  
Evalúa hasta ~50 reglas de accesibilidad, por ejemplo:  
- Etiquetas `alt` en imágenes  
- Contraste de color  
- Uso correcto de roles ARIA  

### Ejemplos de hallazgos  
- **Fail**: `<img>` sin atributo `alt`.  
- **Warn**: texto con contraste insuficiente.

### Recomendaciones  
- Añade `alt` descriptivos.  
- Usa colores que cumplan WCAG AA (relación ≥ 4.5:1).  
- Comprueba enfoque del teclado y orden lógico del DOM.

---

## 3. Best Practices

### Alcance  
Revisa seguridad, compatibilidad HTTPS, uso de APIs modernas y errores de consola.

### Hallazgos comunes  
- Carga de bibliotecas inseguras (HTTP).  
- Uso de `document.write()`.  
- Errores JS en tiempo de ejecución.

### Acciones sugeridas  
- Elimina llamadas a `console.log()` en producción.  
- Asegura todas las peticiones por HTTPS.  
- Sustituye APIs obsoletas por versiones soportadas.

---

## 4. SEO

### Puntos clave  
- Etiquetas `meta` esenciales (`description`, `viewport`).  
- Estructura de encabezados (`<h1>` único).  
- Sitemap y robots.txt accesibles.

### Problemas típicos  
- Página sin `<title>`.  
- Links con texto “click here”.  
- Ausencia de enlace canónico.

### Buenas prácticas  
- Añade `<meta name="description" content="…">`.  
- Usa URLs descriptivas y amigables.  
- Incluye atributos `rel="canonical"` si hay contenido duplicado.

---

## 5. Progressive Web App (PWA) – (Opcional)

### Requisitos  
- **Manifest**: `manifest.json` con nombre, iconos y `start_url`.  
- **Service Worker**: maneja precarga y caché.  
- HTTPS obligatorio.

### Verificaciones  
- Ver que el manifest se carga correctamente.  
- Comprobar que existe un Service Worker activo.  
- Íconos de aplicación definidos (método para “Add to Home Screen”).

---

> Con este análisis ya tienes clara la información que ofrece Lighthouse. En el siguiente capítulo veremos cómo priorizar e implementar las recomendaciones más críticas.  
