import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Product</title>
        <link href="/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/css/product.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/bootstrap.bundle.min.js" />
      </body>
    </Html>
  );
}
