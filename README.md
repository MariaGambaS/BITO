# BITO Website 🥂

Landing page + formulario de cotización para BITO — barra móvil premium.

---

## ⚡ Antes de subir a GitHub

Abre `src/App.jsx` y busca esta línea cerca del inicio:

```js
const WHATSAPP_NUMBER = "5210000000000"; // 👈 CAMBIA por tu número
```

Cámbiala por el número real de BITO. Ejemplo:
```js
const WHATSAPP_NUMBER = "5214771234567";
```

El número debe tener:
- Código de país (52 para México)
- Sin espacios, guiones ni paréntesis
- Sin el + inicial

---

## 🚀 Deploy en Vercel (5 pasos)

1. Sube esta carpeta a un repo en GitHub (puede ser privado)
2. Entra a [vercel.com](https://vercel.com) → Log in con GitHub
3. Click en **"Add New Project"** → importa el repo
4. Vercel detecta Vite automáticamente → click **Deploy**
5. ¡Listo! Vercel te da una URL tipo `bito-website.vercel.app`

### Dominio personalizado (opcional pero recomendado)
- Compra `bitonthego.mx` o `bitonthego.com` (~$200–400 MXN/año)
- En Vercel → Settings → Domains → agrega el dominio
- Sigue las instrucciones de DNS (15 min)

---

## 🛠 Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

---

## 📦 Build para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para deploy.

---

## 🎨 Para editar contenido

Todo el contenido está en `src/App.jsx`:
- **Menú y precios** → busca `menuData`
- **Paquetes** → busca `pkgs`
- **Lista de experiencia** → busca `expItems`
- **Colores** → línea 3: `N`, `CR`, `G`, `CB`, `GL`
