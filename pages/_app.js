import { Fragment } from "react";
import Head from "next/head";
import createGlobalStyle from "./styles/global";

createGlobalStyle();

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>email</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />

        <style
          dangerouslySetInnerHTML={{
            __html: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@400&display=swap');`,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
