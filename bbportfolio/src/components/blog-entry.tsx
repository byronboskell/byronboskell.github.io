import React from "react";
import { type BlogEntryData } from "../blog-content/blog-entries";
import { Card, CardContent, Stack, Typography } from "@mui/material";

interface BlogEntryProps {
    entry?: BlogEntryData | undefined;
    Content?: React.ComponentType | undefined;
}

const BlogEntry: React.FC<BlogEntryProps> = ({
    entry,
    Content
}) => {

    return (
        <Stack spacing={2}>
            <Card component="article" variant="outlined">
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography variant="overline" color="primary">
                        {entry?.date.toDateString() || "Unknown"}
                    </Typography>
                    <Typography variant="h2" component="h1" gutterBottom>
                        {entry?.title || "Blog entry not found."}
                    </Typography>
                </CardContent>
            </Card>

            <Card component="article" variant="outlined">
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    {Content && <Content />}
                </CardContent>
            </Card>
        </Stack>
    )
}

export default BlogEntry;