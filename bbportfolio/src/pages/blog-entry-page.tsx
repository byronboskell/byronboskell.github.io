import { Box, Typography } from "@mui/material"
import React from "react";
import { type BlogEntryData } from "../blog-content/blog-entries"
import PageLayout from "../components/page-layout";
import BlogEntry from "../components/blog-entry";

interface BlogEntryPage {
    entry: BlogEntryData
}

const BlogPage: React.FC<BlogEntryPage> = ({
    entry,
}) => {

    return (
        <PageLayout>
            <Box
                className="homepage-container"
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "top",
                }}
            >
                <Typography variant="h3">
                    BB Blog
                </Typography>
                <BlogEntry entry={entry} />
            </Box>
        </PageLayout>
    )
}

export default BlogPage