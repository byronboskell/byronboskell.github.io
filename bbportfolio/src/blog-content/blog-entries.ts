
export interface BlogEntryData {
    title: string
    date: Date
    summary: string,
    content: string,
}

export const blogData: BlogEntryData[] = [{
    title: "Blog",
    date: new Date(2025, 11),
    summary: "Creating a blog",
    content: "Text goes here"
}]