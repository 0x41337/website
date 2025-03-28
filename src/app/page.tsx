import Page from "@/app/page.client"

import { getAllPosts } from "@/lib/blog"

export default async function ServerPage() {
    const posts = await getAllPosts()
    return <Page posts={posts} />
}
