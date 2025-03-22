"use client"
import { useEffect, useState } from "react"

import { useTheme } from "next-themes"

import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"

import { TextLoop } from "@/components/motion-primitives/text-loop"
import { AnimatedBackground } from "@/components/motion-primitives/animated-background"

import { getProfileData } from "@/data/data"

const THEMES_OPTIONS = [
    {
        label: "Light",
        id: "light",
        icon: <SunIcon className="h-4 w-4" />,
    },
    {
        label: "Dark",
        id: "dark",
        icon: <MoonIcon className="h-4 w-4" />,
    },
    {
        label: "System",
        id: "system",
        icon: <MonitorIcon className="h-4 w-4" />,
    },
]

function ThemeSwitch() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <AnimatedBackground
            className="pointer-events-none rounded-lg bg-zinc-100 dark:bg-zinc-800"
            defaultValue={theme}
            transition={{
                type: "spring",
                bounce: 0,
                duration: 0.2,
            }}
            enableHover={false}
            onValueChange={(id: any) => {
                setTheme(id as string)
            }}
        >
            {THEMES_OPTIONS.map((theme) => {
                return (
                    <button
                        key={theme.id}
                        className="inline-flex h-7 w-7 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950 dark:text-zinc-400 dark:data-[checked=true]:text-zinc-50"
                        type="button"
                        aria-label={`Switch to ${theme.label} theme`}
                        data-id={theme.id}
                    >
                        {theme.icon}
                    </button>
                )
            })}
        </AnimatedBackground>
    )
}

export function Footer() {
    const data = getProfileData()

    return (
        <footer className="mt-24 border-t border-zinc-100 px-0 py-4 dark:border-zinc-800">
            <div className="flex items-center justify-between">
                <TextLoop className="text-xs text-zinc-500">
                    <span>© 2025 - {data.name}.</span>
                    <span>Licensed under MIT.</span>
                </TextLoop>

                <div className="text-xs text-zinc-400">
                    <ThemeSwitch />
                </div>
            </div>
        </footer>
    )
}
