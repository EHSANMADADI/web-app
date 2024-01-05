
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../Component/Header'
import Boxitem from '../Component/Boxitem'
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
