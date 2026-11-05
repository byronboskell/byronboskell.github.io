import React, { useState } from "react";

import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import type { LinkValues } from "./site-navigation";

interface LinkDropDownProps {
    links: LinkValues[]
}

const LinkDropDown: React.FC<LinkDropDownProps> = ({
    links
}) => {

    // ...existing code...
    const { pathname } = useLocation();
    const [projectsAnchor, setProjectsAnchor] = useState<null | HTMLElement>(null);
    const projectsOpen = Boolean(projectsAnchor);
    // ...existing code...

    return (
        <>
            <Button
                color="inherit"
                aria-haspopup="menu"
                aria-expanded={projectsOpen ? "true" : undefined}
                aria-controls={projectsOpen ? "projects-menu" : undefined}
                onClick={(event) => setProjectsAnchor(event.currentTarget)}
                sx={{ textTransform: "none" }}
            >
                Projects
            </Button>
            <Menu
                id="projects-menu"
                anchorEl={projectsAnchor}
                open={projectsOpen}
                onClose={() => setProjectsAnchor(null)}
            >
                {links.map(({ label, to }) => (
                    <MenuItem
                        key={to}
                        component={Link}
                        to={to}
                        selected={pathname === to}
                        onClick={() => setProjectsAnchor(null)}
                    >
                        {label}
                    </MenuItem>
                ))}
            </Menu>
        </>)
}

export default LinkDropDown;