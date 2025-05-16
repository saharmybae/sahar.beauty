// pages/_app.js
import '../styles/globals.css';   //  ← indispensable
import '../styles/Home.module.css'; // (pas obligatoire mais OK)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
