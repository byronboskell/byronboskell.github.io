import { Box, Button, Card, CardContent, Stack, Typography } from "@mui/material"
import React from "react";
import PageLayout from "../components/page-layout";
import BlogEntry from "../components/blog-entry";
import { Link, useParams } from "react-router-dom";
import { blogData } from "../blog-content/blog-entries";



const BlogPage: React.FC = () => {

    const { index } = useParams();
    const entry = blogData[Number(index)];

    return (
        <PageLayout>
            <Stack spacing={2}>
                <Stack direction={"row"}>
                    <Button
                        key={"/blog"}
                        component={Link}
                        to={"/blog"}
                        color="inherit"
                        variant="text"
                        sx={{
                            width: "fitContent"
                        }}
                    >
                        ← Back to blog page
                    </Button>
                </Stack>


                <Card component="article" variant="outlined">
                    <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                        <Typography variant="overline" color="primary">
                            {entry.date.toDateString()}
                        </Typography>
                        <Typography variant="h2" component="h1" gutterBottom>
                            {entry.title}
                        </Typography>
                    </CardContent>
                </Card>
                <BlogEntry entry={entry} />
            </Stack>
        </PageLayout>
    )
}

export default BlogPage