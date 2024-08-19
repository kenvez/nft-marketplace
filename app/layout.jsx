import { ThemeProvider } from 'next-themes';
import { Navbar, Footer } from '../components/';
import Script from 'next/script';
import './globals.css';

export const metadata = {
  title: 'nft marketplace',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Navbar />
          {children}
          <Footer />
          <Script
            src='https://kit.fontawesome.com/e61a49ce78.js'
            crossorigin='anonymous'
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
