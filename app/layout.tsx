
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../src/component/Header'
import { CartProvider } from '../src/sher-context/context'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <CartProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />

            {children}


          </body>
        </html>
      </CartProvider>
    </>


  )
}
