import Page from "@/app/blog/page.client"

import { getAllPosts } from "@/lib/blog"

export default async function ServerPage() {
    const posts = await getAllPosts()

    return <Page posts={posts} />
}
