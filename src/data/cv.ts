export interface BioProfile {
	name: string
	roles: string[]
	description: string
	resume: string
	x: string
	github: string
	linkedin: string
	insta: string
}

export interface SkillItem {
	name: string
	image?: string
}

export interface SkillGroup {
	title: string
	skills: SkillItem[]
}

export interface Experience {
	id: number
	img?: string
	role: string
	company: string
	location: string
	date: string
	desc: string
	highlights: string[]
	skills: string[]
}

export interface Education {
	id: number
	img?: string
	school: string
	location: string
	date: string
	desc: string
	degree: string
}

export const Bio: BioProfile = {
	name: 'Cristobal Colmenares',
	roles: [
		'Full Stack Developer',
		'Healthcare Platform Engineer',
		'Workflow Automation Architect',
		'Cross-Platform Mobile Developer',
		'AI-Powered Product Developer',
		'Lead Frontend Developer',
		'Real-Time Systems Developer',
	],
	description:
		'Full Stack Developer with 6 years of experience building scalable web and mobile products. I specialize in React, Node.js, NestJS, real-time systems, multi-tenant automation, and AI-powered features.',
	resume: '/CV.pdf',
	x: 'https://x.com/CrissACM1',
	github: 'https://github.com/CrissACM',
	linkedin: 'https://www.linkedin.com/in/crissacm',
	insta: 'https://www.instagram.com/crissacm1',
}

const lightIconSlugs = new Set(['nextdotjs', 'expo', 'prisma', 'socketdotio', 'twilio'])
const simpleIcon = (slug: string) =>
	`https://cdn.simpleicons.org/${slug}${lightIconSlugs.has(slug) ? '/EAF2F4' : ''}`
const skillNames = (items: Array<string | [string, string]>): SkillItem[] =>
	items.map((item) =>
		typeof item === 'string'
			? { name: item }
			: {
					name: item[0],
					image: item[1].startsWith('https://') ? item[1] : simpleIcon(item[1]),
				},
	)

export const skills: SkillGroup[] = [
	{
		title: 'Frontend',
		skills: skillNames([
			['HTML', 'html5'],
			['CSS', 'css'],
			['JavaScript', 'javascript'],
			['TypeScript', 'typescript'],
			['React', 'react'],
			['Vue', 'vuedotjs'],
			['Next.js', 'nextdotjs'],
			['Astro', 'astro'],
			['Tailwind CSS', 'tailwindcss'],
			['Redux', 'redux'],
			['Vite', 'vite'],
		]),
	},
	{
		title: 'Backend and Data',
		skills: skillNames([
			['Node.js', 'nodedotjs'],
			['NestJS', 'nestjs'],
			['PHP', 'php'],
			['PostgreSQL', 'postgresql'],
			['MySQL', 'mysql'],
			['Prisma', 'prisma'],
			['REST APIs', 'swagger'],
			['WebSockets', 'socketdotio'],
			['BullMQ', 'npm'],
			['Redis', 'redis'],
		]),
	},
	{
		title: 'Mobile and Platforms',
		skills: skillNames([
			['React Native', 'react'],
			['Expo', 'expo'],
			['Git', 'git'],
			['Docker', 'docker'],
			[
				'Playwright',
				'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
			],
			['Vitest', 'vitest'],
			['Twilio', 'twilio'],
			['i18next', 'i18next'],
		]),
	},
	{
		title: 'Professional',
		skills: skillNames([
			'Problem solving',
			'Adaptability',
			'Decision making',
			'Agile collaboration',
			'Communication',
			'Spanish - Native',
			'English - Intermediate',
		]),
	},
]

