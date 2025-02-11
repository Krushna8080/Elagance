'use client'

import { createGlobalStyle, DefaultTheme } from 'styled-components'

interface ThemeInterface extends DefaultTheme {
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

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  body {
    min-height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  p {
    line-height: 1.6;
  }
` 