import fs from "fs"
import path from "path"

const postsDirectory = path.join(path.resolve("."), "blog")

import Page from "@/app/blog/[slug]/page.client"

export default async function ServerPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params

    const { default: Post, metadata } = await import(`~/blog/${slug}.mdx`)

    return (
        <Page
            title={metadata?.title || "unknown"}
            keywords={metadata?.keywords || []}
        >
            <Post />
        </Page>
    )
}

export function generateStaticParams() {
    const fileNames = fs.readdirSync(postsDirectory)

    const slugs = fileNames
        .filter((fileName) => fileName.endsWith(".mdx"))
        .map((fileName) => ({ slug: fileName.replace(".mdx", "") }))

    return slugs
}

export const dynamicParams = false
