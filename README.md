# 📱 Nexus App - React Native

> Aplicación móvil multiplataforma para librería universitaria y espacio multifuncional que combina venta de libros, zona de co-working y cafetería.

## 📋 Descripción del Proyecto

Este proyecto es parte de la **Actividad 3** de la asignatura **Aplicaciones Móviles Multiplataforma** del Máster en Desarrollo de Aplicaciones y forma parte del proyecto transversal **Nexus**.

### 🎯 Objetivos

- Desarrollar una aplicación móvil multiplataforma con React Native
- Implementar navegación Stack y Tabs
- Integrar estilos con NativeWind (Tailwind CSS)
- Añadir retroalimentación háptica
- Conectar con API simulada
- Demostrar funcionamiento en dispositivos virtuales

## ✨ Características Implementadas

### ✅ Navegación (Criterio 3 - 20%)
- **Stack Navigator**: Navegación principal entre pantallas
- **Bottom Tabs Navigator**: Navegación inferior con iconos personalizados
- Configuración completa de rutas y navegabilidad

### ✅ Estilizado con NativeWind (Criterio 4 - 20%)
- **NativeWind v4**: Tailwind CSS para React Native
- **Fuentes personalizadas**:
  - Poppins (Regular y Bold)
  - Montserrat (Regular y Bold)
- Diseño responsive y coherente

### ✅ Vista Landing (Criterio 1 - 5%)
- Header con branding
- Cards de navegación interactivas:
  - 📚 Librería
  - 💼 Co-Working
  - ☕ Cafetería
- Footer con información de horarios

### ✅ Retroalimentación Háptica (Criterio 5 - 10%)
- Implementada en todos los botones principales
- Tres niveles de intensidad: light, medium, heavy
- Componente reutilizable `HapticButton`

### ✅ Infraestructura API (Criterio 6 - 10%)
- Servicios preparados para consumir API simulada
- Hook personalizado `useApi` para llamadas a la API
- Estructura escalable para futuras integraciones

## 🚀 Tecnologías Utilizadas

| Tecnología | Versión |
|------------|---------|
| React Native | 0.74.5 |
| Expo SDK | ~51.0.0 |
| React | 18.2.0 |
| React Navigation | ^6.1.18 |
| NativeWind | ^4.0.1 |
| Expo Haptics | ~13.0.0 |
| Expo Font | ~12.0.0 |
| Tailwind CSS | ^3.3.2 |

## 📦 Instalación

### Prerrequisitos

- **Node.js** v18 o superior
- **npm** o **yarn**
- **Expo Go** en tu móvil (para testing)
- **Android Studio** (opcional, para emulador Android)
- **Xcode** (opcional, para simulador iOS - solo macOS)

### Pasos de instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/TU_USUARIO/Nexus-app-React-Native.git

# 2. Navegar al directorio
cd Nexus-app-React-Native

# 3. Instalar dependencias
npm install --legacy-peer-deps

# 4. Iniciar la aplicación
npx expo start
```

## 📱 Ejecutar la Aplicación

### Opción 1: En tu móvil con Expo Go ⭐ (Recomendado)

1. **Descarga Expo Go**:
   - [📱 Android - Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - [🍎 iOS - App Store](https://apps.apple.com/app/expo-go/id982107779)

2. **Ejecuta el proyecto**:
   ```bash
   npx expo start
   ```

3. **Escanea el código QR**:
   - Android: Abre Expo Go y escanea el QR desde la app
   - iOS: Abre la cámara nativa y escanea el QR

### Opción 2: Emulador Android

```bash
# 1. Inicia Android Studio
# 2. Abre un dispositivo virtual (AVD Manager)
# 3. Ejecuta:
npx expo start --android
# O presiona 'a' en la terminal de Expo
```

### Opción 3: Simulador iOS (solo macOS)

```bash
npx expo start --ios
# O presiona 'i' en la terminal de Expo
```

## 📁 Estructura del Proyecto

```
Nexus-app-React-Native/
│
├── 📄 App.js                       # 🚀 Punto de entrada principal
├── 🎨 global.css                   # 🎨 Estilos globales NativeWind
├── ⚙️ babel.config.js              # ⚙️ Configuración Babel
├── 🎨 tailwind.config.js           # 🎨 Configuración Tailwind
├── 📦 metro.config.js              # 📦 Configuración Metro bundler
├── 📋 package.json                 # 📋 Dependencias del proyecto
├── 🚫 .gitignore                   # 🚫 Archivos ignorados por Git
├── 📖 README.md                    # 📖 Documentación
│
└── 📂 src/
    ├── 📂 navigation/
    │   └── AppNavigator.js         # 🧭 Navegación Stack + Tabs
    │
    ├── 📂 screens/
    │   └── LandingScreen.js        # 🏠 Pantalla principal (Landing)
    │
    ├── 📂 components/
    │   └── HapticButton.js         # 📳 Botón con feedback háptico
    │
    ├── 📂 services/
    │   └── api.js                  # 🌐 Servicios para API simulada
    │
    ├── 📂 hooks/
    │   └── useApi.js               # 🪝 Hook personalizado para API
    │
    └── 📂 constants/
        └── theme.js                # 🎨 Constantes de tema y colores
