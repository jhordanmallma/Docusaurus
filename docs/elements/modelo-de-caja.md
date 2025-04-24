---  
title: "Modelo de Caja (Box Model)"  
sidebar_position: 4  
---

El **Modelo de Caja** es un concepto fundamental en CSS que define cómo se calculan el tamaño y el espacio que ocupa un elemento en la página. Todo elemento HTML se representa como una **caja rectangular**, y entender esto es clave para controlar la disposición visual de tu sitio.

---

## Estructura del Modelo de Caja

Cada caja está compuesta por **cuatro partes** principales, de adentro hacia afuera:


```markdown
┌─────────────────────────────┐
│          margin             │  ← Margen exterior (transparente)
├──────────────────────┬──────┤
│       border         │      │  ← Grosor y color definible
│  ┌───────────────┐   │      │
│  │    padding    │   │      │  ← Espacio interno (color de fondo)
│  │  ┌─────────┐  │   │      │
│  │  │ contenido  │   │      │  ← Área del elemento (width/height)
│  │  └─────────┘  │   │      │
│  └───────────────┘   │      │
└──────────────────────┴──────┘
```


---

## Partes explicadas

### Contenido (`content`)
Es el área donde se muestra el contenido real, como texto o imágenes. Su tamaño se puede controlar con propiedades como `width` y `height`.

### Relleno (`padding`)
Es el espacio entre el contenido y el borde. Sirve para crear espacio interior alrededor del contenido.

```css
padding: 20px;
```
### Borde (`border`)
Es el límite que rodea el contenido y el padding. Puedes personalizar su color, grosor y estilo.

```css
border: 2px solid #000;
```
### Margen (`margin`)
Es el espacio exterior entre el borde del elemento y los elementos vecinos. Sirve para separar visualmente los elementos.
```css
margin: 10px;
```

## ¿Cómo se calcula el tamaño total?

**Fórmula del modelo de caja:**  
`Tamaño total = width + padding + border + margin`

### Ejemplo práctico:

```css
.box {
  width: 200px;        /* Ancho del contenido */
  padding: 10px;       /* Relleno interno */
  border: 2px solid black;  /* Borde */
  margin: 20px;        /* Margen exterior */
}
```
### Desglose del cálculo:


```markdown
| Concepto      | Valor      | Total      | Nota                      |
|-------------- |------------|------------|---------------------------|
| **Contenido** | `200px`    | `200px`    | Ancho del contenido       |
| **Padding**   | `10px × 2` | `20px`     | Ambos lados               |
| **Border**    | `2px × 2`  | `4px`      | Ambos lados               |
| **Margin**    | `20px × 2` | `40px`     | Ambos lados               |
| **Total**     |            | **264px**  | Ancho visible en pantalla |
```

## Tip: `box-sizing`

Por defecto (`content-box`), el padding y border se **suman** al width/height definido. Para cambiar este comportamiento:

```css
* {
  box-sizing: border-box; /* ¡La propiedad mágica! */
}
```
**Esto hace que:**  
- `width` = `contenido` + `padding` + `border`  
- Y facilita mucho el diseño.

## Visualízalo desde el panel de elementos

Cuando inspeccionas un elemento en el navegador, verás un diagrama como este:

```css
margin
border
padding
content
```
Puedes pasar el mouse sobre cada sección y el navegador te mostrará exactamente cuánto 
espacio está ocupando.

## Conclusión

El modelo de caja es la base del diseño web. Entender cómo interactúan `margin`, `padding`, `border` y `content` te permite construir layouts más limpios, organizados y responsivos.