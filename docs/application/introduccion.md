# Introducción al Panel de Aplicación (Application)

El panel **Application** de las DevTools de Chrome permite explorar, gestionar y depurar los **recursos de almacenamiento** y **funcionalidades web** que utiliza una aplicación. Es especialmente útil para analizar **Progressive Web Apps (PWA)**, comprobar la gestión de caché, cookies, bases de datos locales y más.

---

## 🧰 ¿Qué puedes hacer desde este panel?

- Ver y editar **cookies** de una página web.
- Inspeccionar datos almacenados en **Local Storage**, **Session Storage** o **IndexedDB**.
- Analizar archivos como `manifest.json` y validar si una aplicación cumple con las características de una PWA.
- Administrar **Service Workers** y el almacenamiento en caché asociado.
- Ver el uso de almacenamiento y borrar datos específicos.

---

## 📍 Ubicación del Panel

1. Abre DevTools (clic derecho → **"Inspeccionar"** o `F12`).
2. Haz clic en la pestaña **Application**.
3. En la barra lateral izquierda verás todas las categorías disponibles.

---

## 🗂️ Estructura General del Panel

```plaintext
Application
├── Manifest
├── Service Workers
├── Storage
│   ├── Local Storage
│   ├── Session Storage
│   ├── IndexedDB
│   ├── Web SQL (obsoleto)
│   └── Cookies
├── Cache
│   ├── Cache Storage
│   └── Application Cache (deprecated)
├── Frames
├── Background Services
```

### 🎯 ¿Por qué es importante?  
- **Entender el manejo de datos**:  
  Permite analizar cómo una app gestiona información persistente del usuario (ej: tokens, preferencias).  
- **Depuración crítica**:  
  Es clave para resolver errores relacionados con sesiones, almacenamiento local o estado global.  
- **Validación de apps modernas**:  
  Fundamental para garantizar el correcto funcionamiento de aplicaciones basadas en web (SPAs, PWAs).  

# Almacenamiento Web

El almacenamiento web permite a las aplicaciones guardar datos directamente en el navegador del usuario, de forma persistente o temporal. Desde el panel **Application** de DevTools puedes inspeccionar, modificar y eliminar estos datos con facilidad.

---

## 📦 Tipos de almacenamiento disponibles

### 🗃️ Local Storage
- Guarda datos **clave-valor** de forma persistente.
- Se mantiene incluso al cerrar y reabrir el navegador.
- Ideal para configuraciones o sesiones no sensibles.

```js
// Ejemplo: Guardar datos en Local Storage
localStorage.setItem('usuario', 'Carlos');
```


### 🧭 Session Storage  
- Similar al `Local Storage`, pero solo disponible durante la sesión activa.  
- Se borra automáticamente al cerrar la pestaña o navegador. 


```js
// Ejemplo: Guardar datos en Session Storage
sessionStorage.setItem('tema', 'oscuro');
```
### 🗃️ IndexedDB
- Base de datos orientada a objetos.

- Ideal para almacenar datos estructurados complejos.

- Utilizado por apps que funcionan sin conexión.

```js
// Acceso básico a IndexedDB
const request = indexedDB.open('miBaseDeDatos', 1);
```

### 🍪 Cookies
- Datos pequeños enviados entre el navegador y el servidor.

- Pueden incluir fechas de expiración, ámbito de acceso, entre otros.

- Accesibles desde DevTools y también mediante document.cookie.

```js
// Crear una cookie desde JavaScript
document.cookie = "token=123abc; expires=Fri, 31 Dec 2025 23:59:59 GMT";
```

### 🔍 ¿Cómo inspeccionar estos datos?
1. **Abre las Herramientas de Desarrollo**:
   - Presiona `F12` o haz clic derecho → _"Inspeccionar"_ → pestaña _"Application"_
2. **Navega al almacenamiento**:
   - En el menú lateral izquierdo, expande la sección _Storage_
3. **Selecciona un tipo de almacenamiento**:
   - Local Storage / Session Storage / IndexedDB / Cookies
4. **Visualiza los datos**:
   - Se mostrarán todas las claves y valores almacenados


### 🧹 ¿Cómo limpiar los datos?
Puedes eliminar cualquier dato almacenado desde este mismo panel:

1. **Selecciona el origen**  
   Haz clic derecho sobre el tipo de almacenamiento (Local Storage, Session Storage, etc.)

2. **Elimina los datos**  
   - Usa **Clear** para borrar datos específicos  
   - Usa **Delete All** para eliminar todo el contenido  

3. **Limpieza completa**  
   También puedes usar el botón **"Clear storage"** para borrar todo el almacenamiento del sitio  

### 📌 Recomendaciones
- **No almacenes información sensible** en Local/Session Storage o cookies sin medidas de seguridad.
- **Usa IndexedDB** para grandes volúmenes de datos o aplicaciones offline.
- **Mantén tu almacenamiento organizado** con claves significativas y consistentes.