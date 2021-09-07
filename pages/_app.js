import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { AppLayout } from '../components/layouts/AppLayout'

import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
    100:"#073980"
  },
}
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
       
  return (
  <ChakraProvider theme={theme}>
    <AppLayout>
      <Component {...pageProps} />
  </AppLayout>
  </ChakraProvider>
  )
}

export default MyApp
