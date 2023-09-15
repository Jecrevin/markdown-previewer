import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jecrevin: Markdown Previewer',
  description: 'An Online Markdown Previewer'
}

export default function RootLayout ({ children }: {
  children: React.ReactNode
}): React.JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
