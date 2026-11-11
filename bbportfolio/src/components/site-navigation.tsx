import React from "react";
import { alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { ThemeModeToggle } from "./theme-mode-toggle";
import LinkDropDown from "./link-dropdown";
import SiteNavigationButton from "./site-navigation-button";

export interface LinkValues {
    label: string, to: string
}


const links: LinkValues[][] = [
    [
        { label: "Home", to: "/projects" }
    ],
    [
        { label: "Clear Call", to: "/projects/telehealth" },
        { label: "Lords of Illic", to: "/projects/illic" },
        { label: "Aboriginal Health Project", to: "/projects/ahp" },
    ],
    [
        { label: "Blog", to: "/blog" }
    ],
    [
        { label: "About", to: "/about" }
    ],
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
                    to="/projects"
                    variant="h6"
                    color="inherit"
                    sx={{ textDecoration: "none", fontWeight: 700, letterSpacing: 0.3 }}
                >
                    Byron Boskell
                </Typography>

                <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                    {links.map((subLinks) => {
                        if (subLinks.length == 1) {
                            const isActive = pathname === subLinks[0].to;

                            return <SiteNavigationButton link={subLinks[0]} isActive={isActive} />
                        }

                        return <LinkDropDown links={subLinks} />
                    })}

                </Box>
                <ThemeModeToggle />
            </Toolbar>
        </AppBar>
    );
};

export default SiteNavigation;