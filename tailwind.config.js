const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#FFFFFF',
			blue: '#2446f7',
			black: '#000000',
			darkblue: '#181c4c',
			gray: '#e2e2e2',
			lightblue: '#6a81f8'
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			textShadow: {
				heavy: '2px 2px 2px rgba(0, 0, 0, 1)',
				DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.5)'
			},
			boxShadow: {
				xs: '3px 3px black',
				sm: '4px 4px black',
				md: '8px 8px black'
			},
			backgroundImage: {
				pixel: "url('/home/pixel-overlay.png')",
				'pixel-white': "url('/home/pixel-overlay-white.png')"
			},
			backgroundSize: {
				pixel: '7px',
				'pixel-large': '14px'
			},
			keyframes: {
				scrolling: {
					'0%': {
						backgroundPosition: '0% 0%'
					},
					'50%': {
						backgroundPosition: '50% 50%'
					},
					'100%': {
						backgroundPosition: '100% 100%'
					}
				}
			},
			animation: {
				scroll: 'scrolling 120s infinite linear'
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '100%'
					}
				}
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value
					})
				},
				{ values: theme('textShadow') }
			);
		})
	]
};