```

## 🎨 Componentes Principales

### 1. 🏠 Landing Screen
- Header personalizado con branding **Nexus**
- Cards interactivas con iconos y colores diferenciados
- Retroalimentación háptica al presionar botones
- Scroll suave y diseño responsive
- Footer con información de horarios
- Implementa `SafeAreaView` y `ScrollView`

### 2. 🧭 App Navigator
- **Stack Navigator**: Navegación principal con transiciones
- **Bottom Tabs**: Navegación inferior con 4 pestañas
- Iconos personalizados usando `@expo/vector-icons` (Ionicons)
- Colores personalizados según el tema de la app
- Configuración de headers y estilos globales

### 3. 📳 Haptic Button
- Componente reutilizable para botones con vibración
- Tres niveles de intensidad háptica (light, medium, heavy)
- Personalizable mediante props (className, textClassName)
- Integrado con `expo-haptics`
- Efecto visual al presionar (`active:opacity-70`)

## 👥 Equipo de Desarrollo

### 👤 Persona 1: Infraestructura, Base, Navegación y Haptics

**Responsabilidades completadas:**

✅ **Configuración y Estilizado:**
- Configuración del proyecto (Expo SDK 51 + React Native 0.74.5)
- Instalación y configuración de React Navigation
- Instalación y configuración de NativeWind v4
- Implementación de 2 fuentes personalizadas (Poppins + Montserrat)

✅ **Navegación:**
- Implementación de Stack Navigator
- Implementación de Bottom Tabs Navigator
- Configuración de rutas y navegabilidad

✅ **Vista y Funcionalidad:**
- Desarrollo completo de Landing Screen
- Implementación de retroalimentación háptica estratégica
- Testing en dispositivo virtual Android/iOS

✅ **Documentación:**
- README.md completo
- .gitignore configurado
- Código documentado y comentado

## 📊 Cumplimiento de Rúbrica

| Criterio | Peso | Estado | Descripción |
|----------|:----:|:------:|-------------|
| **Criterio 1** - Landing | 5% | ✅ | Vista landing implementada completamente |
| **Criterio 2** - 5 Vistas | 25% | 🔄 | Landing completa + 4 vistas pendientes (20% completado) |
| **Criterio 3** - Navegación | 20% | ✅ | Stack + Tabs Navigator implementados |
| **Criterio 4** - NativeWind | 20% | ✅ | NativeWind v4 + Poppins + Montserrat |
| **Criterio 5** - Haptics | 10% | ✅ | Feedback háptico en botones principales |
| **Criterio 6** - API | 10% | ✅ | Infraestructura lista (servicios + hooks) |
| **Criterio 7** - Video | 10% | 🔄 | Pendiente de grabación |
| **TOTAL** | **100%** | **70%** | **Persona 1 completó su parte al 100%** |

**Estado del Proyecto:** 🟢 Infraestructura completa y funcional

## 🔧 Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
npm start

# Abrir en Android (emulador o dispositivo)
npm run android

# Abrir en iOS - solo macOS (simulador)
npm run ios

# Abrir en navegador web
npm run web

# Limpiar caché de Metro Bundler
npx expo start -c

# Limpiar todo y reinstalar
npm run clean
```

## 🐛 Solución de Problemas

### ❌ Error: "Cannot find module" o dependencias rotas

