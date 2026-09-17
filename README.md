# Curso Introductorio de Inteligencia Artificial — sitio de capacitación

Sitio estático (HTML + CSS + JS, sin dependencias de build) con el microcurso completo
y evaluaciones de opción múltiple y verdadero/falso por módulo. El progreso de cada
persona se guarda en su propio navegador (localStorage), no se comparte entre usuarios.

## Archivos

- `index.html` — estructura de la página.
- `styles.css` — estilos.
- `app.js` — navegación, render de módulos y lógica de las evaluaciones.
- `content.js` — todo el contenido del curso y las preguntas de cada quiz (para editar
  el contenido, este es el único archivo que necesitás tocar).

## Cómo publicarlo en GitHub Pages

1. Creá un repositorio nuevo en GitHub (puede ser público o privado, si tus compañeros
   tienen acceso al repo).
2. Subí estos 4 archivos a la raíz del repositorio (o a una carpeta `docs/`, ver más abajo).
3. En el repositorio, andá a **Settings → Pages**.
4. En "Build and deployment", elegí **Deploy from a branch**.
5. Elegí la rama (por ejemplo `main`) y la carpeta (`/root` o `/docs`, según dónde
   hayas subido los archivos).
6. Guardá. GitHub va a darte una URL del estilo:
   `https://tu-usuario.github.io/nombre-del-repo/`
7. Compartí esa URL con tus compañeros.

### Opción rápida por línea de comandos

```bash
mkdir curso-ia && cd curso-ia
# copiá acá los 4 archivos (index.html, styles.css, app.js, content.js)
git init
git add .
git commit -m "Curso introductorio de IA"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/curso-ia.git
git push -u origin main
```

Después activá GitHub Pages como se explica arriba.

## Editar el contenido

Todo el texto de los módulos y las preguntas de las evaluaciones está en `content.js`,
dentro del objeto `COURSE`. Cada módulo tiene:

- `secciones`: los bloques de contenido (concepto, ejemplos, tabla de diferencias, etc.).
- `ideas`: las ideas clave del módulo.
- `quiz.mc`: preguntas de opción múltiple (`opciones` + índice de la `correcta`).
- `quiz.vf`: preguntas de verdadero/falso (`correcta` es `true` o `false`).

No hace falta tocar `app.js` para agregar o modificar preguntas: solo editá los arrays
`mc` y `vf` de cada módulo en `content.js`.

## Notas

- El sitio no requiere backend ni build: funciona abriendo `index.html` directamente
  o sirviéndolo desde GitHub Pages.
- Las fuentes (Fraunces, Inter, IBM Plex Mono) se cargan desde Google Fonts vía CDN;
  si tu red bloquea ese dominio, el sitio sigue funcionando con las fuentes del sistema.
- El progreso ("módulo aprobado") se guarda en `localStorage` del navegador de cada
  persona. Si alguien borra los datos del sitio o cambia de navegador, el progreso
  se reinicia.
