import React from 'react';
import * as Chakra from '@chakra-ui/react';
import Experience from './experience/Experience';

interface ICourseCardProps {
	name: string;
	instructor: string;
	imageUrl: string;
	height: string | number;
	width: string | number;
	length: string;
	percentageCompleted: number;
}

const CourseCard: React.FC<ICourseCardProps> = ({
	name,
	instructor,
	imageUrl,
	height,
	width,
	length,
	percentageCompleted,
}) => {
	return (
		<Experience.Card
			display="inline-block"
			mx={4}
			verticalAlign="top"
			height="360px"
			width="348px"
			sx={{
				marginTop: '1.5rem !important',
				marginBottom: '1.5rem',
			}}
		>
			<Chakra.Stack justifyContent="space-between" height="full">
				<Chakra.Box>
					<Chakra.Heading fontSize="xl" mb={2}>
						{name}
					</Chakra.Heading>
					<Chakra.Text>{instructor}</Chakra.Text>
					<Chakra.Image src={imageUrl} height={height} width={width} fit="contain" />
				</Chakra.Box>
				<Chakra.Box>
					<Chakra.Text>Course Length: {length}</Chakra.Text>
					<Chakra.Progress colorScheme="green" size="sm" value={percentageCompleted} />
				</Chakra.Box>
			</Chakra.Stack>
		</Experience.Card>
	);
};

interface CoursesProps {}

const Courses: React.FC<CoursesProps> = () => {
	return (
		<Chakra.Box overflow="auto" whiteSpace="nowrap">
			<Chakra.Box width="240px" height="0" verticalAlign="top" display={['none', 'none', 'inline-block']} />
			<CourseCard
				name="Epic React"
				instructor="Kent C. Dodds"
				imageUrl="/courses/epic-react.gif"
				height={200}
				width={300}
				length="19 Hours"
				percentageCompleted={100}
			/>
			<CourseCard
				name="Testing Javascript"
				instructor="Kent C. Dodds"
				imageUrl="/courses/testing-javascript.jpeg"
				height={200}
				width={300}
				length="8 Hours"
				percentageCompleted={100}
			/>
			<CourseCard
				name="React - The Complete Guide"
				instructor="Maximilian Schwarzmüller"
				imageUrl="https://img-a.udemycdn.com/course/240x135/1362070_b9a1_2.jpg?05NqxbuW3DZWKy6cSFJl9Z_AKXsrcTb05CjCgs2G28i9eFQpJ36_ECbQFUHUe3CvUt2AL4CN_SVV_2wubrpIMNGkknYdCWqSUSMNDGa-x3yyVoBPR-jbfryYkIG-aJyf"
				height={135}
				width={240}
				length="72 Hours"
				percentageCompleted={54}
			/>
			<Chakra.Box width="240px" height="1px" display={['none', 'none', 'inline-block']} />
		</Chakra.Box>
	);
};

export default Courses;
