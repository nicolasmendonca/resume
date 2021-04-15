import React from 'react';
import * as Chakra from '@chakra-ui/react';
import ReactParticles from 'react-particles-js';

const CONFIG = {
	particlesHeight: '350px',
};

interface ParticlesProps {}

const Particles: React.FC<ParticlesProps> = () => {
	return (
		<Chakra.Box
			width="full"
			top="-1px"
			alignItems="flex-end"
			justifyContent="center"
			height={CONFIG.particlesHeight}
			background="linear-gradient(45deg, rgba(104,9,121,1) 15%, rgba(233,0,255,1) 100%)"
			position="relative"
			boxShadow="md"
		>
			<Chakra.Flex alignItems="center" justifyContent="center">
				<ReactParticles
					width="100vw"
					height={CONFIG.particlesHeight}
					params={{
						interactivity: {
							events: {
								onhover: {
									enable: true,
									mode: 'grab',
								},
							},
						},
					}}
				/>
			</Chakra.Flex>
		</Chakra.Box>
	);
};

export default Particles;
