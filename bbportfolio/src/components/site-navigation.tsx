import React from "react";
import { alpha } from "@mui/material/styles";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ThemeModeToggle } from "./theme-mode-toggle";

const links = [
    { label: "Home", to: "/home" },
    { label: "About", to: "/about" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
];

const SiteNavigation: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <AppBar
            component="nav"
            aria-label="Main navigation"
            position="static"
            color="primary"
            elevation={0}
            sx={(theme) => ({
                bgcolor: alpha(
                    theme.palette.primary.main,
                    0.4,
                ),
                color: theme.palette.text.primary,
            })}
        >
            <Toolbar sx={{ minHeight: 72, justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
                <Typography
                    component={Link}
                    to="/home"
                    variant="h6"
                    color="inherit"
                    sx={{ textDecoration: "none", fontWeight: 700, letterSpacing: 0.3 }}
                >
                    Byron Boskell
                </Typography>

                <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                    {links.map(({ label, to }) => {
                        const isActive = pathname === to;

                        return (
                            <Button
                                key={to}
                                component={Link}
                                to={to}
                                color="inherit"
                                aria-current={isActive ? "page" : undefined}
                                sx={(theme) => ({
                                    borderRadius: 2,
                                    fontWeight: isActive ? 700 : 500,
                                    textTransform: "none",
                                    bgcolor: isActive
                                        ? alpha(theme.palette.primary.contrastText, 0.16)
                                        : "transparent",
                                    "&:hover": {
                                        bgcolor: alpha(theme.palette.primary.contrastText, 0.12),
                                    },
                                })}
                            >
                                {label}
                            </Button>
                        );
                    })}
                </Box>
                <ThemeModeToggle />
            </Toolbar>
        </AppBar>
    );
};

export default SiteNavigation;