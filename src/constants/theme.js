// Colores del tema de la aplicación
export const COLORS = {
  primary: '#1E40AF', // Azul
  secondary: '#7C3AED', // Púrpura
  accent: '#F59E0B', // Ámbar
  background: '#FFFFFF',
  backgroundLight: '#F9FAFB',
  text: '#1F2937',
  textLight: '#6B7280',
  border: '#E5E7EB',
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
};

// Fuentes disponibles
export const FONTS = {
  regular: 'Poppins_400Regular',
  bold: 'Poppins_700Bold',
  montserrat: 'Montserrat_400Regular',
  montserratBold: 'Montserrat_700Bold',
};

// Tamaños de espaciado
export const SIZES = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  padding: 16,
  margin: 16,
  borderRadius: 12,
  borderRadiusSmall: 8,
  borderRadiusLarge: 16,
};

// Tamaños de fuente
export const FONT_SIZES = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

// Sombras
export const SHADOWS = {
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
    elevation: 4,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.84,
    elevation: 6,
  },
};

export default {
  COLORS,
  FONTS,
  SIZES,
  FONT_SIZES,
  SHADOWS,
};
