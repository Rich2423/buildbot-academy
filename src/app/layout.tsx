import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BuildBot Academy - Learn STEM & AI Through Building!',
  description: 'Fun STEM learning game for kids ages 6-13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 min-h-screen font-nunito`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}