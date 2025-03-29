"use client"
import * as React from "react"
import { motion } from "motion/react"

import "katex/dist/katex.min.css"
import "prism-themes/themes/prism-vsc-dark-plus.css"

import {
    VARIANTS_SECTION,
    VARIANTS_CONTAINER,
    TRANSITION_SECTION,
} from "@/constants/motion"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/base/breadcrumb"

import { Footer } from "@/components/complex/footer"

type PageProps = {
    title: string
    keywords: string[]
    children?: React.ReactNode | null
}

// Responsible for displaying the post header.
type PostHeaderComponentProps = {
    title: string
}
const PostHeaderComponent = ({ title }: PostHeaderComponentProps) => {
    return (
        <div className="flex flex-col items-center border-b py-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

// Responsible for displaying the post footer.
type PostFooterComponentProps = {
    keywords: string[]
}

const PostFooterComponent = ({ keywords }: PostFooterComponentProps) => {
    return (
        <div className="flex flex-col items-start border-t py-2">
            <h3>Keywords</h3>
            <p className="text-sm text-muted-foreground">
                {keywords.join(", ")}
            </p>
        </div>
    )
}

// This component is a template for all pages on your website.
export default function Page({ title, keywords, children }: PageProps) {
    return (
        <div className="min-h-screen w-full flex flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="mx-auto w-full max-w-screen-sm relative flex-1 px-4 py-20 ">
                <motion.main
                    initial="hidden"
                    animate="visible"
                    variants={VARIANTS_CONTAINER}
                    className="mx-auto space-y-5"
                >
                    <motion.section
                        variants={VARIANTS_SECTION}
                        className="flex flex-col gap-10"
                        transition={TRANSITION_SECTION}
                    >
                        <PostHeaderComponent title={title} />
                        <article className="prose prose-neutral dark:prose-invert">
                            {children}
                        </article>
                        <PostFooterComponent keywords={keywords} />
                    </motion.section>
                </motion.main>
                <Footer />
            </div>
        </div>
    )
}
