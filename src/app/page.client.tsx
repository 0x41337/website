"use client"

import Link from "next/link"
import { motion } from "motion/react"

import { Post } from "@/lib/blog"

import {
    VARIANTS_SECTION,
    VARIANTS_CONTAINER,
    TRANSITION_SECTION,
} from "@/constants/motion"

import { Footer } from "@/components/complex/footer"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/base/avatar"

import { Magnetic } from "@/components/motion-primitives/magnetic"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"

import {
    getProfileData,
    getProjectsData,
    getSocialLinkData,
    getCertificationsData,
} from "@/data/data"

// Responsible for displaying profile data.
const ProfileSection = () => {
    const data = getProfileData()

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-row items-center gap-3">
                {/* Profile avatar */}
                <Avatar className="h-14 w-14">
                    <AvatarFallback>
                        {
                            // Select only 2 characters of the username.
                            data.name.slice(0, 2).toUpperCase() || "?"
                        }
                    </AvatarFallback>
                    <AvatarImage src={data.icon} alt={data.name} />
                </Avatar>

                {/* Profile name & location */}
                <div className="flex flex-col gap-2 items-start">
                    <h1
                        className="text-lg font-bold  leading-none"
                        translate="no"
                    >
                        {data.name}
                    </h1>
                    <h3 className=" leading-none text-muted-foreground">
                        {data.city}, {data.country}
                    </h3>
                </div>
            </div>

            {/* Profile skills */}
            <div className="flex flex-col gap-2 items-start">
                <h3 className="text-xl font-semibold">Skills</h3>
                <div className="leading-none text-muted-foreground">
                    {
                        // Display skills in a list format.
                        data.skills.length > 0 ? (
                            data.skills.map((skill, index) =>
                                index + 1 < data.skills.length
                                    ? skill + ", "
                                    : skill
                            )
                        ) : (
                            <h4 className=" leading-none">
                                I don't have any skills yet.
                            </h4>
                        )
                    }
                </div>
            </div>

            {/* Profile languages */}
            <div className="flex flex-col gap-2 items-start">
                <h3 className="text-xl font-semibold">Languages</h3>
                <div className="leading-none text-muted-foreground">
                    {
                        // Display languages in a list format.
                        data.languages.length > 0 ? (
                            data.languages.map((language, index) =>
                                index + 1 < data.languages.length
                                    ? language + ", "
                                    : language
                            )
                        ) : (
                            <h4 className=" leading-none">
                                I don't speak any language yet.
                            </h4>
                        )
                    }
                </div>
            </div>

            {/* Profile biography */}
            <div className="flex flex-col gap-2 items-start">
                <div className="text-xl font-semibold">Biography</div>
                <div className="leading-none text-muted-foreground">
                    {data.biography}
                </div>
            </div>
        </div>
    )
}

// Responsible for displaying projects data.
const ProjectsSection = () => {
    const data = getProjectsData()

    return (
        <div className="flex flex-col items-start gap-2">
            <h3 className="text-xl font-semibold">Pinned Projects</h3>
            {data.length > 0 ? (
                <AnimatedGroup
                    preset="zoom"
                    className="flex flex-col gap-3 w-full"
                >
                    {data.map((project, index) => (
                        <Link href={project.url} key={index}>
                            <div className="w-full flex flex-col ustify-between gap-2 items-start  p-3 border rounded-lg hover:bg-accent hover:opacity-90 transition">
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-semibold text-lg">
                                        {project.title}
                                    </h3>
                                    <h4 className="leading-none max-w-sm">
                                        {project.description}
                                    </h4>
                                </div>
                                <div className="text-sm flex leading-none text-muted-foreground">
                                    {project.keywords.map((keyword, index) =>
                                        index + 1 < project.keywords.length
                                            ? keyword + ", "
                                            : keyword
                                    )}
                                </div>
                            </div>
                        </Link>
                    ))}
                </AnimatedGroup>
            ) : (
                <h4 className="leading-none text-muted-foreground">
                    I don't have any project yet.
                </h4>
            )}
        </div>
    )
}

