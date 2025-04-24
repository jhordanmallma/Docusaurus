# 📘 Manual del Inspector de Elementos

Este sitio web es un manual interactivo creado con [Docusaurus](https://docusaurus.io/), diseñado para facilitar el aprendizaje y uso de las herramientas de desarrollo (DevTools) en navegadores modernos. Incluye guías prácticas, glosarios, atajos de teclado y explicaciones visuales para mejorar tu experiencia como desarrollador o tester.

## 🌐 Enlace al sitio en producción

Puedes acceder al manual en línea a través del siguiente enlace:

👉 <a href="https://912653526.facturalo.co/docusaurus/" target="_blank" rel="noopener noreferrer">https://tudominio.com/manual-devtools</a>

> **Nota:** Reemplaza la URL anterior con la dirección real de tu proyecto una vez desplegado en cPanel.

## 🚀 Instalación

Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 16.14 o superior).

Instala las dependencias del proyecto con:

```bash
npm install
```
## 💻 Desarrollo local

Inicia el servidor de desarrollo con:

```bash
npm start
```

Este comando abrirá una ventana del navegador con el sitio en modo desarrollo. Los cambios que realices se reflejarán en tiempo real sin necesidad de reiniciar el servidor.

🏗️ Construcción del sitio
Para generar el sitio estático listo para producción:

```bash
npm run build
```
El contenido generado se ubicará en la carpeta build/, listo para ser desplegado en cualquier servicio de alojamiento de contenido estático.

## 🚢 Despliegue

Si deseas desplegar el sitio en GitHub Pages, puedes utilizar:

```bash
GIT_USER=<tu_usuario_de_github> npm run deploy
```

Asegúrate de reemplazar <tu_usuario_de_github> con tu nombre de usuario real en GitHub.

## 📂 Estructura del proyecto

- `docs/`: Contiene la documentación en formato Markdown.
- `src/pages/`: Páginas personalizadas del sitio.
- `src/components/`: Componentes reutilizables de React.
- `static/`: Archivos estáticos como imágenes y otros recursos.
- `docusaurus.config.js`: Archivo de configuración principal del sitio.

## ✨ Características destacadas

- ✅ Basado en React y MDX para contenido interactivo.
- 🌐 Soporte multilingüe e internacionalización.
- 🔍 Búsqueda integrada y navegación optimizada.
- 🧩 Personalización completa de temas y estilos.
- 📄 Versionado de documentación y estructura modular.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este manual, corregir errores o añadir nuevas secciones, por favor abre un pull request o crea un issue para discutir tus ideas.
