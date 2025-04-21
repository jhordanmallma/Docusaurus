---
title: "Edición en Vivo (Live Editing & Snippets)"
description: "Edita tu código directamente desde DevTools y ejecuta fragmentos personalizados con Snippets"
sidebar_position: 4
---

# Edición en Vivo (Live Editing & Snippets)

El panel **Sources** no solo sirve para inspeccionar archivos, ¡también puedes **editar y ejecutar código en vivo**! Esto te permite experimentar, corregir errores o probar ideas rápidamente sin modificar el archivo fuente original.

---

## 1. Edición en Vivo de Archivos

Cuando inspeccionas un archivo JavaScript en el panel Sources:

1. Haz doble clic sobre el archivo en el navegador de archivos (izquierda).
2. Aparecerá en el panel principal como un archivo editable.
3. Puedes modificar cualquier línea de código.
4. Presiona `Ctrl + S` (o `Cmd + S` en Mac) para aplicar los cambios.
5. Refresca la página para ver cómo afecta tu edición.

📌 Nota: los cambios son temporales y se pierden al recargar a menos que uses *Workspaces*.

---

## 2. Crear y usar Snippets

Los **Snippets** son fragmentos de código JavaScript reutilizables que puedes ejecutar en cualquier momento. Son ideales para pruebas rápidas.

### ¿Cómo crear uno?

1. En el panel **Sources**, ve a la pestaña `Snippets` (parte izquierda).
2. Haz clic derecho → `New`.
3. Escribe un nombre para tu snippet, por ejemplo: `saludo.js`.
4. Escribe tu código, por ejemplo:

```js
console.log("¡Hola desde un snippet!");

```
5. Presiona Ctrl + Enter para ejecutarlo.

### ¿Dónde se ejecutan?

Los **snippets** se ejecutan en el contexto de la página actual, con las siguientes características:  

- **Mismo contexto** que la Consola de DevTools  
- **Acceso completo** al DOM de la página  
- **Puedes interactuar** con variables globales definidas en la página  

**Ejemplo de uso:**  
```javascript
// Accede al DOM
document.querySelector('h1').textContent = 'Hola desde snippet!';

// Interactúa con variables globales de la página
if (window.miVariableGlobal) {
    console.log(miVariableGlobal);
}
```

### 3. Ejemplo práctico: prueba de funciones

**Escenario:**  
Tu sitio tiene una función global `saludar()` definida así:

```javascript
function saludar() {
  alert("¡Hola!"); 
}
```
Puedes crear un snippet con solo esta línea:

```javascript
saludar();
```
Y al ejecutarlo, se abrirá el alert como si se hubiera llamado desde el sitio.

### 4. Ventajas de usar Snippets

✅ **Pruebas rápidas**  
   Experimenta con código sin modificar archivos fuente  

✅ **Contexto completo**  
   Accede al DOM, variables globales y APIs del navegador  

✅ **Automatización ligera**  
   Ejecuta tareas repetitivas con un clic  

✅ **Persistencia**  
   Guardados entre sesiones (sobreviven a cierres del navegador)  

✅ **Portabilidad**  
   Exportables/importables entre dispositivos o proyectos  

✅ **Organización**  
   Clasifica tus pruebas por snippets temáticos  

### 5. Accesos rápidos esenciales

| Atajo              | Función                          | Plataforma       |
|--------------------|----------------------------------|------------------|
| `Ctrl + S`         | Guardar cambios en snippets      | Windows/Linux    |
| `Cmd + S`          | Guardar cambios en snippets      | Mac              |
| `Ctrl + Enter`     | Ejecutar snippet actual          | Windows/Linux    |
| `Cmd + Enter`      | Ejecutar snippet actual          | Mac              |
| `Esc`              | Alternar consola de depuración   | Todas            |
| `Ctrl + Shift + P` | Buscar comandos (como "Run")     | Windows/Linux    |
| `Cmd + Shift + P`  | Buscar comandos (como "Run")     | Mac              |

**Consejos avanzados:**
1. Usa `Ctrl+O` (Windows) / `Cmd+O` (Mac) para buscar rápidamente snippets guardados
2. `Ctrl+Shift+N` (Windows) / `Cmd+Shift+N` (Mac) crea nuevos snippets rápidamente
3. Los atajos funcionan incluso con el drawer de consola abierto (`Esc`)


### 💡 Consejo final: Potencia tu flujo con Snippets

Convierte tus **Snippets** en un *Swiss Army Knife* de desarrollo con estos usos clave:

**🛠️ Caja de herramientas esencial**  
- **Depuración rápida**: Crea snippets genéricos para inspeccionar variables  
- **Laboratorio de pruebas**: Experimenta con nuevas funciones sin tocar producción  
- **DOM Playground**: Manipula elementos en páginas de terceros (útil para debugging)  

**⚡ Automatizaciones frecuentes**  
```javascript
// Ejemplo: Auto-relleno de formularios de prueba
document.querySelector('#username').value = 'test_user';
document.querySelector('#email').value = 'test@example.com';
```