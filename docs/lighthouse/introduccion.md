---
id: introduccion
title: Introducción a Lighthouse
sidebar_position: 1
---

**Lighthouse** es una herramienta automatizada de código abierto para auditar la calidad de páginas web. Integrado en Chrome DevTools, permite evaluar distintos aspectos de una aplicación o sitio:

- **Performance**: velocidad de carga y respuesta.
- **Accessibility**: grado de cumplimiento de buenas prácticas de accesibilidad.
- **Best Practices**: seguridad, uso correcto de HTTPS, ausencia de errores JS, etc.
- **SEO**: recomendaciones para mejorar posicionamiento y descubribilidad.
- **Progressive Web App (PWA)**: (opcional) verificación de capacidades offline y “app-like”.

---

## ¿Por qué usar Lighthouse?

1. **Visión completa**  
   Un único reporte agrupa indicadores clave de rendimiento, accesibilidad, SEO y prácticas recomendadas.  
2. **Integración en DevTools**  
   No necesitas añadir extensiones externas: lo encuentras en la pestaña de **Lighthouse** de DevTools.  
3. **Recomendaciones accionables**  
   Cada sección incluye sugerencias concretas (“fix opportunities”) y enlaces a la documentación oficial.  
4. **Automatización**  
   Puedes exportar informes JSON/HTML y correr auditorías en CI/CD (GitHub Actions, CircleCI, etc.).

---

## Acceso desde DevTools

1. Abre Chrome DevTools (F12 o clic derecho → *Inspeccionar*).  
2. Selecciona la pestaña **Lighthouse** (si no aparece, haz clic en “»” y encuéntrala).  
3. Elige la categoría o categorías que quieres auditar (Desktop, Mobile).  
4. Haz clic en **Generate report** y espera a que se complete la auditoría.

---

## Estructura del reporte

Cuando finaliza, Lighthouse mostrará:

- **Score global** por categoría (0–100).  
- **Metricas clave** (por ejemplo, LCP, FID, CLS en Performance).  
- **Opportunities**: acciones que pueden mejorar tu puntaje (con estimación de ahorro de tiempo).  
- **Diagnostics**: información más detallada para desarrolladores.  
- **Passed audits**: ítems que ya cumplen las mejores prácticas.

> En el siguiente capítulo profundizaremos en cómo interpretar cada sección del reporte y priorizar las mejoras más impactantes.

