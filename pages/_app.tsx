import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AppProps } from "next/app";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "../components/globalStyle";
import { initDb } from "../shared/mockdb";

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    initDb();
  }, []);

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
