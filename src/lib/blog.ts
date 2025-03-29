import fs from "fs"
import path from "path"

const postsDirectory = path.join(process.cwd(), "blog")

export type PostMetadata = {
    title: string
    keywords: string[]
    description: string
}

export type Post = PostMetadata & {
    url: string
}

export const getAllPosts = async () => {
    const fileNames = fs.readdirSync(postsDirectory)

    const posts = await Promise.all(
        fileNames
            .toReversed()
            .filter((fileName) => fileName.endsWith(".mdx"))
            .map(async (fileName) => {
                const slug = fileName.replace(".mdx", "")
                const { metadata } = await import(`~/blog/${slug}.mdx`)

                return {
                    url: `/blog/${slug}`,
                    title: metadata?.title || "unknown",
                    keywords: metadata?.keywords || [],
                    description: metadata?.description || "",
                }
            })
    )

    return posts
}
