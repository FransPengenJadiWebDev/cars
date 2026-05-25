'use client'

import { main } from "framer-motion/client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageWrapper ({children}: { children: ReactNode }) {
    const pathname = usePathname()

    const noPaddingPages = ['/', '/about']

    const paddingClass = noPaddingPages.includes(pathname) ? '' : 'pt-19'

    return (
        <main className={paddingClass}>
            {children}
        </main>
    )
}