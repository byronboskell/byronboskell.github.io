import React, {
    createContext,
    useCallback,
    useMemo,
    type PropsWithChildren,
} from "react";
import { CssBaseline } from "@mui/material";
import {
    ThemeProvider,
    useColorScheme,
    type PaletteMode,
} from "@mui/material/styles";
import { theme } from "../theme";

type ThemeModeContextValue = {
    mode: PaletteMode;
    toggleMode: () => void;
};

export const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(
    undefined
);

const ThemeModeBridge: React.FC<PropsWithChildren> = ({ children }) => {
    const { mode, systemMode, setMode } = useColorScheme();

    const effectiveMode = mode === "system" ? systemMode : mode;
    const activeMode: PaletteMode = effectiveMode === "dark" ? "dark" : "light";

    const toggleMode = useCallback(() => {
        setMode(activeMode === "light" ? "dark" : "light");
    }, [activeMode, setMode]);

    const contextValue = useMemo(
        () => ({ mode: activeMode, toggleMode }),
        [activeMode, toggleMode]
    );

    return (
        <ThemeModeContext.Provider value={contextValue}>
            {children}
        </ThemeModeContext.Provider>
    );
};

export const ThemeModeProvider: React.FC<PropsWithChildren> = ({ children }) => (
    <ThemeProvider theme={theme} defaultMode="system">
        <CssBaseline />
        <ThemeModeBridge>{children}</ThemeModeBridge>
    </ThemeProvider>
);