import "../styles/globals.css";

import { Bitter } from "@next/font/google";
const bitter = Bitter({
  variable: "--font-bitter",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={bitter.variable}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
