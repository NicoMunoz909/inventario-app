# 📦 App Inventario

Aplicación web desarrollada para la gestión de inventario de un negocio real. Pensada para usarse en un entorno de oficina con escáner de código de barras, incluye funcionalidades ajustadas a necesidades concretas del cliente, como la generación automática de remisiones al realizar salidas de stock.

---

## 🚀 Deploy

- 🔗 Frontend: [VERCEL](https://inventario-app-theta.vercel.app/)
- 🔗 Backend: [RENDER](https://id-automation-inventario.onrender.com)

> El backend puede demorar unos segundos en activarse por estar alojado en un servicio gratuito.

---

## 🔑 Acceso de prueba

Usá estas credenciales para acceder al panel:

- **Usuario:** `admin`
- **Contraseña:** `Admin1234!`

---

## 🧠 Funcionalidades principales

- Gestión de productos con escáner de código de barras.
- Entradas y salidas de stock.
- Generación automática de remisiones (PDF).
- Autenticación con token.
- Validaciones y manejo de errores robusto.

---

## 🛠️ Tecnologías

**Frontend:**

- React
- React Router
- Context API
- Vite

**Backend:**

- Node.js
- Express
- Sequelize (MySQL)
- JWT para autenticación

---

## ⚙️ Instalación local

### 1. Clonar el repositorio

```bash
git clone https://github.com/NicoMunoz909/inventario-app.git
cd inventario-app
```

### 2. Configurar variables de entorno

Crear el archivo `.env` dentro de la carpeta `server/`:

#### server/.env

```
PORT=3000
DB_NAME=tu_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
JWT_SECRET=una_clave_secreta
```

### 3. Instalar dependencias

```bash
cd client
npm install
cd ../server
npm install
```

### 4. Crear la base de datos

Asegurate de tener PostgreSQL corriendo, luego ejecutá:

```bash
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

> Esto también crea un usuario administrador con las credenciales de prueba.

### 5. Levantar el servidor y el cliente

En dos terminales distintas:

```bash
# En /server
npm run dev

# En /client
npm run dev
```

---

## 👨‍💻 Autor

- Nicolás Muñoz
- [LinkedIn](https://www.linkedin.com/in/nicolas-munoz-nmz/)
- [GitHub](https://github.com/NicoMunoz909)

---

## 📌 Notas

- Pensada específicamente para un entorno de oficina con escáner de código de barras.
- El diseño responsive no es prioritario, ya que está orientada a escritorio.
