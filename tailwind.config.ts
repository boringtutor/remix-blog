// import type { Config } from "tailwindcss"
// import animateplugin from "tailwindcss-animate";

// const config: Config = {
//   darkMode: ["class"],
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./*.{js,ts,jsx,tsx,mdx}",
//     "components/**/*.{ts,tsx}",
//     "pages/**/*.{ts,tsx}",
//   ],
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     fontSize: {
//       h1: "2.5rem",
//       h2: "2rem",
//       h3: "1.75rem",
//       h4: "1.5rem",
//       h5: "1.25rem",
//       reg: "1rem",
//       sm: "0.813rem",
//     },
//     extend: {
//       spacing: {
//         "button-primary-width": "6.688rem",
//         "button-primary-height": "2.5rem",
//         "button-secondary-width": "8.75rem",
//         "button-secondary-height": "2.5rem",
//       },
//       colors: {
//         background: "hsl(var(--background))",
//         primary: "hsl(var(--primary))",
//         secondary: "hsl(var(--secondary))",
//         accent: "hsl(var(--accent))",
//         text: "hsl(var(--text))",
//         destructive: "hsl(var(--destructive))",
//       },
//       borderRadius: {
//         lg: `var(--radius)`,
//         md: `calc(var(--radius) - 2px)`,
//         sm: "calc(var(--radius) - 4px)",
//       },
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//         "gradient-linear":
//           "linear-gradient(from 90deg, rgba(1, 106, 112, 0.8) 0%, rgba(1, 106, 112, 0.8) 50%, rgba(1, 106, 112, 0.8) 100%",
//       },
//       fontFamily: {
//         // sans: ["var(--font-sans)", ...fontFamily.sans],
//         sans: ["var(--font-play)"],
//         mono: ["var(--font-lato-mono)"],
//       },
//       // // keyframes: {
//       // //   "accordion-down": {
//       // //     from: { height: 0 },
//       // //     to: { height: "var(--radix-accordion-content-height)" },
//       // //   },
//       // //   "accordion-up": {
//       // //     from: { height: "var(--radix-accordion-content-height)" },
//       // //     to: { height: 0 },
//       // //   },
//       // // },
//       // animation: {
//       //   "accordion-down": "accordion-down 0.2s ease-out",
//       //   "accordion-up": "accordion-up 0.2s ease-out",
//       // },
//     },
//   },
//   plugins: [animateplugin],//, require("@tailwindcss/typography")],
// }
// export default config



import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme.js'
import animatePlugin from 'tailwindcss-animate'

export default {
	content: ['./app/**/*.{ts,tsx,jsx,js}'],
	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
    fontSize: {
            h1: "2.5rem",
            h2: "2rem",
            h3: "1.75rem",
            h4: "1.5rem",
            h5: "1.25rem",
            reg: "1rem",
            sm: "0.813rem",
          },
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: {
					DEFAULT: 'hsl(var(--input))',
					invalid: 'hsl(var(--input-invalid))',
				},
				ring: {
					DEFAULT: 'hsl(var(--ring))',
					invalid: 'hsl(var(--foreground-destructive))',
				},
				background: 'hsl(var(--background))',
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					destructive: 'hsl(var(--foreground-destructive))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontFamily: {
				sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				// 1rem = 16px
				/** 80px size / 84px high / bold */
				mega: ['5rem', { lineHeight: '5.25rem', fontWeight: '700' }],
				/** 56px size / 62px high / bold */
				h1: ['3.5rem', { lineHeight: '3.875rem', fontWeight: '700' }],
				/** 40px size / 48px high / bold */
				h2: ['2.5rem', { lineHeight: '3rem', fontWeight: '700' }],
				/** 32px size / 36px high / bold */
				h3: ['2rem', { lineHeight: '2.25rem', fontWeight: '700' }],
				/** 28px size / 36px high / bold */
				h4: ['1.75rem', { lineHeight: '2.25rem', fontWeight: '700' }],
				/** 24px size / 32px high / bold */
				h5: ['1.5rem', { lineHeight: '2rem', fontWeight: '700' }],
				/** 16px size / 20px high / bold */
				h6: ['1rem', { lineHeight: '1.25rem', fontWeight: '700' }],

				/** 32px size / 36px high / normal */
				'body-2xl': ['2rem', { lineHeight: '2.25rem' }],
				/** 28px size / 36px high / normal */
				'body-xl': ['1.75rem', { lineHeight: '2.25rem' }],
				/** 24px size / 32px high / normal */
				'body-lg': ['1.5rem', { lineHeight: '2rem' }],
				/** 20px size / 28px high / normal */
				'body-md': ['1.25rem', { lineHeight: '1.75rem' }],
				/** 16px size / 20px high / normal */
				'body-sm': ['1rem', { lineHeight: '1.25rem' }],
				/** 14px size / 18px high / normal */
				'body-xs': ['0.875rem', { lineHeight: '1.125rem' }],
				/** 12px size / 16px high / normal */
				'body-2xs': ['0.75rem', { lineHeight: '1rem' }],

				/** 18px size / 24px high / semibold */
				caption: ['1.125rem', { lineHeight: '1.5rem', fontWeight: '600' }],
				/** 12px size / 16px high / bold */
				button: ['0.75rem', { lineHeight: '1rem', fontWeight: '700' }],
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [animatePlugin],
} satisfies Config
