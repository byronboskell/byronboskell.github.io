import React from "react";
import { useSearchParams } from "react-router-dom";
import { blogData } from "../blog-content/blog-entries"
import BlogEntryPage from "./blog-entry-page";
import BlogNavigationPage from "./blog-navigation-page";

const parseBlogNumber = (searchParams: string | null, max?: number): number => {

    if (!searchParams) {
        return -1
    }

    const parsedNumber = Number.parseInt(searchParams)

    if (Number.isNaN(parsedNumber)) {
        return 0
    }

    if (parsedNumber < 0) {
        return -1
    }

    if (max && parsedNumber > max) {
        return -1
    }

    return parsedNumber
}

const BlogPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const [blogNumber] = React.useState<number>(parseBlogNumber(searchParams.get("index"), blogData.length))

    if (blogNumber > -1 && blogNumber < blogData.length) {
        const entry = blogData[blogNumber]

        return <BlogEntryPage entry={entry} />
    }

    return (
        <BlogNavigationPage />
    )
}

export default BlogPage