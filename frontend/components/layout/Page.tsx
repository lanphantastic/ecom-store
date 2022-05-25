import Header from './Header';
import { GlobalStyles, InnerStyles } from './theme';

export default function Page({ children }: any) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}

