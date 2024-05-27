import { Lato } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer/footer'

import './globals.css'

const font = Lato({ weight: ['400','700'], subsets: ['latin'] })

export const metadata = {
  title: 'Mara Raha',
  description: 'Art Store - The place for all your art purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
