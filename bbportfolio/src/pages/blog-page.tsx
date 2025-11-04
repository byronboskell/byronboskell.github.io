import { Box, Typography } from "@mui/material"
import React from "react";
import { useSearchParams } from "react-router-dom";
import { blogData } from "../blog-content/blog-entries"
import BlogEntry from "../components/blog-entry";

const parseBlogNumber = (searchParams: string | null, max?: number): number => {

    if (!searchParams) {
        return 0
    }

    const parsedNumber = Number.parseInt(searchParams)

    if (Number.isNaN(parsedNumber)) {
        return 0
    }

    if (parsedNumber < 0) {
        return 0
    }

    if (max && parsedNumber > max) {
        return max
    }

    return parsedNumber
}

const BlogPage: React.FC = () => {

    const [searchParams] = useSearchParams();
    const [blogNumber] = React.useState<number>(parseBlogNumber(searchParams.get("index"), blogData.length))
    const [page] = React.useState<number>(parseBlogNumber(searchParams.get("page")))

    const entry = blogData[blogNumber]

    return (
        <Box
            className="homepage-container"
            sx={{
                textAlign: "center",
                py: 8,
                px: 2,
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                Blog
            </Typography>
            <BlogEntry entry={entry} />
        </Box>
    )
}

export default BlogPage