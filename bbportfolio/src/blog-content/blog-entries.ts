
export interface BlogEntryData {
    key: string,
    date: Date
    title: string
    summary: string,
}

export const blogData: BlogEntryData[] = [{
    key: "books",
    date: new Date(2026, 10, 13),
    title: "Software Engineering Books I've read",
    summary: "Interesting Software Engineering books I have read and learnt from.",
},
{
    key: "tidy",
    date: new Date(2026, 10, 13),
    title: "Lessons Learnt from Tidy First",
    summary: "Discussion of Kent Beck's book Tidy First and the Lessons I learnt from it",
}
]