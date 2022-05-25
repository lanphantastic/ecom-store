import styledComponents, { createGlobalStyle, ThemedStyledInterface } from 'styled-components'

export const styled = styledComponents as ThemedStyledInterface<Theme>

// **Important** Most fit colors defined in `<root>/config/antd-theme.js`, always keep both
//               files in sync. Restart server to see changes being applied to `antd-theme.js` file.
export type Theme = typeof theme

const borderWidths = ['0', '1px', '2px', '4px', '8px']

// Typographic Scale (numbers are converted to px values)
const fontSizes = ['10px', '12px', '14px', '16px', '20px', '24px', '32px', '40px', '48px', '64px', '72px']
const lineHeights = ['18px', '22px', '26px', '34px', '40px', '50px']

const radii = ['0', '1px', '2px', '4px', '8px']

// Spacing Scale (used for margin and padding)
const space = ['0px', '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px']

const colors = {
  primary: '#22a891',
  yellow: '#F0AD4E',
  orange: '#FF951E',
  blue: '#5bc0de',
  red: '#d9534f',
  gray: '#777777',
  darkBlue: '#1C84C6',
  white: '#fff',
  green: '#44D333',
  transparancy: 'rgba(255,255,255,0)',
  ternary50: '#fafbfc',
  ternary100: '#f6f8f9',
  ternary200: '#f0f3f5',
  ternary250: '#e4eaef',
  ternary300: '#d8e1e9',
  ternary400: '#bbc7d3',
  ternary500: '#9fadbc',
  ternary600: '#8294a6',
  ternary700: '#657a90',
  ternary800: '#49617a',
  ternary900: '#2c4863',
  ternary950: '#203d5a',
  ternary1000: '#0f2e4d',
  ternary1100: '#0c243b',
  ternary1200: '#081929',

  link400: '#707bdb',
  link500: '#6673E5',
  link700: '#5a5ab4',

  highlight1: '#61d8c8',
  highlight2: '#34cfbd',

  alert1000: '#fbab0b',

  grey1: '#f8f8fa',
  grey2: '#dcdde2',
  grey3: '#c9cacf',
  grey4: '#b2b2b9',
  grey5: '#9a9ba3',
  grey6: '#7a7c84',
  grey7: '#5a5d65',
  grey8: '#3a3e47',
  grey9: '#1a1f28',
  grey10: '#000',
}
export const theme = {
  colors,
  fontSizes,
  borderWidths,
  lineHeights,
  radii,
  space,
}

export const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    --grey: #3A3A3A;
    --gray: var(--grey);
    --lightGrey: #e1e1e1;
    --lightGray: var(--lightGrey);
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0.5rem;
    font-size: 1.5rem;
    line-height:2;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  button {
    font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`
