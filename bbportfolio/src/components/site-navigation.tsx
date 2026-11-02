import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

const links = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Blog", href: "blog" },
    { label: "Contact", href: "contact" },
];

const SiteNavigation: React.FC = () => (
    <AppBar position="static" color="default" elevation={1} component="nav" aria-label="Main navigation">
        <Toolbar sx={{ justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
            <Typography
                component="a"
                href="home"
                variant="h6"
                color="inherit"
                sx={{ textDecoration: "none", fontWeight: 700 }}
            >
                Byron Boskell
            </Typography>

            <Box sx={{ display: "flex", gap: 1, overflowX: "auto" }}>
                {links.map(({ label, href }) => (
                    <Button key={href} component="a" href={href} color="inherit">
                        {label}
                    </Button>
                ))}
            </Box>
        </Toolbar>
    </AppBar>
);

export default SiteNavigation;