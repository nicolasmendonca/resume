import * as Chakra from '@chakra-ui/react';
import NextImage from 'next/image';

const BaseCard = Chakra.chakra('section', {
	baseStyle: {
		p: 6,
		mt: 6,
		borderRadius: 5,
		bg: 'gray.800',
		_first: { mt: 8 },
		_last: { pb: 6 },
	},
});

const ChakraNextImage = Chakra.chakra(NextImage, {
	shouldForwardProp: (prop) => ['alt', 'src', 'width', 'height'].includes(prop),
	baseStyle: {
		margin: '0 auto',
		objectFit: 'contain',
		maxHeight: {
			base: '24px',
			md: '36px',
		},
		ml: 2,
		_first: {
			ml: 0,
		},
	},
});

const HeadingImage: React.FC<{
	width: number | string;
	height: number | string;
	src: string;
	alt: string;
}> = (props) => {
	return (
		<Chakra.Box ml={4} _first={{ ml: 0 }}>
			<ChakraNextImage {...props} />
		</Chakra.Box>
	);
};

const Experience = {
	Card: (props: any) => {
		const bgColor = Chakra.useColorModeValue('gray.200', 'gray.800');
		return <BaseCard bgColor={bgColor} {...props} />;
	},
	ChakraNextImage,
	Text: Chakra.chakra('p', {
		baseStyle: {
			pt: 6,
			_last: {
				pb: 6,
			},
		},
	}),
	Heading: Chakra.chakra(Chakra.Flex, {
		baseStyle: {
			mt: 0,
			position: 'relative',
			alignItems: {
				base: 'flex-start',
				md: 'center',
			},
			justifyContent: 'space-between',
			flexDir: {
				base: 'column',
				md: 'row',
			},
		},
	}),
	HeadingTitle: Chakra.chakra('h3', {
		baseStyle: {
			fontSize: '24px',
			fontWeight: 'bold',
		},
	}),
	HeadingSubtitle: Chakra.chakra('p', {
		baseStyle: {
			fontSize: ['18px', '18px', '24px'],
			fontWeight: 'thin',
		},
	}),
	HeadingImages: Chakra.chakra(Chakra.Flex, {
		baseStyle: {
			mt: [2, 2, 0],
			alignItems: 'center',
		},
	}),
	HeadingImage,
	Link: Chakra.chakra(Chakra.Link, {
		baseStyle: {
			color: 'purple.400',
			fontWeight: 'bold',
			_hover: {
				textDecoration: 'underline',
			},
		},
	}),
};

export default Experience;
