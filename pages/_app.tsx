import { ChakraProvider } from '@chakra-ui/react';
import '../styles/base.scss';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
