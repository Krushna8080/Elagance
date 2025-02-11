export const theme = {
  colors: {
    primary: '#1A1A1A',
    secondary: '#FFFFFF',
    accent: '#D4A373',
    background: '#FAFAFA',
    text: {
      primary: '#1A1A1A',
      secondary: '#4A4A4A',
      light: '#FFFFFF'
    }
  },
  typography: {
    heading: {
      h1: '3.5rem',
      h2: '2.5rem',
      h3: '2rem',
      h4: '1.5rem'
    },
    body: {
      regular: '1rem',
      small: '0.875rem'
    }
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem'
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px'
  }
}

export type Theme = typeof theme 