export const experiences: Experience[] = [
	{
		id: 0,
		role: 'Full Stack Developer',
		company: 'Simplified Practice',
		location: 'Dallas, TX, USA',
		date: '2025 - Present',
		desc: 'Building clinical, operational, and financial products for a large-scale, multi-tenant healthcare platform.',
		highlights: [
			'Architected and maintained a React 19 clinical SPA with approximately 1,800 components and 135 custom hooks.',
			'Delivered a workflow automation platform with React Flow, NestJS, BullMQ, tenant-isolated execution, retries, and granular tracking.',
			'Built AI-powered reporting and clinical-assistant features, plus real-time Twilio and WebSocket communication workflows.',
		],
		skills: [
			'React 19',
			'TypeScript',
			'Vite',
			'Redux',
			'NestJS',
			'BullMQ',
			'WebSockets',
			'Socket.IO',
			'Twilio',
			'AI integrations',
		],
	},
	{
		id: 1,
		role: 'Mobile Developer',
		company: 'The Vincent',
		location: 'Chile',
		date: '2025',
		desc: 'Architected a 59-screen cross-platform municipal health application for Android and iOS.',
		highlights: [
			'Implemented authentication, onboarding, secure token persistence, typed navigation, and reusable type-safe forms.',
			'Built hypertension, diabetes, preventive-care, community, directory, and health-access workflows.',
			'Improved offline continuity with persistent server-state caching and maintained EAS delivery environments.',
		],
		skills: [
			'React Native',
			'Expo SDK 53',
			'Expo Router',
			'TypeScript',
			'Zustand',
			'TanStack Query',
			'React Hook Form',
			'Zod',
			'NativeWind',
		],
	},
	{
		id: 2,
		img: 'https://creatorspace.imgix.net/users/clgtz0ecw00asq9010qw3laxa/AQ83Ksf09zGZVoCZ-IMG_7450.jpeg?w=300&h=300',
		role: 'Lead Frontend Developer',
		company: 'LatamEarth',
		location: 'Caracas, Venezuela',
		date: '2023 - 2025',
		desc: 'Led frontend development across a product suite of data-intensive web applications.',
		highlights: [
			'Created reusable React and Vue systems that reduced development time by 15%.',
			'Designed data tables and visualization tools that improved user comprehension and efficiency by 20%.',
			'Maintained scalable API patterns and deployment infrastructure, reducing deployment cycles by 30%.',
		],
		skills: ['React', 'Vue', 'TypeScript', 'Next.js', 'Tailwind CSS', 'REST APIs', 'Data visualization', 'UX design'],
	},
	{
		id: 3,
		img: 'https://ogrosgameshop.com/wp-content/uploads/elementor/thumbs/LOGO-OGROS-RENOVADO-02-qe7paie0f51bnbgsy7rulozivtoi16b1bme85hvzvk.png',
		role: 'Full Stack Architect & Developer',
		company: 'Ogrogameshop',
		location: 'Remote',
		date: '2022 - 2023',
		desc: 'Architected a multilingual, multi-currency gaming commerce platform and its administrative operations.',
		highlights: [
			'Unified Next.js storefront and admin apps, a NestJS API, and shared packages in a Bun and Turborepo monorepo.',
			'Delivered catalog, checkout, inventory, analytics, payment, currency, media, and localized content workflows.',
			'Established PostgreSQL integration tests, Playwright E2E coverage, Docker deployments, Prisma migrations, and CI gates.',
		],
		skills: ['Bun', 'Turborepo', 'Next.js', 'NestJS', 'TypeScript', 'Zod', 'PostgreSQL', 'Prisma', 'Playwright', 'Docker', 'Cloudflare R2'],
	},
	{
		id: 4,
		role: 'Web Administrator & Technical Maintenance',
		company: 'Jupiter Suministros C.A.',
		location: 'Bolivar, Venezuela',
		date: '2020 - 2021',
		desc: 'Maintained and upgraded company hardware, software, and web systems to improve reliability and employee productivity.',
		highlights: [],
		skills: ['Web administration', 'Hardware maintenance', 'Software maintenance', 'Technical support'],
	},
]

export const education: Education[] = [
	{
		id: 0,
		img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Logo_UDO.svg/1200px-Logo_UDO.svg.png',
		school: 'Universidad de Oriente',
		location: 'Anzoategui, Venezuela',
		date: '2017',
		desc: 'University studies focused on systems engineering.',
		degree: 'Systems Engineering',
	},
]
