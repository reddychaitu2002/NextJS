import { eudox } from '@/libs/fonts'
import '@/styles/global.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const metadata: Metadata = {
  title: 'Lalasia',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={eudox.className}>
        <Header />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
