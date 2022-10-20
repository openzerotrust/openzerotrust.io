import { Container } from '@/components/_layout/Container'
import 'global.css'
import { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
