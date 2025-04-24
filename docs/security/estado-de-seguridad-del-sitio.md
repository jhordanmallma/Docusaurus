---
id: estado-de-seguridad-del-sitio
title: Estado de Seguridad del Sitio
sidebar_position: 2
---

El estado de seguridad de un sitio web es el primer aspecto a evaluar cuando se analiza una aplicación desde el navegador. El **panel Security** de DevTools proporciona información clara sobre si la conexión es segura, el uso de HTTPS, y cualquier posible problema relacionado con certificados o contenido mixto.

## ¿Cómo acceder al panel Security?

1. Abre las DevTools en tu navegador (F12 o clic derecho → *Inspeccionar*).
2. Haz clic en la pestaña **Security**.
3. Recarga la página para obtener un análisis actualizado del estado de seguridad.

> Si no ves la pestaña, haz clic en el ícono de `>>` y selecciona "Security".

---

## Indicadores de Seguridad en la Barra de Dirección

Antes de entrar a DevTools, puedes observar el icono en la barra de direcciones del navegador:

| Icono      | Significado |
|------------|-------------|
| 🔒 Candado | Conexión segura (HTTPS) |
| ⚠️ Triángulo amarillo | Contenido mixto |
| ❌ Tachado en rojo | Conexión no segura (HTTP) |

Estos íconos son un indicio visual rápido sobre el estado general del sitio, pero DevTools proporciona mucho más detalle.

---

## Vista General del Panel Security

Al abrir el panel Security, verás un resumen como este:

**Security overview**

✓ **This page is secure** (valid HTTPS).  

- **Certificate** - valid and trusted  
- **Resources** - all served securely  


### Captura de ejemplo

![Vista del panel Security en DevTools](https://developer.chrome.com/static/images/devtools/security/security-panel.png)

---

## Diagnóstico de problemas comunes

### 1. **Certificado inválido o caducado**

El panel puede mostrar un error como:

```markdown
**Certificate Error**: Expired or not trusted  
```


Esto indica que el certificado SSL/TLS del sitio no es válido. En este caso, los navegadores pueden bloquear la carga del sitio o mostrar advertencias al usuario.

### 2. **Contenido mixto (Mixed Content)**

Este error aparece cuando una página HTTPS carga recursos a través de HTTP:


```markdown

Some resources are served insecurely


```

DevTools te mostrará una lista de esos recursos (scripts, imágenes, etc.) junto con sus URLs.

---

## Buenas prácticas

- **Siempre usar HTTPS:** Para proteger los datos en tránsito y evitar ataques de tipo “Man-in-the-Middle”.
- **Redireccionar HTTP a HTTPS:** Configura el servidor para redirigir todo tráfico HTTP a su versión segura.
- **Certificados válidos y actualizados:** Utiliza certificados de confianza pública como Let’s Encrypt y verifica su validez.
- **Evitar contenido mixto:** Usa siempre URLs absolutas seguras (HTTPS) para recursos externos o alójalos localmente.

---

## Código de ejemplo (redirección a HTTPS)

```htaccess
# Redirección en Apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
```

# Redirección en Nginx

```htaccess
server {
    listen 80;
    server_name midominio.com;
    return 301 https://$server_name$request_uri;
}
```
#  Resumen de Seguridad

El estado de seguridad de un sitio es **el primer paso fundamental** para garantizar:
- Una navegación segura 🛡️  
- Una experiencia protegida para los usuarios 👥  

##  Panel de Seguridad en DevTools
Herramienta esencial para desarrolladores que proporciona:
✔️ Vista detallada del uso **HTTPS**  
✔️ Análisis de **certificados del sitio**  
✔️ Detección de **contenido no seguro** (requiere corrección)  

---

##  Próximos Temas
En las siguientes secciones aprenderás a inspeccionar:
1. **Certificados** (validación y cadena de confianza)  
2. **Políticas de seguridad** (CSP, HSTS)  
3. **Cookies** (atributos Secure/HttpOnly)  
4. **Otras herramientas** de DevTools para auditoría de seguridad  

> 💡 *"La seguridad no es un producto, sino un proceso continuo"* - Bruce Schneier  