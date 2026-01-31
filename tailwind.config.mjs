/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Brand colors inspired by the logo
				primary: {
					DEFAULT: '#1A2E44', // dark navy blue from logo
					light: '#2D4F71',
					dark: '#0F1A26', // darker navy
				},
				accent: {
					DEFAULT: '#B48E4E', // metallic gold/bronze from logo
					light: '#E0C283', // lighter gold highlight
					dark: '#8A6C2D', // darker bronze shadow
					soft: '#F5E6B3', // soft gold background
				},
			},
		},
	},
	plugins: [],
}
