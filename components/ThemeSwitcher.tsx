import React from 'react';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface ThemeSwitcherProps {}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue('gray.100', 'gray.900');
	return (
		<Button
			aria-label="Toggle theme"
			position="fixed"
			bottom={[0, 0, 'initial']}
			top={['initial', 'initial', 0]}
			right="0"
			mt={0}
			onClick={toggleColorMode}
			variant="ghost"
			bg={[bgColor, bgColor, 'transparent']}
			zIndex={2}
		>
			{colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
		</Button>
	);
};

export default ThemeSwitcher;
