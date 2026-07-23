import type { ImageMetadata } from 'astro'
import calculatorImage from '../assets/projects/calculator.webp'
import calendarImage from '../assets/projects/Calendar.webp'
import cryptoImage from '../assets/projects/crypto.webp'
import galleryImage from '../assets/projects/gallery.webp'
import ogrosGameShopImage from '../assets/projects/ogros-game-shop.webp'
import pomodoroImage from '../assets/projects/pomodoro.webp'
import storeImage from '../assets/projects/storeSimple.webp'
import teslaImage from '../assets/projects/tesla-landing.webp'
import todoImage from '../assets/projects/to-do.webp'

export type ProjectCategory = 'vanilla' | 'web app' | 'mobile app'

export interface ProjectMember {
	name: string
	img: string
	github: string
	linkedin: string
}

export interface Project {
	id: number
	title: string
	date: string
	description: string
	image: ImageMetadata
	tags: string[]
	category: ProjectCategory
	github: string
	webapp: string
	member?: ProjectMember[]
}

export const projects: Project[] = [
	{
		id: 8,
		title: 'Ogros Game Shop',
		date: 'Jul 2026',
		description:
			'A full-stack e-commerce platform for video games, gift cards, and gaming products. It combines a multilingual storefront, an authenticated admin dashboard, and a NestJS API for catalog, orders, currencies, payments, and content management, backed by PostgreSQL and Prisma.',
		image: ogrosGameShopImage,
		tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Turborepo'],
		category: 'web app',
		github: 'https://github.com/CrissACM/ogrosgameshop',
		webapp: 'https://www.ogrosgameshop.com',
	},
	{
		id: 0,
		title: 'Cryptobase App',
		date: 'Jan 2022',
		description:
			'The cryptocurrency app allows you to monitor the real-time prices and trends of various cryptocurrencies, using the Coingecko API. With this app, you can follow the price changes minute by minute and get a comprehensive view of the ups and downs of cryptocurrencies in the market.',
		image: cryptoImage,
		tags: ['JavaScript', 'ReactJS', 'Coingecko API', 'Firebase', 'TailwindCSS'],
		category: 'web app',
		github: 'https://github.com/CrissACM/crypto-project',
		webapp: 'https://crypto-project-lime.vercel.app/',
	},
	{
		id: 1,
		title: 'To-do list',
		date: 'Oct 2021',
		description:
			"The Firebase-powered to-do list app is an efficient and real-time synchronized task management tool. It enables users to easily create, edit, and delete tasks. Thanks to Firebase, all updates are instantly reflected across all devices, ensuring a seamless and up-to-date user experience. This app simplifies task organization and enhances productivity by leveraging Firebase's cloud data management capabilities",
		image: todoImage,
		tags: ['JavaScript', 'ViteJS', 'Firebase', 'TailwindCSS'],
		category: 'web app',
		github: 'https://github.com/CrissACM/to-do-app',
		webapp: 'https://to-do-app-rho-sage.vercel.app/',
	},
	{
		id: 2,
		title: 'Gallery App',
		date: 'Sep 2021',
		description:
			'The gallery app is a user-friendly application designed for viewing and managing photos and videos. It provides an intuitive interface for users to organize and access their media content effortlessly. Users can create albums, sort and filter their media, and enjoy a visually pleasing experience while reliving their memories. With features like slideshow presentations and easy sharing options, the gallery app offers a convenient way to enjoy and showcase personal multimedia collections.',
		image: galleryImage,
		tags: ['JavaScript', 'NextJS', 'TailwindCSS'],
		category: 'web app',
		github: 'https://github.com/CrissACM/gallery-app.git',
		webapp: 'https://gallerylyart.vercel.app/',
	},
	{
		id: 3,
		title: 'Store Simple',
		date: 'Jan 2023',
		description:
			'Store made for global status management practice with Redux Toolkit and NextJS, in it you can see products, search, add to shopping cart as well as delete, purchase confirmation',
		image: storeImage,
		tags: ['JavaScript', 'NextJS', 'CSS', 'Redux'],
		category: 'web app',
		github: 'https://github.com/CrissACM/Store-With-Cars-simple',
		webapp: 'https://store-simple.vercel.app/',
	},
	{
		id: 4,
		title: 'Pomodoro',
		date: 'Feb 2023',
		description:
			"The Pomodoro mobile app, built with Expo and React Native, offers an efficient time management tool. Users can break their work into time intervals called 'Pomodoro', followed by short breaks, enhancing productivity and focus. The app features an intuitive interface, customizable notifications, and task completion tracking. It's an effective mobile solution for time management and productivity improvement on the go.",
		image: pomodoroImage,
		tags: ['JavaScript', 'React Native', 'Expo CLI'],
		category: 'mobile app',
		github: 'https://github.com/CrissACM/pomodoro',
		webapp: 'https://pomodoro-three-mauve.vercel.app/',
	},
	{
		id: 5,
		title: 'Calculator Dark/Light',
		date: 'Feb 2022',
		description: 'Simple calculator with light/dark mode',
		image: calculatorImage,
		tags: ['JavaScript'],
		category: 'vanilla',
		github: 'https://github.com/CrissACM/calculator-light-dark-js',
		webapp: 'https://calculator-light-dark-js.vercel.app/',
	},
	{
		id: 6,
		title: 'Tesla Landing',
		date: 'Oct 2023',
		description: 'Tesla landing page copy',
		image: teslaImage,
		tags: ['Astro'],
		category: 'vanilla',
		github: 'https://github.com/CrissACM/tesla-landing-page',
		webapp: 'https://tesla-landing-page-gold.vercel.app/',
	},
	{
		id: 7,
		title: 'Calendar',
		date: 'Oct 2023',
		description: 'Calendar application with authentication and event management for multiple users.',
		image: calendarImage,
		tags: ['Node', 'Express', 'React', 'Redux', 'MongoDB'],
		category: 'web app',
		github: 'https://github.com/CrissACM/tesla-landing-page',
		webapp: 'https://calendar-backend-khaki.vercel.app/',
	},
]
