import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const links = [
    { label: "Home", to: "/home" },
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
];

const SiteNavigation: React.FC = () => (
    <AppBar position="static" color="default" elevation={1} component="nav" aria-label="Main navigation">
        <Toolbar sx={{ justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
            <Typography
                component={Link}
                to="/home"
                variant="h6"
                color="inherit"
                sx={{ textDecoration: "none", fontWeight: 700 }}
            >
                Byron Boskell
            </Typography>

            <Box sx={{ display: "flex", gap: 1, overflowX: "auto" }}>
                {links.map(({ label, to }) => (
                    <Button key={to} component={Link} to={to} color="inherit">
                        {label}
                    </Button>
                ))}
            </Box>
        </Toolbar>
    </AppBar>
);

export default SiteNavigation;