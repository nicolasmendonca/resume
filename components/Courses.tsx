import React from 'react';
import * as Chakra from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Experience from './experience/Experience';
import { myCourses } from '../data/courses';

interface CoursesProps {}

const Courses: React.FC<CoursesProps> = () => {
	return (
		<Chakra.Box>
			<Carousel
				showDots
				autoPlay
				autoPlaySpeed={3000}
				infinite
				responsive={{
					desktop: {
						breakpoint: { max: 3000, min: 1024 },
						items: 5,
						slidesToSlide: 3, // optional, default to 1.
					},
					tablet: {
						breakpoint: { max: 1024, min: 464 },
						items: 2,
						slidesToSlide: 2, // optional, default to 1.
					},
					mobile: {
						breakpoint: { max: 464, min: 0 },
						items: 1,
						slidesToSlide: 1, // optional, default to 1.
					},
				}}
			>
				{myCourses.map(({ name, instructor, imageUrl, height, width, percentageCompleted, length }) => (
					<Experience.Card
						key={name}
						display="inline-block"
						mx={4}
						verticalAlign="top"
						height="380px"
						width="325px"
						sx={{
							marginTop: '1.5rem !important',
							marginBottom: '1.5rem',
						}}
					>
						<Chakra.Stack justifyContent="space-between" height="full">
							<Chakra.Box minHeight="70px">
								<Chakra.Heading fontSize="xl" mb={2} maxWidth="full" whiteSpace="normal">
									{name}
								</Chakra.Heading>
								<Chakra.Text>{instructor}</Chakra.Text>
							</Chakra.Box>
							<Chakra.Image src={imageUrl} height={height} width={width} fit="contain" />
							<Chakra.Box>
								<Chakra.Text py={2}>Course Length: {length}</Chakra.Text>
								<Chakra.Progress colorScheme="green" size="sm" value={percentageCompleted} />
							</Chakra.Box>
						</Chakra.Stack>
					</Experience.Card>
				))}
			</Carousel>
		</Chakra.Box>
	);
};

export default Courses;
