---
title: "Inspección de Objetos (Inspecting Objects)"
description: "Cómo visualizar y explorar objetos complejos desde la Consola de DevTools"
sidebar_position: 6
---

# Inspección de Objetos (Inspecting Objects)

La Consola de DevTools no solo muestra texto: es una herramienta poderosa para **inspeccionar objetos JavaScript** y **nodos del DOM** de forma interactiva. En esta sección aprenderás a explorar, expandir y extraer información de los objetos que maneja tu aplicación.

---

## 1. Mostrar objetos en la consola

- **`console.log(obj)`**  
  Muestra el objeto en forma de lista desplegable.  
  ```js
  const usuario = { nombre: "Ana", edad: 28, rol: "admin" };
  console.log(usuario);
   ```
- **`console.dir(obj)`** 
  Presenta el objeto como un árbol de propiedades, ideal para nodos del DOM.

 ```js
  console.dir(document.body);

   ```
## 2. Expandir y navegar el árbol de propiedades

1. Selecciona el objeto en la Consola.
2. Haz clic en ▶️ para desplegar sus propiedades propias (own properties).
3. Expande la sección `__proto__` para ver propiedades heredadas y métodos del prototipo.
4. Repite el proceso para explorar a fondo cualquier objeto.

## 3. Visualizar datos tabulares

Para arrays u objetos homogéneos (colecciones de registros), usa:

```javascript
console.table([
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" }
]);
```
Esto mostrará un formato tabular que facilita la comparación de valores.

## 4. Inspectores de nodos del DOM

Cuando usas `console.log()` con un nodo del DOM:

```javascript
console.log(document.querySelector("header"));
```
- Se mostrará como `<header>…</header>` en la consola
- Haz clic para abrirlo en el Panel de Elementos y ver su estructura HTML.

También puedes usar:

```javascript
inspect(document.querySelector("header"));
```
Para que DevTools cambie automáticamente al panel de Elementos y seleccione ese nodo.

## 5. Copiar y extraer datos

### Copiar objeto completo:
1. Haz clic derecho sobre la entrada en la consola
2. Selecciona `Copy → Copy object`
3. Pégalo en la Consola o editor para inspeccionarlo nuevamente

### Copiar valores específicos:
- **Para copiar la referencia de la propiedad**:
  - Selecciona una propiedad
  - Haz clic derecho → `Copy property path`
  
- **Para copiar el valor literal**:
  - Selecciona una propiedad  
  - Haz clic derecho → `Copy value`
  
## 6. Editar propiedades en vivo

**Pasos para modificar propiedades:**

1. En la Consola:
   - Expande el objeto hasta encontrar la propiedad deseada
   
2. Edición:
   - Haz **doble clic** sobre el valor actual
   - Ingresa el nuevo valor
   - Presiona `Enter` para confirmar

**Efecto:**
- Los cambios se aplican inmediatamente
- Si el objeto está vinculado a la interfaz (UI), podrás observar:
  - La reacción de la aplicación en tiempo real
  - Actualizaciones automáticas en la vista

## 7. Atajos útiles

**Navegación en objetos:**
- `Flecha ►/▼`: Expandir/contraer nodos individuales del objeto
- `Ctrl + Click` (Windows/Linux) o `Cmd + Click` (Mac):  
  ⤷ Expande recursivamente todos los nodos de un nivel completo

**Accesos directos en DOM:**
- `$0`: Referencia al nodo DOM actualmente seleccionado en el inspector
  ```javascript
  // Ejemplo de uso:
  console.log($0); // Muestra el nodo seleccionado
  inspect($0);     // Enfoca el elemento en el panel Elements
  ```
- `$_`: Referencia al resultado de la última expresión evaluada

- `$('selector')`: Atajo para document.querySelector




