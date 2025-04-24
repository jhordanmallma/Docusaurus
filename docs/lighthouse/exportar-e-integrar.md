---
id: exportar-e-integrar
title: Exportar e Integrar Lighthouse
sidebar_position: 3
---


Lighthouse no solo ofrece auditorías interactivas en DevTools, sino que permite exportar los informes y automatizar su ejecución en pipelines de integración continua.

---

## ⚙️ Exportar un Informe desde DevTools

1. En la pestaña **Lighthouse** de DevTools, tras generar el reporte, haz clic en **Download report**.  
2. Elige **HTML** para un informe navegable o **JSON** para procesarlo con scripts.  
3. Guarda el archivo en tu proyecto o compártelo con tu equipo.

> El informe HTML incluye gráficas interactivas, oportunidades y diagnostics. El JSON es útil para integración automática.

---

## 📦 Uso de la CLI de Lighthouse

### Instalación

```bash
npm install -g lighthouse
# o con Yarn
yarn global add lighthouse
```
### Generar informe desde terminal

```bash
lighthouse https://tusitio.com \
  --output html \
  --output-path ./reports/lighthouse-report.html \
  --chrome-flags="--headless"
```
### Opciones:

- `--output`: formato (html o json).
- `--output-path`: ruta donde se guarda el informe.
- `--chrome-flags="--headless"`: ejecuta Chrome en modo headless (sin UI).

### 🤖 Integración en CI/CD  
Automatiza auditorías en tu repositorio usando **GitHub Actions**, **GitLab CI**, **CircleCI**, etc.  

**Ejemplo:** GitHub Actions (`.github/workflows/lighthouse.yml`)  
```yaml 
name: Lighthouse Audit

on:
  push:
    branches: [ main ]
  pull_request:

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm ci
      - name: Install Lighthouse
        run: npm install -g lighthouse
      - name: Run Lighthouse
        run: |
          lighthouse https://tusitio.com \
            --output json \
            --output-path ./reports/lh-report.json \
            --chrome-flags="--headless"
      - name: Upload Report Artifact
        uses: actions/upload-artifact@v3
        with:
          name: lighthouse-report
          path: reports/lh-report.json
```

💡 **Nota:**  
Ajusta la **URL** y **rutas** según tu proyecto. Luego, puedes descargar el informe desde la sección de **Artifacts** de GitHub.  

### Lighthouse CI  
Para integraciones avanzadas y seguimiento de métricas a lo largo del tiempo, usa **Lighthouse CI**:  

**Instala paquetes:**  

```bash
npm install -D @lhci/cli@0.10.x
```
**Configura .lighthouserc.js:**

```js
module.exports = {
  ci: {
    collect: { url: ['https://tusitio.com'] },
    assert: { assertions: { 'categories:performance': ['error', { minScore: 0.9 }] } },
    upload: { target: 'temporary-public-storage' }
  }
};
```

**Añade scripts al package.json:**

```json
{
  "scripts": {
    "lh:collect": "lhci collect",
    "lh:assert":  "lhci assert",
    "lh:publish": "lhci upload"
  }
}
```

**En tu CI, ejecuta:**

```bash
npm run lh:collect
npm run lh:assert
npm run lh:publish


```
Esto guarda los resultados en un almacenamiento público o configurado en tu servidor, y te alerta si la puntuación cae por debajo del umbral.



###  Compartir Resultados

**HTML**:  
- Sube a un servidor o comparte el archivo directamente.  

**JSON**:  
- Integra con dashboards (ej: [Lighthouse Viewer](https://googlechrome.github.io/lighthouse/viewer/)).  

**Lighthouse CI**:  
- Genera enlaces públicos y notificaciones automáticas en PRs.  

