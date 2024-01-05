
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../src/component/Header'
import Boxitem from '../src/component/Boxitem'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Boxitem />
        {children}


      </body>
    </html>
  )
}
