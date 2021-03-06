interface ICourse {
	name: string;
	instructor: string;
	imageUrl: string;
	height: string | number;
	width: string | number;
	length: string;
	percentageCompleted: number;
}

export const myCourses: ICourse[] = [
	{
		name: 'Epic React',
		instructor: 'Kent C. Dodds',
		imageUrl: '/courses/epic-react.gif',
		height: 200,
		width: 300,
		length: '19 Hours',
		percentageCompleted: 100,
	},
	{
		name: 'Testing Javascript',
		instructor: 'Kent C. Dodds',
		imageUrl: '/courses/testing-javascript.jpeg',
		height: 200,
		width: 300,
		length: '8 Hours',
		percentageCompleted: 100,
	},
	{
		name: 'React - The Complete Guide',
		instructor: 'Maximilian Schwarzmüller',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/1362070_b9a1_2.jpg',
		height: 160,
		width: 320,
		length: '72 Hours',
		percentageCompleted: 54,
	},
	{
		name: 'Advanced Angular: MEAN Stack',
		instructor: 'Fernando Herrera',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/1420028_b32f_3.jpg',
		height: 160,
		width: 320,
		length: '32 Hours',
		percentageCompleted: 52,
	},
	{
		name: 'Python for Data Science and Machine Learning Bootcamp',
		instructor: 'Jose Portilla',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/903744_8eb2.jpg',
		height: 160,
		width: 320,
		length: '25 Hours',
		percentageCompleted: 20,
	},
	{
		name: 'Build a Backend REST API with Python & Django - Advanced (TDD)',
		instructor: 'Mark Winterbottom',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/2045310_f8a2_6.jpg',
		height: 160,
		width: 320,
		length: '8 Hours',
		percentageCompleted: 100,
	},
	{
		name: 'Build a Backend REST API with Python & Django - Beginner',
		instructor: 'Mark Winterbottom',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/2045310_f8a2_6.jpg',
		height: 160,
		width: 320,
		length: '5 Hours',
		percentageCompleted: 100,
	},
	{
		name: 'The Complete Python 3 Course: Beginner to Advanced!',
		instructor: 'Joseph Delgadillo',
		imageUrl: 'https://img-b.udemycdn.com/course/480x270/882826_4687_3.jpg',
		height: 160,
		width: 320,
		length: '18 Hours',
		percentageCompleted: 50,
	},
	{
		name: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
		instructor: 'Jonas Schmedtmann',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/1026604_790b_2.jpg',
		height: 160,
		width: 320,
		length: '28 Hours',
		percentageCompleted: 46,
	},
	{
		name: 'The Complete Sketch 5 Course - Design Apps & Websites 2020',
		instructor: 'Rob Percival',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/1855830_155f_4.jpg',
		height: 160,
		width: 320,
		length: '16 Hours',
		percentageCompleted: 49,
	},
	{
		name: 'The Complete React Developer Course (w/ Hooks and Redux)',
		instructor: 'Andrew Mead',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/1286908_1773_6.jpg',
		height: 160,
		width: 320,
		length: '39 Hours',
		percentageCompleted: 63,
	},
	{
		name: 'Angular: From Zero to Hero (Legacy)',
		instructor: 'Fernando Herrera',
		imageUrl: 'https://img-b.udemycdn.com/course/480x270/1075334_8b5f_4.jpg',
		height: 160,
		width: 320,
		length: '36 Hours',
		percentageCompleted: 57,
	},
	{
		name: 'Laravel 2019, the complete guide with real world projects',
		instructor: 'Kati Frantz',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/1064104_d365_3.jpg',
		height: 160,
		width: 320,
		length: '24 Hours',
		percentageCompleted: 64,
	},
	{
		name: 'Web Accessibility: Learn Best Practices, Tools & Techniques',
		instructor: 'Loop',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/302536_4b87_3.jpg',
		height: 160,
		width: 320,
		length: '9 Hours',
		percentageCompleted: 32,
	},
	{
		name: 'Ionic 2/3: Build Android and iOS apps from scratch (legacy)',
		instructor: 'Fernando Herrera',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/1145678_760a_6.jpg',
		height: 160,
		width: 320,
		length: '20 Hours',
		percentageCompleted: 60,
	},
	{
		name: 'The Modern GraphQL Bootcamp (with Node.js and Apollo)',
		instructor: 'Andrew Mead',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/1720558_d57e.jpg',
		height: 160,
		width: 320,
		length: '24 Hours',
		percentageCompleted: 42,
	},
	{
		name: 'Testing Angular 4 (previously Angular 2) Apps with Jasmine',
		instructor: 'Mosh Hamedani',
		imageUrl: 'https://img-b.udemycdn.com/course/480x270/1211596_127c_3.jpg',
		height: 160,
		width: 320,
		length: '2 Hours',
		percentageCompleted: 100,
	},
	{
		name: 'Symfony 3 - Master the Framework',
		instructor: 'Víctor Robles',
		imageUrl: 'https://img-a.udemycdn.com/course/480x270/690484_0388_2.jpg',
		height: 160,
		width: 320,
		length: '12 Hours',
		percentageCompleted: 44,
	},
];
