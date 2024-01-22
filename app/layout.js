import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Automation Test',
    description: '',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
        </html>
    );
}
