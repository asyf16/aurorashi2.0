import '../styles/globals.css';
import Navbar from 'components/navbar';

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
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}
