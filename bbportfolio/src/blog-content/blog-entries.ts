
export interface BlogEntryData {
    key: string,
    title: string
    date: Date
    summary: string,
}

export const blogData: BlogEntryData[] = [{
    key: "placeholder",
    title: "Blog",
    date: new Date(2025, 11),
    summary: "Creating a blog",
}]