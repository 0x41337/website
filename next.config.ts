import type { NextConfig } from "next"

import createMDX from "@next/mdx"

import remarkGfmPlugin from "remark-gfm"
import remarkMathPlugin from "remark-math"

import rehypeKatexPlugin from "rehype-katex"
import rehypePrismPlugin from "rehype-prism-plus"

const nextConfig: NextConfig = {
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfmPlugin, remarkMathPlugin],
        rehypePlugins: [rehypeKatexPlugin, rehypePrismPlugin],
    },
})

export default withMDX(nextConfig)
