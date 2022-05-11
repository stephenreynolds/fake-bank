import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle, { theme } from "../components/globalStyle";
import { getCurrentUser, initDb, User } from "../shared/mockdb";

config.autoAddCss = false

const App = ({ Component, pageProps }: AppProps) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!user) {
      initDb();
      setUser(getCurrentUser());
    }
  }, [user]);

  return (
    <>
      <Head>
        <title>fakeBank</title>
        <meta name="description" content="A fake banking web app made with Next.js."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <GlobalStyle/>

      <ThemeProvider theme={theme}>
        <Component user={user} {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
