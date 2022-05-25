import Header from './Header';
import { GlobalStyles, InnerStyles } from './theme';

export default function Page({ children }: any) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}

