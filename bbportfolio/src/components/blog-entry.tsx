import React from "react";
import { type BlogEntryData } from "../blog-content/blog-entries";
import { Card, CardContent, Stack, Typography } from "@mui/material";

interface BlogEntryProps {
    entry: BlogEntryData
}

const BlogEntry: React.FC<BlogEntryProps> = ({
    entry
}) => {

    return (
        <Card component="article" variant="outlined">
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Stack>
                    <Typography variant="body1">{entry.content}</Typography>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default BlogEntry;