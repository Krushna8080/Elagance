export interface Theme {
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
    textLight: string
    white: string
  }
  typography: {
    heading: {
      h1: string
      h2: string
      h3: string
      h4: string
    }
    body: {
      regular: string
      small: string
    }
  }
  spacing: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  }
  breakpoints: {
    mobile: string
    tablet: string
    desktop: string
    wide: string
  }
} 