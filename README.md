# Soletanche · Diagnóstico Sistémico de Liderazgo Adaptativo (Sesión 1)

Micrositio web interactivo y accesible diseñado para consultar, recorrer y comunicar los hallazgos del diagnóstico sistémico de la **Sesión 1: «Observar antes de interpretar e intervenir»**, desarrollado para los mandos medios de **Soletanche**.

---

## 🎯 Propósito del Proyecto

Presentar de manera clara, visualmente contrastada y libre de fatiga cognitiva los resultados de la jornada diagnóstica realizada el 14 de octubre de 2026 con 34 líderes de gerencia media (Producción, HSE, Gestión Humana y áreas técnicas).

El diseño está inspirado en la identidad visual y la estructura pedagógica de la presentación oficial **`3. Soletanche GM - S1 Observar.pptx`**, incorporando alternancia cromática entre secciones para facilitar lecturas prolongadas.

---

## 🎨 Características Visuales y de Experiencia de Usuario

1. **Ritmo Visual y Alto Contraste:**
   - **Hero:** Pizarra oscura editorial (`#151311`) con acentos azul Soletanche (`#4A93C6`) y arena cálida.
   - **Resumen Ejecutivo & Clave de Lectura:** Fondo papel marfil (`#FAF6F0`) con etiquetas de trazabilidad semántica (`[P]`, `[O]`, `[HU]`, `[E]`, `[HA]`).
   - **Matriz Prioritaria:** Blanco limpio con tarjetas interactivas de hallazgos, filtro por nivel de repetición (`Alta`, `Media-Alta`, `Media`) y búsqueda instantánea.
   - **Diagnóstico Temático (9 Ejes):** Pestañas interactivas laterales para profundizar en Cultura, Producción, Aprendizaje, Silos, Miedo, Subcontratistas y Factores Ocultos.
   - **Bucles Sistémicos (5 Circuitos):** Fondo azul arquitectónico profundo (`#0F253C`) con diagramas de flujo paso a paso y puntos de prueba verificables en terreno.
   - **Caja de Herramientas de Liderazgo:** Las metáforas clave de la presentación: *Subirse al balcón*, *Desafío técnico vs. adaptativo*, *Zona productiva de estrés* y *Seguridad psicológica*.
   - **Hoja de Ruta (Sesiones 2 a 4):** Cronograma de trabajo y salvaguardas éticas esenciales.
   - **Explorador de Trazabilidad:** Filtro interactivo de citas y registros originales.

2. **Accesibilidad y Confort de Lectura:**
   - Barra superior de progreso de lectura en tiempo real.
   - Selector de tamaño de fuente (`A-` / `A+`).
   - Modo oscuro / claro persistente en `localStorage`.
   - Estilos optimizados para impresión (`Ctrl + P`) y exportación a PDF ejecutivo.
   - Descarga directa del archivo Markdown original (`.md`).

---

## 📁 Estructura del Repositorio

```text
├── index.html          # Estructura semántica completa del micrositio
├── css/
│   ├── main.css        # Variables de diseño, reset y navegación
│   ├── components.css  # Tarjetas, bucles sistémicos, temas y badges
│   └── print.css       # Hoja de estilos para exportación ejecutiva a PDF
├── js/
│   └── app.js          # Lógica de filtros, pestañas, modo oscuro y progreso
├── assets/             # Recursos visuales e imágenes de la presentación
├── data/
│   └── diagnostico-sistemico-soletanche-sesion-1.md # Archivo fuente original
└── netlify.toml        # Configuración para despliegue estático en Netlify
```

---

## 🚀 Despliegue en Netlify

El sitio es 100% estático (cero dependencias de compilación en el servidor). Se despliega automáticamente conectando este repositorio a Netlify o mediante Netlify CLI / Netlify MCP.
