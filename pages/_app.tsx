import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "../components/globalStyle";

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