// Responsible for displaying certifications data.
const CertificationsSection = () => {
    const data = getCertificationsData()

    return (
        <div className="flex flex-col items-start gap-2">
            <h3 className="text-xl font-semibold">Certifications</h3>
            {data.length > 0 ? (
                <AnimatedGroup
                    preset="zoom"
                    className="flex flex-col gap-3 w-full"
                >
                    {data.map((certification, index) => (
                        <Link href={certification.url} key={index}>
                            <div className="w-full h-fit flex flex-col md:flex-row justify-between gap-2 items-start  p-3 border rounded-lg hover:bg-accent hover:opacity-90 transition">
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-semibold text-lg">
                                        {certification.institution}
                                    </h3>
                                    <h4 className="leading-none max-w-sm">
                                        {certification.title}
                                    </h4>
                                </div>
                                <div className="text-sm text-muted-foreground flex flex-row items-center gap-2">
                                    <h3>
                                        {certification.startedAt.toLocaleDateString()}
                                    </h3>
                                    <h3>-</h3>
                                    <h3>
                                        {certification.finishedAt
                                            ? certification.finishedAt.toLocaleDateString()
                                            : "Not finished yet"}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </AnimatedGroup>
            ) : (
                <h4 className="leading-none text-muted-foreground">
                    I don't have any certification yet.
                </h4>
            )}
        </div>
    )
}

// Responsible for displaying social links.
const SocialLinksSection = () => {
    const data = getSocialLinkData()

    return (
        <div className="flex flex-col items-start gap-2">
            <h3 className="font-semibold text-lg">Contact me below</h3>
            <h4 className="leading-none text-muted-foreground">
                Feel free to contact me at <b>{getProfileData().email}</b>
            </h4>
            <div className="flex flex-row gap-2 items-center py-2">
                {data.map((social, index) => (
                    <Magnetic
                        key={index}
                        intensity={0.2}
                        springOptions={{ bounce: 0.1 }}
                        actionArea="global"
                        range={100}
                    >
                        <Link
                            className="rounded-lg bg-primary-foreground py-2 px-2 hover:underline"
                            href={social.url}
                        >
                            {social.label}
                        </Link>
                    </Magnetic>
                ))}
            </div>
        </div>
    )
}

// Responsible for displaying the three most recent posts.
type ListBlogPostsComponentProps = {
    posts: Post[]
}

const ListBlogPostsComponent = ({ posts }: ListBlogPostsComponentProps) => {
    return (
        <div className="flex flex-col gap-2 items-start w-full">
            <h3 className="text-xl font-semibold">Latest blog posts</h3>
            {posts.length > 0 ? (
                <AnimatedGroup
                    preset="zoom"
                    className="flex flex-col gap-3 w-full"
                >
                    {posts.slice(0, 3).map((post, index) => {
                        return (
                            <Link
                                key={index}
                                href={post.url}
                                className="w-full"
                            >
                                <div className="w-full flex flex-col gap-2 items-start p-3 border rounded-lg hover:bg-accent hover:opacity-90 transition">
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
                    <Link href="/blog" className="underline">
                        View all posts
                    </Link>
                </AnimatedGroup>
            ) : (
                <p className="leading-none text-muted-foreground">
                    I don't have any post yet.
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
                        {/* App section: profile */}
                        <ProfileSection />

                        {/* App section: certifications */}
                        <CertificationsSection />

                        {/* App section: projects */}
                        <ProjectsSection />

                        {/* App section: blog posts */}
                        <ListBlogPostsComponent posts={posts} />

                        {/* App section: social links */}
                        <SocialLinksSection />
                    </motion.section>
                </motion.main>
                <Footer />
            </div>
        </div>
    )
}
