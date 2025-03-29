import type { Metadata } from "next"

import { NuqsAdapter } from "nuqs/adapters/next/app"

import "./globals.css"

import { ThemeProvider } from "@/components/theme/theme-provider"

export const metadata: Metadata = {
    title: "Gabriel's Personal Website",
}

// This matters the layout that will be applied to the page.
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="tracking-tight antialiased">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NuqsAdapter>{children}</NuqsAdapter>
                </ThemeProvider>
            </body>
        </html>
    )
}
