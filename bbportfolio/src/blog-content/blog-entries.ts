
export interface BlogEntryData {
    key: string,
    index: number,
    title: string
    date: Date
    summary: string,
}

export const blogData: BlogEntryData[] = [{
    key: "books",
    index: 0,
    title: "Books I've read.",
    date: new Date(2026, 11, 13),
    summary: "Interesting Software Engineering books I have read and learnt from.",
}]