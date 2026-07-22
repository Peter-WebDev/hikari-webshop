"use client";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { IconButton, Tooltip } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { useEffect, useState } from "react";

const iconSize = {
  fontSize: { md: "2.5rem", sm: "2rem", xs: "1.8rem" },
};

const ThemeToggle = () => {
  const { mode, systemMode, setMode } = useColorScheme();

  // The resolved mode is unknown until after hydration, so render a
  // placeholder first to keep server and client markup identical.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <IconButton aria-label="Toggle color theme" disabled>
        <DarkModeOutlinedIcon sx={iconSize} />
      </IconButton>
    );
  }

  const resolvedMode = mode === "system" ? systemMode : mode;
  const nextMode = resolvedMode === "dark" ? "light" : "dark";

  return (
    <Tooltip title={`Switch to ${nextMode} mode`}>
      <IconButton
        aria-label={`Switch to ${nextMode} mode`}
        onClick={() => setMode(nextMode)}
      >
        {resolvedMode === "dark" ? (
          <LightModeOutlinedIcon sx={iconSize} />
        ) : (
          <DarkModeOutlinedIcon sx={iconSize} />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
