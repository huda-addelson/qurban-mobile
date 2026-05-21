// src/design/tokens.ts - Jejak Daging Design Tokens
export const tokens = {
  color: {
    emerald: { 
      900: '#053f2a', 
      800: '#0a5538', 
      700: '#0e6e4f', 
      600: '#128861', 
      500: '#1ca576', 
      100: '#d6efe2', 
      50: '#ebf7f0' 
    },
    forest: { 
      800: '#1f5a26', 
      700: '#2d6e34', 
      600: '#347a3b', 
      500: '#4a9252', 
      100: '#d8ebd6' 
    },
    leaf: { 
      800: '#2e7a26', 
      700: '#3d9a35', 
      600: '#4fb048', 
      500: '#6cc163', 
      100: '#dff2da' 
    },
    sand: { 
      300: '#d9c69e', 
      200: '#e8dcc4', 
      100: '#f1e8d4' 
    },
    gold: { 
      700: '#a07c2a', 
      600: '#c9a24a', 
      500: '#dbb764', 
      100: '#f5e8c3' 
    },
    ink: { 
      900: '#1a1d18', 
      700: '#43463e', 
      500: '#82857b', 
      300: '#c3c4bb', 
      200: '#e0dfd5', 
      100: '#efeee4' 
    },
    offWhite: '#faf7f0',
    offWhiteAlt: '#f5f0e3',
    surface: '#ffffff',
    semantic: { 
      success: '#10b981', 
      warning: '#dbb764', 
      error: '#ef4444', 
      info: '#3b82f6' 
    },
  },
  font: {
    sans: '"Plus Jakarta Sans", system-ui, sans-serif',
    serif: '"Cormorant Garamond", "Times New Roman", serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
    arabic: '"Amiri", serif',
  },
  radius: { 
    sm: 8, 
    md: 12, 
    lg: 16, 
    xl: 20, 
    '2xl': 24, 
    '3xl': 28, 
    full: 9999 
  },
  space: { 
    0: 0, 
    1: 4, 
    2: 8, 
    3: 12, 
    4: 16, 
    5: 20, 
    6: 24, 
    8: 32, 
    10: 40, 
    12: 48 
  },
  shadow: {
    sm: '0 1px 2px rgba(20,25,18,0.04)',
    md: '0 4px 14px rgba(20,25,18,0.06)',
    lg: '0 12px 32px rgba(20,25,18,0.10)',
    brand: '0 16px 40px rgba(14,110,79,0.28)',
  },
  motion: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    arrival: 'cubic-bezier(0.22, 1, 0.36, 1)',
    duration: { micro: 150, default: 250, page: 380 },
  },
} as const

export type Token = typeof tokens

// Typography styles
export const type = {
  displayLg: { fontSize: 40, lineHeight: 1.1, fontWeight: 800, letterSpacing: -1.0 },
  displayMd: { fontSize: 28, lineHeight: 1.15, fontWeight: 800, letterSpacing: -0.6 },
  headingLg: { fontSize: 22, lineHeight: 1.27, fontWeight: 700 },
  headingMd: { fontSize: 18, lineHeight: 1.33, fontWeight: 600 },
  headingSm: { fontSize: 16, lineHeight: 1.37, fontWeight: 600 },
  bodyLg: { fontSize: 16, lineHeight: 1.50, fontWeight: 400 },
  bodyMd: { fontSize: 14, lineHeight: 1.43, fontWeight: 400 },
  bodySm: { fontSize: 13, lineHeight: 1.38, fontWeight: 400 },
  label: { fontSize: 14, lineHeight: 1.43, fontWeight: 700, letterSpacing: 0.2 },
  caption: { fontSize: 11, lineHeight: 1.45, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase' as const },
  mono: { fontSize: 14, lineHeight: 1.43, fontWeight: 600, fontFamily: tokens.font.mono },
  editorial: { fontFamily: tokens.font.serif, fontStyle: 'italic' as const, fontWeight: 600 },
}

export type Typography = typeof type
