/* 
    Here in this file is where the data types are defined.
*/
export type SocialLinkType = {
    url: string
    label: string
}

export type ProfileDataType = {
    icon: string
    name: string
    city: string
    email: string
    skills: string[]
    country: string
    biography: string
    languages: string[]
}

export type ProjectDataType = {
    url: string
    title: string
    keywords: string[]
    description: string
}

export type CertificationDataType = {
    url: string
    title: string
    startedAt: Date
    finishedAt: Date
    institution: string
}

