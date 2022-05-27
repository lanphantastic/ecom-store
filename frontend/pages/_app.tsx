import Page from '../components/layout/Page'
import NProgress from 'nprogress'
import Router from 'next/router'
import '../components/styles/nprogress.css'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import withData from '../lib/withData'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps, apollo }: any) {

  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page >
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  let pageProps = { query: 0 }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}

export default withData(MyApp)
