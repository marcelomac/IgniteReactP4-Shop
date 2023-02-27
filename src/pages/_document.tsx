import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "../styles";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Da+2:wght@400;500;600;700&family=Josefin+Slab:ital,wght@0,300;0,400;0,600;0,700;1,300;1,600&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400&family=Nunito:ital,wght@0,700;1,400&family=Roboto+Flex:opsz,wght@8..144,100&family=Roboto+Mono:wght@700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText()}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
