---
title: "Navegación de Archivos"
description: "Aprende a explorar y manejar eficientemente los archivos del sitio desde el panel Sources de DevTools."
sidebar_position: 5
---

# Navegación de Archivos

El panel **Sources** en las herramientas del desarrollador (DevTools) te permite **explorar la estructura de archivos** de cualquier sitio web. Desde aquí puedes abrir scripts, editar en vivo, crear snippets y más. ¡Es como un mini editor dentro del navegador!

---

## 1. Estructura de archivos

En la parte izquierda del panel Sources verás un árbol de archivos que puede incluir:

- Archivos cargados desde el servidor principal (tu dominio).
- Recursos externos como scripts o estilos de otros sitios (CDNs).
- Archivos del navegador, extensiones u otras fuentes.

### Ejemplo:

```bash
https://misitio.com
├── index.html          # Página principal
├── css/
│   └── estilos.css     # Estilos globales
└── js/
    ├── app.js          # Lógica principal
    └── utilidades.js   # Funciones auxiliares
```


---

## 2. Buscar un archivo

Presiona `Ctrl + P` (o `Cmd + P` en Mac) para abrir el buscador de archivos. Escribe parte del nombre y selecciona rápidamente el archivo que necesitas.

---

## 3. Abrir archivos con doble clic

Puedes hacer **doble clic** en cualquier archivo del árbol para abrirlo en el área principal y ver (o editar) su contenido.

---

## 4. Filtrado de contenido

¿Tienes muchos archivos? Puedes usar la barra de búsqueda superior para filtrar por nombre o extensión.

- Ejemplo: escribir `.js` solo mostrará los archivos JavaScript.
- También puedes buscar por palabras clave dentro de los archivos con `Ctrl + Shift + F`.

---

## 5. Workspaces (Espacios de trabajo)

Si estás trabajando localmente, puedes mapear una carpeta desde tu PC y **sincronizar tus cambios desde DevTools directamente al archivo fuente**.

### ¿Cómo activar un Workspace?

1. Ve al panel Sources.
2. Haz clic en la pestaña de `Filesystem`.
3. Da clic en "Add folder to workspace" y selecciona tu carpeta local.
4. Acepta los permisos solicitados por el navegador.

Una vez configurado, puedes editar archivos y guardarlos en tu máquina directamente desde DevTools.

---

## 6. Tips útiles

- Usa `Ctrl + Shift + F` para buscar una palabra dentro de todos los archivos.
- Usa `Ctrl + O` para abrir rápidamente un archivo (igual que `Ctrl + P`).
- Haz clic derecho en cualquier archivo para opciones como “Save as” o “Copy link address”.

---

## Conclusión

El panel **Sources** te ofrece un entorno potente para navegar, editar y experimentar con los archivos de cualquier sitio web. Dominarlo acelera tu flujo de trabajo y te ayuda a depurar con mayor precisión.

---
