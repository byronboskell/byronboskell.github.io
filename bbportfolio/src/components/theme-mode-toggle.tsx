import React, {
    useContext,
} from "react";

import { FormControlLabel, Switch } from "@mui/material";
import { ThemeModeContext } from "../context/theme-mode-context"

export const ThemeModeToggle: React.FC = () => {
    const context = useContext(ThemeModeContext);

    if (!context) {
        throw new Error("ThemeModeToggle must be used inside ThemeModeProvider");
    }

    const { mode, toggleMode } = context;

    return (
        <FormControlLabel
            label={mode === "dark" ? "Dark mode" : "Light mode"}
            control={
                <Switch
                    checked={mode === "dark"}
                    onChange={toggleMode}
                    slotProps={{ input: { "aria-label": "Toggle dark mode" } }}
                    sx={(theme) => ({
                        "& .MuiSwitch-switchBase.Mui-checked": {
                            color: mode === "dark"
                                ? theme.palette.common.white
                                : theme.palette.primary.main,
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                            backgroundColor: mode === "dark"
                                ? theme.palette.grey[500]
                                : theme.palette.primary.main,
                            opacity: 1,
                        },
                    })}
                />
            }
        />
    );
};