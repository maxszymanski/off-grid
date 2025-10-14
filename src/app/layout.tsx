import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'
import Navbar from '@/components/nav/Navbar'
import Footer from '@/components/footer/Footer'
import AosProvider from '@/components/ui/AosProvider'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

export const canela = localFont({
    src: '../fonts/canela-trial.woff2',
    variable: '--font-canela',
})

export const metadata: Metadata = {
    title: 'Off Grid',
    description:
        'Privacy-first crypto cards and instant payments. No KYC, no delays, no compromise.',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="">
            <body
                className={`${geistSans.className} ${canela.variable} bg-blackBg text-primary w-full overflow-x-hidden antialiased`}
            >
                <AosProvider>
                    <Navbar />
                    {children}

                    <Footer />
                </AosProvider>
            </body>
        </html>
    )
}
