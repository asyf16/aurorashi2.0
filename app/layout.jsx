import '../styles/globals.css';
import ContextProvider from 'components/contextProvider';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'

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
            </head>
            <body className="antialiased bg-[#04020e]">
                <ContextProvider>
                    <main>{children}</main>
                </ContextProvider>
            </body>
            <GoogleAnalytics gaId="G-Q74TEFFYS2" />
        </html>
    );
}
