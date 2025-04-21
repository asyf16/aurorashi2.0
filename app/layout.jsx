import '../styles/globals.css';
import ContextProvider from 'components/contextProvider';
import Head from 'next/head';

export const metadata = {
    title: {
        default: `Aurora's Portfolio`,
        description: `Aurora's Portfolio, created with love`,
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q74TEFFYS2"></script>
                <Head>
                    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q74TEFFYS2"></script>
                    <script>
                        {`
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'G-Q74TEFFYS2');
                        `}
                    </script>
                </Head>
            </head>
            <body className="antialiased bg-[#04020e]">
                <ContextProvider>
                    <main>{children}</main>
                </ContextProvider>
            </body>
        </html>
    );
}
