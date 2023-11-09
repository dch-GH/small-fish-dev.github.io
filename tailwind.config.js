/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#FFFFFF',
			blue: '#2446f7',
			black: '#000000',
			darkblue: '#181c4c'
		},
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			boxShadow: {
				sm: '4px 4px black',
				md: '8px 8px black'
			}
		}
	},
	plugins: []
};
