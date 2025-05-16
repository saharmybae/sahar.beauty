import '../styles/globals.css';      // ← styles globaux
import '../styles/Home.module.css';  // ← styles locaux (CSS Module)

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
