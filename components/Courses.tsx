import React from 'react';
import * as Chakra from '@chakra-ui/react';
import Experience from './experience/Experience';
import { myCourses } from '../data/courses';

interface CoursesProps {}

const Courses: React.FC<CoursesProps> = () => {
	return (
		<Chakra.Box overflow="auto" whiteSpace="nowrap">
			<Chakra.Box width="15vw" height="0" verticalAlign="top" display={['none', 'none', 'inline-block']} />
			{myCourses.map(({ name, instructor, imageUrl, height, width, percentageCompleted, length }) => (
				<Experience.Card
					display="inline-block"
					mx={4}
					verticalAlign="top"
					height="380px"
					width="348px"
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
							<Chakra.Text>Course Length: {length}</Chakra.Text>
							<Chakra.Progress colorScheme="green" size="sm" value={percentageCompleted} />
						</Chakra.Box>
					</Chakra.Stack>
				</Experience.Card>
			))}
			<Chakra.Box width="15vw" height="0" verticalAlign="top" display={['none', 'none', 'inline-block']} />
		</Chakra.Box>
	);
};

export default Courses;
