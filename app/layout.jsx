import './globals.css'

export const metadata = {
  title: 'সত্ত্বপথ - News Portal',
  description: 'Your trusted source for the latest news and updates',
  keywords: 'news, portal, সত্ত্বপথ, bangladesh, current affairs',
  authors: [{ name: 'সত্ত্বপথ Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  )
} 