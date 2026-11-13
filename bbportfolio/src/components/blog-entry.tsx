import React from "react";
import { type BlogEntryData as BlogSummaryData } from "../blog-content/blog-entries";
import { Card, CardContent, Stack, Typography } from "@mui/material";

interface BlogEntryProps {
    summary?: BlogSummaryData | undefined;
    Content?: React.ComponentType | undefined;
}

const BlogEntry: React.FC<BlogEntryProps> = ({
    summary: entry,
    Content
}) => {

    return (
        <Stack spacing={2}>
            <Card component="article" variant="outlined">
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography variant="overline" color="primary">
                        {entry?.date.toDateString() || "Unknown"}
                    </Typography>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {entry?.title || "Unknown"}
                    </Typography>
                </CardContent>
            </Card>

            <Card component="article" variant="outlined">
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    {Content && <Content />}
                    {!Content && <Typography >
                        Content Not Found.
                    </Typography>}
                </CardContent>
            </Card>
        </Stack>
    )
}

export default BlogEntry;