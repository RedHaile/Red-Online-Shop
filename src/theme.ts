import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

const theme = extendTheme({
  breakpoints: {
    values: {
      xxs: 300,
      xsm: 400,
      xs: 500,
      sm: 720,
      md: 960,
      lg: 1200,
      xl: 1536
    } as any
  },
  typography: {
    fontFamily: [
      'Karla',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif'
    ].join(',')
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#dcdde1',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#afb0b3',
            borderRadius: '8px'
          }
        }
      }
    }
  }
})

export default theme