"use client"
import * as React from "react"

import Link from "next/link"

import { motion } from "motion/react"

import { useQueryState, parseAsString, parseAsArrayOf } from "nuqs"

import { Post } from "@/lib/blog"

import {
    VARIANTS_SECTION,
    VARIANTS_CONTAINER,
    TRANSITION_SECTION,
} from "@/constants/motion"

import { Label } from "@/components/base/label"
import { Input } from "@/components/base/input"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/base/breadcrumb"

import { Footer } from "@/components/complex/footer"
import { TagsInput } from "@/components/complex/tags-input"

// Responsible for displaying the blog header.
const BlogHeaderComponent = () => {
    return (
        <div className="flex flex-col items-center border-b py-4">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Blog</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    )
}

// Responsible for displaying the search bar for posts.
type BlogSearchBarComponentProps = {
    posts: Post[]
}
const BlogSearchBarComponent = ({ posts }: BlogSearchBarComponentProps) => {
    const [title, setTitle] = useQueryState(
        "title",
        parseAsString.withDefault("")
    )

    return (
        <div className="flex flex-col items-start gap-3 w-full">
            <h1 className="text-xl font-semibold">Blog</h1>

            <Label htmlFor="search-by-title">Search by title</Label>
            <Input
                id="search-by-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value || null)}
                placeholder="Type title here"
            />
        </div>
    )
}

//  Responsible for displaying the keyword filter.
type BlogKeywordFilteringComponentProps = {
    posts: Post[]
}

const BlogKeywordFilteringComponent = ({
    posts,
}: BlogKeywordFilteringComponentProps) => {
    const [include, setInclude] = useQueryState(
        "include",
        parseAsArrayOf(parseAsString, ";")
    )
    const [exclude, setExclude] = useQueryState(
        "exclude",
        parseAsArrayOf(parseAsString, ";")
    )

    return (
        <div className="flex flex-col items-start gap-10 w-full">
            <div className="flex flex-col gap-3 w-full">
                <Label htmlFor="keyword-filtering-include">
                    Filter posts that <b>contain</b>these keywords
                </Label>
                <TagsInput
                    id="keyword-filtering-include"
                    value={include || []}
                    placeholder="Add keyword"
                    onValueChange={(value) => setInclude(value)}
                />
            </div>
            <div className="flex flex-col gap-3 w-full">
                <Label htmlFor="keyword-filtering-exclude">
                    Filter posts that <b>don't contain</b> these keywords
                </Label>
                <TagsInput
                    id="keyword-filtering-exclude"
                    value={exclude || []}
                    placeholder="Add keyword"
                    onValueChange={(value) => setExclude(value)}
                />
            </div>
        </div>
    )
}

// Utility functions for filtering and searching through lists of posts.
const searchByTitle = (title: string) => (posts: Post[]) => {
    return posts.filter((post) =>
        post.title.toLowerCase().includes(title.toLowerCase())
    )
}

const filterByKeywords =
    (include: string[], exclude: string[]) => (posts: Post[]) => {
        return posts.filter((post) => {
            const hasInclude = include.every((keyword) =>
                post.keywords.includes(keyword)
            )
            const hasExclude = exclude.some((keyword) =>
                post.keywords.includes(keyword)
            )

            return hasInclude && !hasExclude
        })
    }

const searchInPosts = (
    posts: Post[],
    title: string,
    keywords?: {
        include?: string[]
        exclude?: string[]
    }
) => {
    let filteredPosts = posts

    if (title) {
        filteredPosts = searchByTitle(title)(filteredPosts)
    }

    if (keywords?.include || keywords?.exclude) {
        filteredPosts = filterByKeywords(
            keywords.include || [],
            keywords.exclude || []
        )(filteredPosts)
    }

    return filteredPosts
}

// Responsible for displaying all posts.
type ListBlogPostsComponentProps = {
    posts: Post[]
}

const ListBlogPostsComponent = ({ posts }: ListBlogPostsComponentProps) => {
    const [title, _setTitle] = useQueryState(
        "title",
        parseAsString.withDefault("")
    )

    const [include, _setInclude] = useQueryState(
        "include",
        parseAsArrayOf(parseAsString, ";")
    )

    const [exclude, _setExclude] = useQueryState(
        "exclude",
        parseAsArrayOf(parseAsString, ";")
    )

    const filteredPosts = searchInPosts(posts, title, {
        include: include || undefined,
        exclude: exclude || undefined,
    })

    return (
        <div className="flex flex-col gap-2 items-start w-full">
            <h3 className="text-xl font-semibold">Posts</h3>
            {filteredPosts.length > 0 ? (
                <div className="flex flex-col items-start gap-3 w-full">
                    {filteredPosts.map((post, index) => {
                        return (
                            <Link
                                key={index}
                                href={post.url}
                                className="w-full"
                            >
                                <div className="w-full flex flex-col ustify-between gap-2 items-start  p-3 border rounded-lg hover:bg-accent hover:opacity-90 transition">
                                    <div className="flex flex-col gap-1">
                                        <h3 className="font-semibold text-lg">
                                            {post.title}
                                        </h3>
                                        <h4 className="leading-none max-w-sm">
                                            {post.description}
                                        </h4>
                                    </div>
                                    <div className="text-sm flex leading-none text-muted-foreground">
                                        {post.keywords.map((keyword, index) =>
                                            index + 1 < post.keywords.length
                                                ? keyword + ", "
                                                : keyword
                                        )}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            ) : (
                <p className="leading-none text-muted-foreground">
                    No posts found.
                </p>
            )}
        </div>
    )
}

// This exports the page.
type PageProps = {
    posts: Post[]
}

export default function Page({ posts }: PageProps) {
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
                        <React.Suspense>
                            <BlogHeaderComponent />
                            <BlogSearchBarComponent posts={posts} />
                            <BlogKeywordFilteringComponent posts={posts} />
                            <ListBlogPostsComponent posts={posts} />
                        </React.Suspense>
                    </motion.section>
                </motion.main>
                <Footer />
            </div>
        </div>
    )
}
