import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/app/theme-provider"
import { LensProvider } from '@/app/lens-provider'
import { Web3ModalProvider } from '@/app/web3modal-provider'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Web3ModalProvider>
            <LensProvider>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-cover bg-center bg-[#FDF6EE] bg-[url('/bg-2.png')]" > 
              {children}
            </main>  
            </LensProvider>
          </Web3ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

