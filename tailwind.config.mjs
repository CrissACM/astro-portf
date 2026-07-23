/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				dark: '#1C1C27',
				light: '#ECF0F3',
				primary: '#9C27B0', // 240,86,199
				primaryDark: '#1976D2', // 80,230,217
				card: '#DCE9E6',
				carDark: '#171721',
				carDarkL: '#191924',
			},
			fontFamily: {
				sans: ['Geist-Variable', ...fontFamily.sans],
			},
			keyframes: {
				'page-wipe': {
					'0%': { transform: 'translateX(0)', width: '100%' },
					'100%': { transform: 'translateX(100%)', width: '0' },
				},
				'fade-scale-in': {
					'0%': { opacity: '0', transform: 'translate(-50%, -50%) scale(0.95)' },
					'100%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' },
				},
			},
			animation: {
				'page-wipe': 'page-wipe 800ms ease-in-out forwards',
				'page-wipe-delay-1': 'page-wipe 800ms 200ms ease-in-out forwards',
				'page-wipe-delay-2': 'page-wipe 800ms 400ms ease-in-out forwards',
				'fade-scale-in': 'fade-scale-in 200ms ease-out forwards',
			},
			screens: {
				'2xl': { max: '1535px' },
				// => @media (max-width: 1535px) { ... }

				xl: { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				lg: { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				mg: { max: '960px' },
				// => @media (max-width: 767px) { ... }

				md: { max: '767px' },
				// => @media (max-width: 767px) { ... }

				sm: { max: '639px' },
				// => @media (max-width: 639px) { ... }

				xs: { max: '479px' },
				// => @media (max-width: 639px) { ... }
			},
		},
	},
	plugins: [],
}
