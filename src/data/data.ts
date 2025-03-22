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
    ]
}

export function getProjectsData(): ProjectDataType[] {
    return [
        {
            url: "https://github.com/0x41337/abyss",
            title: "Abyss",
            keywords: ["xgboost", "bitcoin", "analysis"],
            description:
                "Cryptocurrency Price Forecasting Using XGBoost Regressor and Technical Indicators.",
        },
    ]
}

export function getCertificationsData(): CertificationDataType[] {
    return [
        {
            url: "https://www.coursera.org/learn/stanford-statistics",
            title: "Introduction to statistics",
            startedAt: new Date("2021-01-01"),
            finishedAt: new Date("2021-06-30"),
            institution: "Stanford University",
        },
        {
            url: "https://www.coursera.org/learn/statistical-inference-for-estimation-in-data-science",
            title: "Statistical inference for estimation in data science",
            startedAt: new Date("2021-01-01"),
            finishedAt: new Date("2021-06-30"),
            institution: "University of Colorado",
        },
        {
            url: "https://www.coursera.org/specializations/statistical-learning-for-data-science",
            title: "Integrated Course Program Statistical Learning for Data Science",
            startedAt: new Date("2021-01-01"),
            finishedAt: new Date("2021-06-30"),
            institution: "University of Colorado",
        },
    ]
}
