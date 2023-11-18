import './globals.css'
import { Inter } from 'next/font/google'
import { Web3ModalProvider } from '@/app/web3modal-provider'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
          <Web3ModalProvider>
            <Navbar />
            <main className="flex min-h-screen max-h-screen flex-col items-center justify-center p-24 bg-cover bg-center bg-[#FDF6EE] bg-[url('/bg-2.png')]" > 
              {children}
            </main>  
          </Web3ModalProvider>
      </body>
    </html>
  )
}

