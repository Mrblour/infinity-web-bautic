<p align="center">
  <img src="assets/img/infinity.png" alt="Infinity Studios Logo" width="120" />
</p>

# Infinity Studios

<p align="center">
  <strong>Sitio Web Oficial & Plataforma Web Interactiva de Infinity Studios</strong>
  <br/>
  Construido con el micro-framework <strong>Flutcom SPA</strong> para una experiencia ultrarrápida, fluida y sin recargas de página.
  <br/><br/>
</p>

<div align="center">

[![Infinity Studios](https://img.shields.io/badge/Studio-Infinity%20Studios-89F336.svg)](#)
[![Built with Flutcom](https://img.shields.io/badge/Framework-Flutcom%20v1.0-blue.svg)](https://github.com/Mrblour/Flutcom)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%20v4-38bdf8.svg)](#)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 🚀 Sobre el Proyecto

Este repositorio contiene la plataforma web de **Infinity Studios**, diseñada para dar a conocer nuestros proyectos, eventos de contenido (como *Hunt and Run*, *Squid Craft Games*), novedades y enlaces a la comunidad.

La aplicación está desarrollada utilizando **Flutcom**, un micro-framework SPA (Single Page Application) moderno y ligero basado en JavaScript vainilla. Esto garantiza una velocidad de carga máxima, cero consumo innecesario de recursos y transiciones instantáneas.

---

## ✨ Características Principales

- **Navegación SPA Instantánea**: Sistema de ruteo por hash administrado por el motor `Flutcom` sin recargas de navegador.
- **Diseño Premium & Modo Oscuro**: Estética moderna con efectos glassmorphism, microanimaciones y tipografía cuidada.
- **Micro-Framework Flutcom**: Configuración centralizada de rutas, componentes y plugins desde `flutcom.config.js`.
- **Integración con Tailwind CSS v4**: Compilación optimizada en tiempo real para estilos altamente personalizables.
- **Sistema Modular de Componentes y Modales**: Vistas divididas en parciales (Navbar, Footer), componentes (Roadmap, Creadores, Features) y modales de interacción (Comunidad Discord).

---

## 📁 Estructura del Proyecto

```text
infinity/
├── assets/                    # Archivos estáticos
│   ├── css/                   # Estilos CSS personalizados (style.css, flutcom.css)
│   ├── img/                   # Assets gráficos, imágenes de eventos y logos
│   └── vendor/tailwind/       # CSS procesado por Tailwind v4
├── flutcom/                   # Motor core del framework Flutcom (Routing & Lifecycle)
├── plugins/                   # Plugins interactivos (Modales, Menú Móvil, Carrusel, etc.)
├── resources/                 # Vistas y componentes HTML
│   ├── components/            # Componentes reutilizables (Roadmap, Creadores, etc.)
│   ├── partials/              # Cabecera (Header) y Pie de página (Footer)
│   └── views/                 # Páginas de la aplicación (Home, Proyectos, Nosotros, etc.)
├── run/                       # Entorno de desarrollo local (run/dev.js)
├── src/                       # Archivos de entrada para Tailwind CSS (input.css)
├── flutcom.config.js          # Configuración principal de rutas, metadatos y plugins
├── index.html                 # Punto de entrada HTML principal (App Shell)
└── package.json               # Dependencias del proyecto y scripts de desarrollo
```

---

## 🛠️ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (Versión 18 o superior recomendada): [Descargar Node.js](https://nodejs.org)

Puedes verificar si Node.js está instalado ejecutando:
```bash
node -v
npm -v
```

---

## 💻 Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/TU_USUARIO/infinity.git
   cd infinity
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   *Este comando iniciará el servidor local en `http://localhost:3000` y compilará Tailwind CSS automáticamente en modo watch.*

---

## 🛠️ Comandos Disponibles

| Comando | Descripción |
| ------- | ----------- |
| `npm run dev` | Inicia el servidor de desarrollo y el compilador de Tailwind CSS en paralelo. |
| `npm run serve` | Sirve la carpeta raíz de forma estática en el puerto 3000. |
| `npm run watch:css` | Compila Tailwind CSS de forma independiente en modo watch. |

---

## ⚡ Enrutamiento y Configuración

Toda la estructura de la aplicación se gestiona desde `flutcom.config.js`:

```javascript
export const site = {
  nombre: "Infinity Studios",
  autor: "Infinity Studios",
  version: "1.0.0",
};

export const routes = {
  home: "resources/views/public/home.html",
  proyectos: "resources/views/public/proyectos.html",
  nosotros: "resources/views/public/nosotros.html",
  contacto: "resources/views/public/contacto.html",
  games: "resources/views/public/games.html",
  "hunt-and-run": "resources/views/public/eventos/hunt-and-run.html",
};
```

---

## 📄 Licencia y Créditos

- **Proyecto**: © **Infinity Studios** — Todos los derechos reservados.
- **Framework**: Creado utilizando el motor **Flutcom SPA Micro-Framework**.
