# Preguntas Frecuentes (FAQ)

**1. ¿Qué es Chrome DevTools y para qué sirve?**  
Chrome DevTools es un conjunto de herramientas integradas en el navegador Chrome que permite inspeccionar, depurar y optimizar sitios web y aplicaciones. Incluye paneles para DOM/CSS, red, rendimiento, memoria, seguridad, Lighthouse, almacenamiento y más.

---

**2. ¿Cómo abro DevTools en mi navegador?**  
- **Windows/Linux**: `Ctrl + Shift + I` o clic derecho → *Inspeccionar*.  
- **macOS**: `⌘ + Option + I` o clic derecho → *Inspeccionar*.

---

**3. ¿Puedo usar DevTools en otros navegadores?**  
Sí. Firefox, Edge y Safari incluyen herramientas similares. La nomenclatura varía ligeramente, pero la mayoría de conceptos (Inspect Element, Console, Network, etc.) son equivalentes.

---

**4. ¿Cómo guardo cambios temporales que hago en CSS/HTML?**  
Los cambios hechos en DevTools sólo aplican en la sesión actual. Para persistirlos, copia el fragmento editado y pégalo en tu archivo fuente (HTML/CSS) en tu editor y guarda allí los cambios.

---

**5. ¿Cómo debuggeo un error JavaScript paso a paso?**  
1. Ve al panel **Sources**.  
2. Coloca breakpoints haciendo clic en el número de línea.  
3. Recarga o ejecuta la acción que dispara el script.  
4. Usa F10 (Step Over) y F11 (Step Into) para avanzar en la ejecución.

---

**6. ¿Cómo inspeccionar el rendimiento de mi página?**  
Abre el panel **Performance**, pulsa *Record*, interactúa con la página y detén la grabación. Verás métricas de FPS, tiempos de carga, ejecución de scripts y más.

---

**7. ¿Dónde encuentro el informe de Lighthouse y cómo lo comparto?**  
En la pestaña **Lighthouse** de DevTools, selecciona las categorías (Mobile/Desktop), genera el reporte y descarga en HTML o JSON. El HTML es interactivo y fácil de enviar por correo o subir a un servidor.

---

**8. ¿Cómo limpio el cache y las cookies desde DevTools?**  
En el panel **Application** → **Storage**, haz clic en “Clear site data” para eliminar localStorage, IndexedDB, cookies y cache. También puedes borrar manualmente en la sección **Cookies**.

---

**9. ¿Puedo automatizar auditorías de Lighthouse en mi flujo de trabajo?**  
Sí. Usa la CLI de Lighthouse (`npm install -g lighthouse`) o configura **Lighthouse CI** en tu CI/CD (GitHub Actions, GitLab CI, etc.) para generar y artifificar informes en cada push o pull request.

---

**10. ¿Cómo identifico y corrijo contenido mixto?**  
Ve al panel **Security** o revisa la **Console**. Allí aparecerán advertencias de “Mixed Content” con URLs inseguras. Cambia esos recursos a HTTPS o usa `upgrade-insecure-requests` en tu CSP.

---

> Si no encuentras la respuesta a tu duda aquí, consulta la documentación oficial de [Chrome DevTools](https://developer.chrome.com/docs/devtools/) o abre un issue en el repositorio de la guía.
