import React from 'react';
import { Box, Flex } from '@chakra-ui/react'
import ReactParticles from "react-particles-js";


const CONFIG = {
  particlesHeight: "350px",
};

interface ParticlesProps {
}

const Particles: React.FC<ParticlesProps> = () => {
  return (
    <Box
      width="full"
      top="-1px"
      alignItems="flex-end"
      justifyContent="center"
      height={CONFIG.particlesHeight}
      background="linear-gradient(45deg, rgba(104,9,121,1) 15%, rgba(233,0,255,1) 100%)"
      position="relative"
      boxShadow="md"
    >
      <Flex alignItems="center" justifyContent="center">
        <ReactParticles
          width="100vw"
          height={CONFIG.particlesHeight}
          params={{
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                },
              },
            },
          }}
        />
      </Flex>
    </Box>
  );
};

export default Particles;
