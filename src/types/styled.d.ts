import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      background: string
      text: string
      textLight: string
      accent: string
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
        tiny: string
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
} 