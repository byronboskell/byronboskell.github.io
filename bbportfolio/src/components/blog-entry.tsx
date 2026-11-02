import React from "react";
import { type BlogEntryData } from "../blog-content/blog-entries";
import { Stack, Typography } from "@mui/material";

interface BlogEntryProps {
    entry: BlogEntryData
}

const BlogEntry: React.FC<BlogEntryProps> = ({
    entry
}) => {

    return (
        <Stack>
            <Typography variant="h5" component="div">{entry.title}</Typography>
            <Typography color="text.secondary" variant="subtitle2">{entry.date.toLocaleDateString()}</Typography>
            <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>{entry.summary}</Typography>
            <Typography variant="body1">{entry.content}</Typography>
        </Stack>
    )
}

export default BlogEntry;