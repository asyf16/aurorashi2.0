import '../styles/globals.css';
import ContextProvider from '../components/contextProvider';

export const metadata = {
    title: {
        default: `Aurora's Portfolio`
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
        </html>
    );
}
