/*
    This file is where the data is
    stored and follows a defined
    structure and typing.
*/
import {
    SocialLinkType,
    ProfileDataType,
    ProjectDataType,
    CertificationDataType,
} from "@/data/types"

export function getProfileData(): ProfileDataType {
    return {
        icon: "https://github.com/0x41337.png",
        name: "Gabriel M. Fonseca",
        city: "Rio de Janeiro",
        email: "041337@proton.me",
        skills: [
            "Intermediate Statistics",
            "Advanced programming",
            "Intermediate Data-science",
        ],
        country: "Brazil",
        biography:
            "Statistician developer, great with Data-Science and Machine-Learning. Interested in use technology to solve complex-problems.",
        languages: [
            "American-English A2",
            "Peninsular-Spanish B1",
            "Brazilian-Portuguese C2",
        ],
    }
}

export function getSocialLinkData(): SocialLinkType[] {
    return [
        {
            url: "https://github.com/0x41337",
            label: "GitHub",
        },
        {
            url: "https://t.me/x41337",
            label: "Telegram",
        },
    ]
}

export function getProjectsData(): ProjectDataType[] {
    return [
        {
            url: "https://github.com/0x41337/website",
            title: "This website",
            keywords: ["nextjs", "react", "typescript", "tailwind-css"],
            description:
                "Curious about how this site was made? You can check out the entire source code here, it's free.",
        },
    ]
}

export function getCertificationsData(): CertificationDataType[] {
    return [
        {
            url: "https://www.coursera.org/learn/stanford-statistics",
            title: "Introduction to statistics",
            startedAt: new Date("2021-01-01"),
            institution: "Stanford University",
        },
    ]
}
