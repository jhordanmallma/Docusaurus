---
title: "Filtros y Búsqueda de Mensajes (Filtering & Searching Logs)"
description: "Cómo filtrar, buscar y navegar entre mensajes en la Consola de DevTools"
sidebar_position: 4
---

# Filtros y Búsqueda de Mensajes (Filtering & Searching Logs)

Cuando trabajas con muchas entradas en la **Consola**, es esencial poder **filtrar** el tipo de mensajes que quieres ver y **buscar** texto específico para encontrar rápidamente la información relevante.

---

## ¿Por qué filtrar y buscar?

- **Encontrar errores** sin que se pierdan en montones de `console.log`.  
- **Localizar avisos** de advertencia o deprecaciones.  
- **Revisar resultados** de tests o ciclos de depuración específicos.  
- **Mantener la legibilidad** cuando hay mensajes masivos.

---

## 1. Barra de filtros por nivel

Justo encima del área de mensajes, encontrarás botones para cada nivel de log:

| Nivel     | Icono  | Atajo             |
|-----------|--------|-------------------|
| **All**   | ●      | —                 |
| **Errors**| ⛔     | Alt + 1 (Win/Linux) / Option + 1 (Mac) |
| **Warnings** | ⚠️ | Alt + 2 / Option + 2 |
| **Info**  | ℹ️     | Alt + 3 / Option + 3 |
| **Verbose**| 💬    | Alt + 4 / Option + 4 |

- Haz clic en un nivel para **ocultar** o **mostrar** solo esos mensajes.  
- Combina varios niveles para ajustar la vista.

---

## 2. Búsqueda de texto

Pulsa <kbd>Ctrl</kbd> + <kbd>F</kbd> (Windows/Linux) o <kbd>Cmd</kbd> + <kbd>F</kbd> (Mac) para abrir el cuadro de búsqueda:

1. Escribe el texto o patrón que quieras localizar.  
2. Presiona Enter para moverte al siguiente resultado.  
3. Usa las flechas en el cuadro de búsqueda para **navegar** entre coincidencias.

---

## 3. Expresiones regulares

- Marca la casilla **.* (RegExp)** en el cuadro de búsqueda.  
- Escribe tu patrón, por ejemplo: `userId:\s*\d+` para encontrar “userId: 123”.  
- Permite búsquedas avanzadas y refinadas.

---

## 4. Otras opciones de filtrado

- **Hide network**: Oculta mensajes automáticos de la pestaña Network.  
- **Hide messages**: Oculta mensajes generados automáticamente (como de extensiones).  
- **Group similar**: Agrupa entradas repetidas y muestra un contador.

---

## 5. Ejemplo práctico

1. Abre la consola en `tu-aplicación.js`.  
2. Ejecuta un bucle que imprima `console.log("userId:", i)` varias veces.  
3. Filtra por “Errors” para ocultar estos logs.  
4. Busca con <kbd>Ctrl</kbd>+<kbd>F</kbd> la palabra `userId:` para comprobar los valores.  
5. Activa RegExp con el patrón `userId:\s*[5-9]\d` para encontrar solo IDs entre 50 y 99.

---

## 6. Atajos útiles

- **Abrir búsqueda**: <kbd>Ctrl</kbd> + <kbd>F</kbd> / <kbd>Cmd</kbd> + <kbd>F</kbd>  
- **Limpiar búsqueda**: <kbd>Esc</kbd>  
- **Alternar nivel de log**: Alt + n (1–4) / Option + n (Mac)  

---

## Buenas prácticas

- Filtra siempre por **Errors** al depurar fallos críticos.  
- Usa RegExp para encontrar patrones complejos.  
- Limpia filtros y búsqueda antes de ejecutar nuevos tests.

---
















