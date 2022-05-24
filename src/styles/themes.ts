import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
     '500': '#FFBA08'
    },
    gray: {
      '50': '#F5F8FA',
      '100': '#DADADA',
      '500': '#999999',
      '700': '#47585B'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: '#F5F8FA',
        color: '#47585B'
      }
    }
  }
})
