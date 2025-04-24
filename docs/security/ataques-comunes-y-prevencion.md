---
id: ataques-comunes-y-prevencion
title: Ataques Comunes y Prevención
sidebar_position: 6
---


El navegador y las herramientas de desarrollo, como DevTools, son aliados clave para identificar y prevenir vulnerabilidades que pueden ser explotadas en una aplicación web. A continuación, repasamos los ataques más comunes que se pueden analizar con DevTools, así como buenas prácticas para prevenirlos.

---

## 🛡️ 1. Cross-Site Scripting (XSS)

**XSS** ocurre cuando un atacante logra inyectar código JavaScript malicioso en una página web que otros usuarios ejecutan.

### 🧪 Cómo detectarlo en DevTools

- Revisa los datos cargados desde entradas de usuarios.
- Observa el DOM en la pestaña **Elements** buscando `<script>` inesperados o atributos manipulados.
- Usa la pestaña **Console** para rastrear errores o alertas como `Uncaught SyntaxError`.

### 💡 Prevención

✅ Escapa y sanitiza todas las entradas del usuario.  
✅ Usa políticas CSP estrictas.  
✅ Nunca insertes HTML sin validarlo:

```js
// ❌ Vulnerable
div.innerHTML = userInput;

// ✅ Seguro
div.textContent = userInput;
```

## 2. Cross-Site Request Forgery (CSRF)

CSRF permite a un atacante ejecutar acciones en nombre de un usuario autenticado sin su consentimiento.

### Cómo inspeccionarlo en DevTools
- Verifica las solicitudes en la pestaña **Network**
- Observa si los formularios o peticiones POST incluyen tokens CSRF

### Prevención
✅ Usa tokens CSRF únicos por sesión  
✅ Valida el origen (Origin) y referer en el servidor  
✅ Implementa cabeceras SameSite en cookies:  

```http
Set-Cookie: sessionId=abc123; SameSite=Strict; Secure
```

## 3. Clickjacking

Técnica donde un sitio malicioso engaña al usuario para interactuar con elementos ocultos de otro sitio mediante iframes.

### Detección en DevTools
1. Abre la pestaña **Elements**
2. Busca si tu sitio está siendo embebido en un `<iframe>` no autorizado
3. Verifica respuestas HTTP para ver si faltan protecciones

###  Medidas de protección
```http
# Mejor práctica (moderna):
Content-Security-Policy: frame-ancestors 'none'

# Alternativa compatible:
X-Frame-Options: DENY
```

##  4. Exposición de Información Sensible
Errores en el código pueden exponer tokens, claves, datos privados en consola o respuestas JSON.

###  Cómo detectarlo
- Usa la pestaña **Console** para buscar logs de tokens o datos sensibles
- Usa **Network** para revisar las respuestas del backend

###  Prevención
✅ Elimina todos los `console.log()` antes de producción  
✅ No devuelvas información innecesaria en respuestas  
✅ Usa variables de entorno para las claves  

---

##  5. Inyecciones de Código
Pueden ser inyecciones SQL, comandos del sistema, LDAP, etc., a través de formularios o parámetros.

###  Cómo analizarlo
- Envía datos malformados desde el panel **Network > Fetch/XHR** y analiza respuestas
- Usa **Snippets** en DevTools para probar peticiones manualmente

###  Prevención
✅ Usa consultas preparadas en el backend  
✅ Valida y sanitiza todos los parámetros  
✅ No confíes en ningún dato externo  

---

##  Buenas Prácticas Generales
- Siempre utiliza **HTTPS**
- Valida en **frontend y backend**
- Usa cabeceras de seguridad:  
  ```http
  CSP, X-Frame-Options, Strict-Transport-Security
  ```
- Mantén las dependencias actualizadas

- Aplica seguridad por defecto: negar todo lo que no esté explícitamente permitido

## Conclusión

Conocer estos ataques y cómo detectarlos con DevTools te permite adoptar una postura proactiva frente a la seguridad. Un desarrollador consciente de estas amenazas puede construir aplicaciones más confiables y resistentes ante los atacantes.

**Próximo tema:**  
Analizaremos cómo utilizar DevTools para auditar cookies y almacenamiento local en busca de posibles vulnerabilidades.