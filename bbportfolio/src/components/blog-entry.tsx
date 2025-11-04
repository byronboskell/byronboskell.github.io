import React from "react";
import { BlogEntryData } from "../blog-content/blog-entries";
import { Card, CardContent, Typography } from "@mui/material";

interface BlogEntryProps {
    entry: BlogEntryData
}

const BlogEntry: React.FC<BlogEntryProps> = ({
    entry
}) => {

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div">{entry.title}</Typography>
                <Typography color="text.secondary" variant="subtitle2">{entry.date.toLocaleDateString()}</Typography>
                <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>{entry.summary}</Typography>
                <Typography variant="body1">{entry.content}</Typography>
            </CardContent>
        </Card>
    )
}

export default BlogEntry;