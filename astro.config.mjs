import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Flutter Starter Kit',
			social: {
				github: 'https://github.com/mahima-manik/flutter-starter-kit',
			},
			sidebar: [
				{
					label: 'Get Started',
					link: '/get_started/',
				},
				{
					label: 'Guides',
					items: [
						{
							label: 'Run the Project',
							link: '/guides/run/',
						},
						{
							label: 'Setup Firebase',
							link: '/guides/firebase/',
						},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
