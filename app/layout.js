// app/layout.js
import '../styles/global.css';

export const metadata = {
  title: 'Sahâr Beauty Lounge',
  description: 'Luxe & élégance à Sousse – Onglerie haut de gamme',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
