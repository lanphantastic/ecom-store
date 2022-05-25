import Page from '../components/layout/Page'
import NProgress from 'nprogress'
import Router from 'next/router'
import '../components/styles/nprogress.css'
import { AppProps } from 'next/app'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page >
  )
}

