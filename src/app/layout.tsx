import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Verifiable Draws - Build a brand that everyone trust',
  description: 'Organize random draws and contests which are impossible to rig thanks to decentralized technologies, allowing you to prove the whole world that your company is trustworthy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