```bash
# Eliminar node_modules y reinstalar
rmdir /s /q node_modules
del package-lock.json
npm install --legacy-peer-deps
```

### ❌ Error: "Metro bundler crashed"

```bash
# Limpiar caché de Expo y Metro
npx expo start -c
```

### ❌ Las fuentes no cargan correctamente

```bash
# Reinstalar fuentes
npx expo install expo-font @expo-google-fonts/poppins @expo-google-fonts/montserrat

# Verificar que App.js cargue las fuentes correctamente
# El componente debe mostrar "Cargando fuentes..." antes de mostrar la app
```

### ❌ NativeWind no aplica estilos (className no funciona)

```bash
# 1. Verifica que global.css esté importado en App.js
# 2. Verifica que metro.config.js exista y esté configurado
# 3. Verifica que babel.config.js tenga la configuración correcta
# 4. Reinicia con caché limpia:
npx expo start -c
```

### ❌ Error: "The development server returned response error code 500"

```bash
# Este error suele ser por babel.config.js mal configurado
# Verifica que babel.config.js tenga exactamente esta estructura:

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }]
    ],
    plugins: [
      "react-native-reanimated/plugin"
    ],
  };
};
```

### ❌ No aparece el código QR para Expo Go

```bash
# Presiona 'r' para recargar
# O ejecuta: npx expo start --tunnel
```

## 📝 Notas de Desarrollo

### 🎯 Decisiones Técnicas

1. **NativeWind v4**: Elegida por su compatibilidad nativa con Expo 51 y mejor rendimiento
2. **Stack + Tabs**: Combinación óptima para navegación jerárquica y acceso rápido
3. **Haptics Medium**: Nivel de vibración equilibrado, no intrusivo pero perceptible
4. **Poppins + Montserrat**: Fuentes modernas, legibles y profesionales
5. **SafeAreaView**: Garantiza compatibilidad con notch y áreas seguras en todos los dispositivos

### 🔄 Próximos Pasos (para compañeros)

**Persona 2: Vistas Intermedias y Lógica de API**
- [ ] Vista 1: Catálogo de Libros (con consumo de API)
- [ ] Vista 2: Detalle de Libro (con consumo de API)
- [ ] Integración de hooks `useApi` con datos reales

**Persona 3: Vistas Finales y Documentación**
- [ ] Vista 3: Espacios Co-Working
- [ ] Vista 4: Reserva de Espacios
- [ ] Vista 5: Menú Cafetería
- [ ] Video memoria final (navegación + tour virtual + conclusiones)

### 📌 Recomendaciones para el Equipo

- Reutilizar el componente `HapticButton` en todas las vistas
- Usar el hook `useApi` para todas las llamadas a la API
- Mantener la paleta de colores definida en `tailwind.config.js`
- Seguir la estructura de carpetas establecida
- Documentar cada vista nueva en el README

## 📚 Recursos Adicionales

- 📖 [Documentación oficial de Expo](https://docs.expo.dev/)
- 🧭 [React Navigation - Guía completa](https://reactnavigation.org/docs/getting-started)
- 🎨 [NativeWind - Documentación](https://www.nativewind.dev/)
- 📳 [Expo Haptics - API Reference](https://docs.expo.dev/versions/latest/sdk/haptics/)
- 🔤 [Google Fonts - Expo](https://github.com/expo/google-fonts)
- 🎓 [React Native - Tutorial oficial](https://reactnative.dev/docs/tutorial)

## 📄 Licencia

Este proyecto es parte del **Máster en Desarrollo de Aplicaciones Móviles Multiplataforma - UNIR**

**Actividad 3**: Desarrollo de una aplicación móvil multiplataforma

📅 **Fecha de entrega**: Diciembre 2024

## 🙏 Agradecimientos

- 👨‍🏫 Profesores de UNIR por su guía y material de apoyo
- 💻 Comunidad de React Native y Expo por la documentación
- 🎨 Expo team por las herramientas de desarrollo
- 📚 Compañeros de equipo por la colaboración

---

<div align="center">

**Desarrollado con ❤️ usando React Native y Expo**

[![React Native](https://img.shields.io/badge/React_Native-0.74.5-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-51.0.0-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.0.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://www.nativewind.dev/)

*Última actualización: Diciembre 2025*

</div>
