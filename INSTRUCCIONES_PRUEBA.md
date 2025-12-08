# 📱 Guía para Probar la Aplicación Nexus

## ✅ Estado Actual

¡La aplicación está corriendo exitosamente en el puerto 8082!

## 🎯 Opciones para Probar

### Opción 1: Expo Go en tu Móvil (MÁS RÁPIDA ⚡)

#### Pasos:

1. **Descarga Expo Go en tu móvil:**
   - **Android**: https://play.google.com/store/apps/details?id=host.exp.exponent
   - **iOS**: https://apps.apple.com/app/expo-go/id982107779

2. **Asegúrate de estar en la misma red WiFi:**
   - Tu computadora y tu móvil deben estar conectados a la misma red WiFi

3. **Escanea el código QR:**
   - Mira la terminal donde está corriendo `npx expo start`
   - Verás un código QR grande
   - **En Android**: Abre Expo Go y toca "Scan QR Code"
   - **En iOS**: Abre la app Cámara y apunta al QR

4. **¡Listo!** La app se cargará en tu móvil

#### Solución de Problemas:

Si no puedes escanear el QR:
```bash
# En la terminal donde corre Expo, presiona:
s  # Esto te dará un enlace para compartir
```

---

### Opción 2: Emulador Android Studio

#### Requisitos Previos:

1. **Instalar Android Studio:**
   - Descarga desde: https://developer.android.com/studio
   - Durante la instalación, asegúrate de instalar:
     - Android SDK
     - Android Virtual Device (AVD)

2. **Configurar un Dispositivo Virtual:**
   - Abre Android Studio
   - Tools > Device Manager (o AVD Manager)
   - Click en "Create Virtual Device"
   - Selecciona un dispositivo (ej: Pixel 5)
   - Selecciona una imagen del sistema (ej: Android 13 - API 33)
   - Click "Finish"

#### Pasos para Ejecutar:

1. **Inicia el emulador:**
   - En Android Studio: Tools > Device Manager
   - Click en el botón ▶️ (Play) del dispositivo virtual

2. **Espera a que el emulador esté listo** (puede tardar 1-2 minutos la primera vez)

3. **En la terminal donde corre Expo, presiona:**
   ```
   a  # Esto abrirá la app automáticamente en el emulador
   ```

4. **La app se instalará y abrirá automáticamente**

---

### Opción 3: Navegador Web (Para pruebas rápidas)

```bash
# En la terminal donde corre Expo, presiona:
w  # Abre la app en el navegador web
```

**Nota**: Algunas funciones nativas (como haptics) no funcionarán en web.

---

## 🔍 Verificar que Funciona

### Deberías ver:

1. **Pantalla de Carga** con el texto "Cargando Nexus..."
2. **Landing Screen** con:
   - Header azul "Nexus"
   - Texto de bienvenida
   - 3 tarjetas (Librería, Co-Working, Cafetería)
   - Botones que responden con retroalimentación háptica

### Características Implementadas:

✅ **Navegación**:
   - Stack Navigator (principal)
   - Bottom Tabs Navigator (visible en la parte inferior)

✅ **Retroalimentación Háptica**:
   - Presiona cualquier botón de las tarjetas
   - Deberías sentir una vibración en dispositivos físicos

✅ **Fuentes Personalizadas**:
   - Poppins (títulos y textos principales)
   - Montserrat (textos secundarios)

✅ **Estilos con NativeWind**:
   - Todas las clases usan Tailwind CSS

---

## 🐛 Solución de Problemas Comunes

### "No puedo ver el código QR"
```bash
# En la terminal, presiona:
?  # Muestra todos los comandos disponibles
s  # Comparte el enlace de otra forma
```

### "La app no carga en mi móvil"
1. Verifica que estés en la misma red WiFi
2. Desactiva cualquier VPN
3. Reinicia Expo Go en el móvil
4. En la terminal, presiona `r` para recargar

### "Error al conectar con el emulador"
1. Asegúrate de que el emulador esté completamente iniciado
2. Reinicia Expo: `Ctrl+C` y luego `npx expo start`
3. Presiona `a` de nuevo

### "Las fuentes no se cargan"
- Es normal que tarde unos segundos la primera vez
- Si persiste, presiona `r` en la terminal para recargar

---

## 📊 Comandos Útiles en la Terminal de Expo

Mientras la app está corriendo, puedes presionar:

| Tecla | Acción |
|-------|--------|
| `a` | Abrir en Android |
| `w` | Abrir en navegador web |
| `r` | Recargar la app |
| `m` | Toggle menú de desarrollo |
| `j` | Abrir debugger |
| `?` | Mostrar todos los comandos |
| `Ctrl+C` | Detener el servidor |

---

## 📸 Capturas para el Video Memoria

### Secciones a Grabar:

1. **Navegación**:
   - Muestra el código de `AppNavigator.js`
   - Explica Stack Navigator y Tabs Navigator
   - Muestra las pestañas en la parte inferior

2. **Landing Screen**:
   - Muestra el código de `LandingScreen.js`
   - Explica la composición de componentes
   - Muestra SafeAreaView, ScrollView, View, Text

3. **Retroalimentación Háptica**:
   - Muestra el código de `HapticButton.js`
   - Demuestra presionando los botones
   - Explica los diferentes tipos de haptics

4. **Tour Virtual**:
   - Graba navegando por toda la app
   - Muestra la interacción con los botones
   - Demuestra que la navegación funciona

---

## 🎥 Grabación del Video

### Recomendaciones:

1. **Para grabar el emulador:**
   - Usa OBS Studio (gratis): https://obsproject.com/
   - O la grabación de pantalla de Windows (Win + G)

2. **Para grabar el móvil:**
   - Android: Usa la grabación de pantalla integrada
   - iOS: Control Center > Grabación de pantalla

3. **Duración**: Aproximadamente 3-4 minutos para tu parte

---

## 📁 Estructura del Proyecto Creado

```
Nexus-app-React-Native/
├── App.js                          # Punto de entrada ✅
├── babel.config.js                 # Configuración Babel + NativeWind ✅
├── tailwind.config.js              # Configuración Tailwind ✅
├── app.json                        # Configuración Expo ✅
├── package.json                    # Dependencias ✅
├── README.md                       # Documentación completa ✅
└── src/
    ├── components/
    │   └── HapticButton.js         # Botón con haptics ✅
    ├── constants/
    │   └── theme.js                # Tema de colores ✅
    ├── hooks/
    │   └── useApi.js               # Hook para API ✅
    ├── navigation/
    │   └── AppNavigator.js         # Stack + Tabs ✅
    ├── screens/
    │   └── LandingScreen.js        # Pantalla principal ✅
    └── services/
        └── api.js                  # Servicios de API ✅
```

---

## ✨ Próximos Pasos

Tu parte está **100% completada**. Tus compañeros pueden ahora:

1. **Persona 2**: Agregar vistas 1 y 2 en `src/screens/`
2. **Persona 3**: Agregar vistas 3, 4 y 5 en `src/screens/`
3. Ambos pueden usar:
   - `HapticButton` component
   - `useApi` hook
   - `theme.js` constants
   - `api.js` services

---

## 🆘 Necesitas Ayuda?

Si tienes algún problema:
1. Verifica que todas las dependencias estén instaladas: `npm install`
2. Limpia la caché: `npx expo start --clear`
3. Reinicia el servidor: `Ctrl+C` y `npx expo start`

¡Buena suerte con tu presentación! 🚀
