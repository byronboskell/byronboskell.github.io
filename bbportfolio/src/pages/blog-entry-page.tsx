import { Box, Button, Stack, Typography } from "@mui/material"
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