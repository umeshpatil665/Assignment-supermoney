/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	  ],
  theme: {

  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
			

  		},
		  screens: {
			"xs": "500px",
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			'custom-bg': 'rgba(10, 71, 76, 0.04)',
			'green-bg':"rgb(7, 49, 53)",
			'form-color':"#4A4A4A",
			'form-sublable-color':"#6E6E6E",
			'gold-text':"#FFD700"
  		},
		  fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
			sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
		  },
		  borderColor:{
			greenBorder:"#0a474c"
		  },
		  zIndex: {
			999999: "999999",
			99999: "99999",
			9999: "9999",
			999: "999",
			99: "99",
			9: "9",
			1: "1",
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
