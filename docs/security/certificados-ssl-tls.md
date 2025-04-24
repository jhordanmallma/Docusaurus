---
id: certificados-ssl-tls
title: Certificados SSL/TLS
sidebar_position: 3
---

Los certificados SSL/TLS son fundamentales para establecer conexiones seguras entre el navegador y el servidor. Garantizan que la información enviada entre ambas partes está cifrada, y validan que el sitio web realmente pertenece a la entidad que dice ser.

DevTools permite inspeccionar fácilmente los certificados utilizados por un sitio web y verificar su validez, autoridad emisora y configuración.

---

## ¿Qué es un certificado SSL/TLS?

Un **certificado SSL/TLS** contiene información como:

- El dominio o nombre de la organización.
- La autoridad certificadora (CA) que lo emitió.
- La fecha de emisión y expiración.
- La clave pública utilizada para cifrar la conexión.

Cuando visitas un sitio web a través de **HTTPS**, el navegador comprueba que el certificado es válido, está firmado por una CA de confianza, y coincide con el dominio al que accedes.

---

## Inspeccionando el certificado desde DevTools

1. Abre DevTools (F12).
2. Ve a la pestaña **Security**.
3. Haz clic en el botón **"View certificate"**.

Esto abrirá una ventana emergente con los detalles del certificado actual del sitio.

---

## Información del certificado

Al hacer clic en "View certificate", verás un panel como este:

![Vista de certificado en DevTools](https://developer.chrome.com/static/images/devtools/security/certificate-viewer.png)

<small>ℹ️ Si la imagen no carga, [consulta la documentación oficial de Chrome DevTools](https://developer.chrome.com/docs/devtools/security/)</small>

### Detalles relevantes:

- **Issued to:** El dominio o entidad a quien se emitió.
- **Issued by:** Autoridad certificadora (CA).
- **Valid from / to:** Fechas de validez del certificado.
- **SHA-256 Fingerprint:** Huella digital única del certificado.

---

## Ejemplo de certificado válido


```markdown
Issued to: www.ejemplo.com Issued by: Let's Encrypt Authority X3 Valid from: Mar 15 2025 Valid to: Jun 13 2025

```


Esto indica que el certificado está activo, fue emitido por una CA reconocida, y es válido para el dominio.

---

## Errores comunes de certificados

### 1. Certificado expirado

```markdown
✗ Certificate expired
```

Significa que el certificado ya no es válido. Los navegadores modernos bloquearán el acceso o mostrarán una advertencia.

### 2. Certificado no confiable
```markdown

✗ Certificate not issued by a trusted authority
```
Ocurre cuando el certificado no fue emitido por una CA reconocida, o es un certificado autofirmado.

### 3. Mismatch de dominio

```markdown
✗ The certificate is not valid for this hostname
```

El dominio que visitas no coincide con el dominio para el que fue emitido el certificado.

---

## Buenas prácticas

✅ Utiliza certificados de confianza pública como [Let’s Encrypt](https://letsencrypt.org/).  
✅ Asegúrate de renovarlos antes de su fecha de expiración.  
✅ Usa herramientas de automatización como **Certbot** para renovaciones automáticas.  
✅ Configura correctamente el servidor para enviar el certificado intermedio.

---

## Verificación adicional en línea

Puedes usar servicios como [SSL Labs](https://www.ssllabs.com/ssltest/) para analizar a fondo el estado del certificado de tu sitio y detectar configuraciones inseguras.

---

## Conclusión

Los certificados SSL/TLS son la base de una comunicación segura en la web. Usar DevTools para verificar que estén configurados correctamente ayuda a evitar advertencias de seguridad, mejorar la confianza del usuario y proteger la integridad de los datos en tránsito.

> A continuación, aprenderás a detectar problemas de **contenido mixto**, otro error común de seguridad relacionado con HTTPS.


