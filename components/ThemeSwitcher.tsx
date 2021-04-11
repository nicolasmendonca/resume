import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface ThemeSwitcherProps {
  
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Button
        aria-label="Toggle theme"
        position="fixed"
        top="0"
        right="0"
        mt={0}
        onClick={toggleColorMode}
        variant="ghost"
        zIndex={2}
      >
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
  );
};

export default ThemeSwitcher;
