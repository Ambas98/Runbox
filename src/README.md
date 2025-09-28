# Runbox - Logística Chile

Página web corporativa para **Runbox**, empresa de logística y seguimiento con enfoque específico en Chile.

## 🌟 Características

- **Diseño minimalista y profesional** siguiendo las normas gráficas oficiales de Runbox
- **Paleta de colores corporativa**: Aguamarina (#56AA9F), Gris cálido (#9B8E8F), Rojo (#C20E1A), Amarillo (#EAB818)
- **5 páginas principales**: Inicio, Quiénes Somos, Cobertura/Tarifas, Seguimiento, Contacto
- **Mapa interactivo** limitado a Chile (Regiones Metropolitana, Valparaíso y Bio Bio)
- **Responsive design** optimizado para móvil y desktop
- **Animaciones suaves** en todas las secciones
- **Seguimiento en tiempo real** de envíos

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos para ejecutar

1. **Clonar o descargar** este proyecto
2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**:
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**: 
   El proyecto se abrirá automáticamente en `http://localhost:3000`

### Comandos disponibles

```bash
npm run dev      # Desarrollo (puerto 3000)
npm run build    # Compilar para producción
npm run preview  # Vista previa de la build
```

## 📁 Estructura del Proyecto

```
runbox-project/
├── src/
│   ├── App.tsx                 # Componente principal con navegación
│   ├── main.tsx               # Punto de entrada
│   ├── components/            # Componentes reutilizables
│   │   ├── Header.tsx         # Navegación principal
│   │   ├── Footer.tsx         # Pie de página
│   │   ├── ScrollToTop.tsx    # Botón scroll to top
│   │   └── ui/               # Componentes shadcn/ui
│   ├── pages/                # Páginas principales
│   │   ├── HomePage.tsx      # Página de inicio
│   │   ├── QuienesSomosPage.tsx  # Quiénes somos
│   │   ├── TarifaUnicaPage.tsx   # Cobertura y tarifas
│   │   ├── SeguimientoPage.tsx   # Seguimiento de envíos
│   │   └── ContactoPage.tsx      # Contacto
│   └── styles/
│       └── globals.css       # Estilos globales y variables CSS
├── package.json              # Dependencias y scripts
├── vite.config.ts           # Configuración de Vite
└── tailwind.config.js       # Configuración de Tailwind CSS
```

## 🎨 Paleta de Colores

- **Primario (Aguamarina)**: `#56AA9F`
- **Secundario (Gris cálido)**: `#9B8E8F`
- **Acento (Amarillo)**: `#EAB818`
- **Destructivo (Rojo)**: `#C20E1A`

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **TypeScript** - Tipado estático
- **Tailwind CSS v4** - Estilos
- **Vite** - Build tool
- **Lucide React** - Iconografía
- **Motion** - Animaciones
- **Recharts** - Gráficos y mapas
- **shadcn/ui** - Componentes UI

## 📞 Contacto Runbox

- **Slogan**: "EN TIEMPO Y FORMA"
- **Cobertura**: Regiones Metropolitana, Valparaíso y Bio Bio
- **Especialidad**: Logística de última milla en Chile

---

**Desarrollado siguiendo las normas gráficas oficiales de Runbox**