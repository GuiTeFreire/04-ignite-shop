import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import Image from 'next/image'

import logoImg from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="logo" priority />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
