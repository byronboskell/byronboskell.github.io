import { Button, Card, CardContent, Stack, Typography } from "@mui/material"
import React from "react";
import { blogData } from "../blog-content/blog-entries"
import PageLayout from "../components/page-layout";

const BlogNavigationPage: React.FC = () => {
    return (
        <PageLayout>
            <Card component="article" variant="outlined">
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Typography variant="overline" color="primary">
                        Blog
                    </Typography>
                    <Typography variant="h2" component="h1" gutterBottom>
                        Blog Page
                    </Typography>
                    <Typography variant="h6" component="p" color="text.secondary">
                        Here are my thoughts about software development.
                    </Typography>
                    <Typography variant="h6" component="p" color="text.secondary">
                        During the development of Lords of Illic I kept a development blog on itch.io. Which you can find here:
                    </Typography>
                    <Button
                        href="https://orangedrake.itch.io/lords-of-illic/devlog"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        sx={{
                            mt: 2,
                            px: 3,
                            py: 1.5,
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: 700
                        }}
                    >
                        Lords of Illic devlog
                    </Button>
                </CardContent>
            </Card>
            <Card component="article" variant="outlined">
                <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Stack>
                        {blogData.map(data => <Typography> {data.title}</Typography>)}
                    </Stack>
                </CardContent>
            </Card >
        </PageLayout>
    )
}

export default BlogNavigationPage