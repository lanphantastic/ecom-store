import type { AppProps } from 'next/app'
import Page from '../components/layout/Page'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page >
  )
}

