# Glosario (Glossary)

Este glosario recoge términos clave que aparecen en el manual de DevTools y en las auditorías web.

| Término               | Definición                                                                                                                                                     |
|-----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **CSP**               | *Content Security Policy*. Cabecera HTTP que restringe los orígenes de recursos permitidos en una página para prevenir XSS e inyecciones de código malicioso.   |
| **CSRF**              | *Cross-Site Request Forgery*. Ataque que fuerza a un usuario autenticado a ejecutar acciones no deseadas en una aplicación.                                      |
| **IndexedDB**         | Base de datos de objetos en el navegador. Permite almacenar grandes cantidades de datos estructurados de manera asíncrona.                                       |
| **LCP**               | *Largest Contentful Paint*. Métrica de rendimiento que mide el tiempo hasta que el elemento más grande es visible (ideal < 2.5 s).                                |
| **LocalStorage**      | API de almacenamiento web persistente, con capacidad de unos 5MB por origen, disponible entre recargas y sesiones.                                               |
| **Mixed Content**     | Situación en la que una página HTTPS carga recursos (scripts, imágenes, CSS) a través de HTTP, debilitando la seguridad de la conexión.                           |
| **PWA**               | *Progressive Web App*. Aplicación web que puede comportarse como nativa: offline, instalación en home screen, notificaciones push, etc.                            |
| **SessionStorage**    | API de almacenamiento web que persiste solo mientras la pestaña o ventana del navegador esté abierta.                                                           |
| **SSL/TLS**           | Protocolos criptográficos que aseguran la confidencialidad e integridad de la comunicación entre cliente y servidor (HTTPS).                                      |
| **XSS**               | *Cross-Site Scripting*. Vulnerabilidad que permite la inyección de código JavaScript malicioso en páginas vistas por otros usuarios.                            |
| **Cache Storage**     | API utilizada por Service Workers para almacenar recursos de la aplicación (HTML, CSS, JS, imágenes) y servirlos sin conexión o de forma más rápida.            |
| **First Input Delay** | *FID*. Métrica que mide el retraso entre la primera interacción del usuario y la respuesta del browser (ideal < 100 ms).                                         |
| **Total Blocking Time**| *TBT*. Tiempo total que el hilo principal está bloqueado por scripts, afectando la interactividad (ideal < 300 ms).                                            |
| **Console**           | Panel de DevTools donde se pueden ver, filtrar y depurar mensajes de log, errores y ejecutar comandos JavaScript interactivos.                                    |
| **Elements**          | Panel de DevTools que muestra el DOM y el CSS aplicado, permite inspeccionar, editar y depurar la estructura y estilos de la página en tiempo real.              |
| **Network**           | Panel de DevTools que registra todas las solicitudes HTTP(S), mostrando tiempos de carga, tamaños de recursos y detalles de cabeceras.                            |
| **Security Panel**    | Panel de DevTools que resume el estado de seguridad de la página: certificados SSL/TLS, contenido mixto, políticas CSP, cookies seguras y advertencias.           |
| **Lighthouse**        | Herramienta de auditoría integrada en DevTools que genera reportes de Performance, Accessibility, Best Practices, SEO y PWA.                                     |
