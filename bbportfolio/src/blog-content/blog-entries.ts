
export interface BlogEntryData {
    key: string,
    date: Date
    title: string
    summary: string,
}

export const blogData: BlogEntryData[] = [{
    key: "books",
    date: new Date(2026, 11, 13),
    title: "Software Engineering Books I've read.",
    summary: "Interesting Software Engineering books I have read and learnt from.",
}]