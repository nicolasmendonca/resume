import React from 'react';
import * as Chakra from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface ThemeSwitcherProps {}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
	const { colorMode, toggleColorMode } = Chakra.useColorMode();
	const bgColor = Chakra.useColorModeValue('gray.100', 'gray.900');
	return (
		<Chakra.Button
			aria-label="Toggle theme"
			position="fixed"
			bottom={[0, 0, 'initial']}
			top={['initial', 'initial', 0]}
			right="0"
			mt={0}
			onClick={toggleColorMode}
			variant="ghost"
			bg={[bgColor, bgColor, 'transparent']}
			zIndex="banner"
		>
			{colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
		</Chakra.Button>
	);
};

export default ThemeSwitcher;
