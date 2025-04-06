// Site Configuration
const siteConfig = {
	// Personal Information
	name: 'Marvin Calero',
	title: 'Technical Lead & Senior Software Engineer',
	email: 'hello@mcalero.dev',
	location: 'San Salvador, El Salvador',

	// Social Links
	github: 'https://github.com/mcalero11',
	linkedinUrl: 'https://www.linkedin.com/in/marvin-calero/',

	// About Section
	about: {
		title: 'Professional Summary',
		paragraphs: [
			'Highly accomplished Technical Lead with extensive experience designing and delivering scalable solutions in JavaScript/TypeScript and Python. Skilled at leveraging modern frameworks (React, Next.js, Nest.js) and DevOps best practices (AWS, Docker) to build cost-effective, secure, and high-performing applications.',
			'Adept at leading cross-functional teams, collaborating with stakeholders, and aligning engineering efforts with strategic business objectives. Recognized for driving innovation, optimizing system performance, and mentoring developers to foster continuous growth and success.'
		],
		skillsTitle: 'Technical Skills',
		skills: [
			'React.js',
			'Next.js',
			'Node.js',
			'TypeScript',
			'Nest.js',
			'React Native',
			'Express',
			'AWS',
			'Docker',
			'PostgreSQL',
			'MongoDB',
			'DynamoDB',
			'CI/CD',
			'Python'
		],
		educationTitle: 'Education',
		education: [
			{
				degree: "Bachelor's in Systems Engineering and Computer Networks",
				institution: 'Universidad Gerardo Barrios',
				period: '2016 - 2021'
			}
		],
		buttonText: 'Download CV',
		buttonLink:
			'https://drive.google.com/file/d/10HYiALewFuYYmCLJY54Vruy5Kl79JyW8/view?usp=sharing'
	},

	// LinkedIn Section
	linkedin: {
		title: 'Professional Experience',
		subtitle:
			'Over 7+ years of experience delivering scalable applications and leading development teams.',
		buttonText: 'Connect on LinkedIn',
		messageText: 'Send me a message',
		points: [
			'Technical Lead at NewCombin (2024 - present)',
			'Senior Frontend Developer at Thrivelab (2024)',
			'Senior Software Engineer at GBH (2021 - 2023)',
			'Full Stack Mobile Application Developer at A&B (2018 - 2020)'
		]
	},

	// Social Links for Footer
	socialLinks: [
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/marvin-calero/',
			icon: '<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>'
		},
		{
			name: 'GitHub',
			url: 'https://github.com/mcalero11',
			icon: '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>'
		},
		{
			name: 'Email',
			url: 'mailto:hello@mcalero.dev',
			icon: '<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" /><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />'
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com/mcalero11',
			icon: '<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />'
		}
	],

	// Navigation
	navigation: [
		{ name: 'Home', href: '#home' },
		{ name: 'About Me', href: '#about' },
		{ name: 'Experience', href: '#linkedin' }
	]
}

export default siteConfig
