'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../src/component/Header'
import { CartProvider } from '../src/sher-context/context'
import Footer from'../src/component/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>

      <html lang="en">
        <body className={inter.className}>
          <CartProvider>
            <Header />
            {children}

          </CartProvider>
          <Footer />
        </body>
      </html>

    </>


  )
}
