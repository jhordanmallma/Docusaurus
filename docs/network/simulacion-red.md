---
title: "Simulación de Red (Throttling & Offline)"
description: "Cómo emular diferentes condiciones de red y probar tu sitio en modo offline desde DevTools"
sidebar_position: 4
---

# Simulación de Red (Throttling & Offline)

El **Panel de Red** de DevTools incluye herramientas para **emular conexiones lentas**, **condiciones de red inestables** e incluso **modo offline**, lo cual es esencial para probar la resiliencia y el rendimiento de tu sitio en distintos escenarios.

---

## 1. Acceder a la simulación de red

1. Abre DevTools (`Ctrl+Shift+I` / `Cmd+Option+I`) y ve a la pestaña **Network**.  
2. En la **barra de herramientas** del panel Network, localiza el menú desplegable de **“No throttling”** o similar.  
3. Haz clic para ver las opciones de **Throttling** y **Offline**.

---

## 2. Presets de throttling

DevTools ofrece varios perfiles preconfigurados:

- **Fast 3G**: imita una red móvil rápida (≈ 1 – 1.5 Mbps down).  
- **Slow 3G**: imita una red móvil lenta (≈ 400 Kbps down).  
- **Offline**: simula la ausencia total de conexión para probar fallback.  

Selecciona uno para que todas las peticiones se vean retrasadas según el perfil.

---

## 3. Throttling personalizado

Si quieres definir tu propia velocidad de red:

1. Abre el **panel de ajustes** (⚙️) dentro de Network.  
2. Ve a **Network Throttling**.  
3. Haz clic en **Add…** y asigna:
   - **Download** (Kb/s)  
   - **Upload** (Kb/s)  
   - **Latency** (ms)  
4. Guarda el perfil y selecciónalo en el menú de throttling.

---

## 4. Modo Offline

Para probar tu sitio sin conexión:

1. Elige la opción **Offline** en el menú de throttling.  
2. Intenta recargar la página o navegar: verás errores de red que permiten comprobar cómo maneja tu app el fallback o cache.  

Esto es crucial para garantizar que **Service Workers** o **caché de aplicación** funcionen correctamente.

---

## 5. Ejemplo práctico

1. Abre Network y selecciona **Slow 3G**.  
2. Recarga la página—observa cómo tardan en descargarse los recursos y comprueba que tu “loading” se muestra correctamente.  
3. Cambia a **Offline** y recarga de nuevo—verifica que tu app muestra un mensaje de “sin conexión” o carga assets desde caché.

---

## 6. Consejos y buenas prácticas

- **Preserve log**: habilita esta opción para conservar el historial incluso en recargas con throttling.  
- **Disable cache**: desactívala si quieres probar realmente la caché en offline.  
- **Mix throttling**: combina latencia alta con bajos anchos de banda para simular redes rurales.  
- **Prueba en dispositivos reales**: si es posible, verifica tus simulaciones en móviles reales para comparar resultados.



