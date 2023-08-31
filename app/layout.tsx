import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import styles from './app-layout.module.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Simon Menard',
  description: 'Portfolio of Simon Menard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={"bg-black text-white " + inter.className}>
          <main className={styles.root}>
            <div className={styles.background_overlay}>
              <div className={styles.content}>
                {children}
              </div>
            </div>
          </main>
        </body>
      </html>
  )
}
