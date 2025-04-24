---
id: cookies-y-seguridad
title: Cookies y Seguridad
sidebar_position: 7
---

Las cookies son pequeños fragmentos de datos que un servidor puede almacenar en el navegador del usuario. Aunque son esenciales para funcionalidades como autenticación y persistencia de sesiones, también representan un **vector común de ataque** si no se configuran correctamente.

---

##  ¿Qué es una cookie?

Una cookie es una pareja clave-valor que el servidor envía al navegador. El navegador la guarda y la incluye en cada solicitud futura al mismo dominio.

```http
Set-Cookie: sessionId=abc123
```

##  Riesgos de seguridad asociados

| Riesgo           | Descripción                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **Robo de cookies** | Si no se usan adecuadamente, pueden ser robadas por medio de XSS.          |
| **Manipulación**   | Cookies no cifradas o sin firma pueden ser alteradas por el cliente.        |
| **Intercepción**   | Si no se usa HTTPS, pueden ser interceptadas en tránsito.                   |

##  Cómo inspeccionar cookies con DevTools

1. **Abre DevTools** (F12 o clic derecho → Inspeccionar)
2. **Dirígete a la pestaña Application**
3. **En la barra lateral izquierda**, haz clic en Cookies
4. **Selecciona el dominio actual** para ver todas las cookies activas

### Información disponible:
- **Nombre**: Identificador de la cookie  
- **Valor**: Contenido almacenado  
- **Dominio**: Sitios donde es válida  
- **Fecha de expiración**: Tiempo de vida  

### Flags de seguridad:
- **Secure** (solo HTTPS)  
- **HttpOnly** (no accesible via JavaScript)  
- **SameSite** (control de envío entre sitios)  

##  Buenas prácticas de seguridad

### 1. Usa el flag HttpOnly
Evita que JavaScript acceda a la cookie, protegiéndola contra ataques XSS.

```http
Set-Cookie: sessionId=abc123; HttpOnly
```

### 2. Usa el flag Secure  
**Asegura que la cookie solo se envíe por conexiones HTTPS.**  

```http
Set-Cookie: sessionId=abc123; Secure
```

### 3. Configura SameSite  
Controla el envío de cookies en solicitudes entre sitios (cross-site).  

```http
Set-Cookie: sessionId=abc123; SameSite=Strict
```

## Valores de SameSite

| Valor    | Descripción                                                                 |
|----------|-----------------------------------------------------------------------------|
| **Strict** | Solo se envía en navegación directa al sitio (máxima seguridad)            |
| **Lax**    | Se permite en algunas peticiones (GET desde enlaces, prerenderizado)       |
| **None**   | Se envía siempre en contextos cross-site (requiere el flag `Secure`)       |

### 4. Evita guardar información sensible en cookies
**No almacenes:**
- 🔑 Contraseñas o credenciales
- 🔐 Tokens de acceso completos
- 📛 Datos personales sensibles
- 💳 Información financiera

**Alternativas seguras:**
- Usa identificadores de sesión opacos
- Almacena datos sensibles en el servidor
- Implementa tokens de corta duración

### 5. Usa cookies firmadas o cifradas (backend)
**Beneficios:**
```diff
+ Detecta modificaciones no autorizadas
+ Previene la falsificación de cookies
+ Protege la integridad de los datos

##  Cookies en el contexto de ataques

Ejemplo de XSS robando una cookie (cuando no es HttpOnly):

```javascript
// ❌ Solo si la cookie no tiene HttpOnly
alert(document.cookie);
```

##  Herramientas adicionales
- DevTools > Application > Cookies para visualizar y borrar
- Console con document.cookie (solo cookies sin HttpOnly)
- Herramientas de auditoría como Security Headers

## Conclusión
Las cookies mal configuradas son una puerta de entrada para atacantes. Con DevTools puedes inspeccionar fácilmente su uso y asegurarte de que respetan las mejores prácticas. Al aplicar los flags adecuados, minimizas riesgos como el robo de sesión o la exposición de datos.

**Próximo tema:**  
Cómo interpretar advertencias y errores de seguridad que muestra DevTools, y cómo tomar acción para solucionarlos.