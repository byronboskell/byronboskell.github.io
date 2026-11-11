import { Button, Card, CardContent, Stack, Typography } from "@mui/material"
import React from "react";
import { blogData } from "../blog-content/blog-entries"
import PageLayout from "../components/page-layout";
import { Link, useLocation } from "react-router-dom";

const BlogNavigationPage: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <PageLayout>
            <Stack spacing={2}>
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
                <Stack spacing={1.5}>
                    {blogData.map((data, index) => (
                        <Card
                            key={data.title}
                            component={Link}
                            to={`${pathname.replace(/\/$/, "")}/${index}`}
                            variant="outlined"
                            sx={{
                                color: "inherit",
                                textDecoration: "none",
                                transition: "border-color 0.2s, transform 0.2s",
                                "&:hover": {
                                    borderColor: "primary.main",
                                    transform: "translateY(-2px)"
                                }
                            }}
                        >
                            <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
                                <Typography variant="overline" color="primary">
                                    Entry {String(index + 1).padStart(2, "0")}
                                </Typography>
                                <Typography variant="h6" component="h2">
                                    {data.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Stack>
        </PageLayout>
    )
}

export default BlogNavigationPage