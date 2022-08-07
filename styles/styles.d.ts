import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
      variants: {
        screen: {
        sl: number,
        xl: number,
        lg: number,
        md: number,
        sm: number,
        xs: number
      },
      container: {
        sl: string,
        xl: string // 1200
        lg: string // 992
        md: string // 768
        sm: string, // 576
        xs: string, // 350
        xxs: string
      },
      font: {
        light: number,
        normal: number,
        bold: number,
        sizes: {
          xs: string
          sm: string
          md: string
          lg: string
          xl: string
          sl: string
        }
      }
    }
    colors: {
      primary: string
      secundary: string
      primary2: string
      secundary2: string
      background: string
      sheet: string
      danger: string
      success: string
    }
  }
}
