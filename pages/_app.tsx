import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react";

const ColorContainerClassProvider: React.FC = ({children}) => {
  const {colorMode} = useColorMode();
  return <main className={colorMode}>{children}</main>
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider >
      {/* <ColorModeProvider options={{
        initialColorMode: 'dark',
      }}> */}
        {/* <ColorContainerClassProvider> */}
          <Component {...pageProps} />
        {/* </ColorContainerClassProvider> */}
      {/* </ColorModeProvider> */}
    </ChakraProvider>
  );
}

export default MyApp;
