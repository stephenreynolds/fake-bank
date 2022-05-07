import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "../components/globalStyle";

import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
