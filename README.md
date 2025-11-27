# Portfolio Daniel Oyola Moreno

Portfolio profesional desarrollado con Astro, Tailwind CSS y TypeScript.

## 🚀 Características

- ✅ Multiidioma (Español/Inglés)
- ✅ Diseño responsive
- ✅ Animaciones suaves con AOS
- ✅ SEO optimizado
- ✅ Rendimiento optimizado
- ✅ GitHub Pages ready

## 📦 Instalación

```bash
npm install
```

## 🧞 Comandos

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🚀 Deployment a GitHub Pages

### IMPORTANTE: Nombre del repositorio

Para que funcione en `https://danieloyolamoreno.github.io`, el repositorio **DEBE** llamarse exactamente:

```
danieloyolamoreno.github.io
```

### Pasos de configuración:

1. **Crea el repositorio con el nombre exacto:** `danieloyolamoreno.github.io`

2. **Configura GitHub Pages:**
   - Ve a Settings > Pages
   - En "Build and deployment", selecciona "GitHub Actions"

3. **Sube el código:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/danieloyolamoreno/danieloyolamoreno.github.io.git
git push -u origin main
```

4. **Espera el deployment** - GitHub Actions construirá y desplegará automáticamente

5. **Tu sitio estará en:** `https://danieloyolamoreno.github.io`

## 🌐 Estructura

```
/
├── public/
│   ├── projects/        # Imágenes de proyectos
│   └── profile.png      # Foto de perfil
├── src/
│   ├── components/      # Componentes Astro
│   ├── i18n/           # Traducciones
│   ├── layouts/        # Layouts
│   ├── pages/          # Páginas
│   │   ├── index.astro # Página principal (ES)
│   │   └── en/
│   │       └── index.astro # Página en inglés
│   └── styles/         # Estilos globales
└── package.json
```

## 🔧 Tecnologías

- Astro 5
- Tailwind CSS 3
- TypeScript
- AOS (Animate On Scroll)

## 📝 Notas

- El idioma por defecto es español
- Detección automática del idioma del navegador
- Cambio manual de idioma disponible en el header
