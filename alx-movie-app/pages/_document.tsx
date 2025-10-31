import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Link PWA manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color for mobile status bar */}
        <meta name="theme-color" content="#0070f3" />

        {/* Apple PWA support */}
        <link rel="apple-touch-icon" href="/icons/apple-icon-152x152.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
