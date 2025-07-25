# 📦 App Inventario

Aplicación web desarrollada para la gestión de inventario de un negocio real. Pensada para usarse en un entorno de oficina con escáner de código de barras, incluye funcionalidades ajustadas a necesidades concretas del cliente, como la generación automática de remisiones al realizar salidas de stock.

---
## 🎥 Demos en video

- 🔐 [Login, navegación y filtros de inventario](https://www.loom.com/share/2faa0e4ed8af493a8280158ec3e73442?sid=00f07f6a-ce94-4655-a986-fd0f0eff2007)
- ➕ [Entrada de productos](https://www.loom.com/share/25bd173b7b4e4699906ede4c0c90a4d4?sid=63e9b95c-16ec-4421-83d0-641f75b1f0cc)
- ➖ [Salida de productos](https://www.loom.com/share/637e9e66b9eb4f9191d12a7ab610c9a1?sid=f88c7a61-6ac9-468c-92fc-767f6767c460)
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
- Filtros avanzados en inventario por:
  - Part Number, Descripción, Serial Number, Proveedor, Orden de Compra, Factura de Compra, Fecha de Entrada, Almacén, Sector, Factura de Venta, Cliente, Fecha de Salida.
- Generación automática de remisiones en PDF al hacer una salida.
- Interfaz optimizada para uso con escáneres manuales de códigos de barras.
  
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

Asegurate de tener MySQL corriendo, luego ejecutá:

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
