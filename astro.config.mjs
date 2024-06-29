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
					label: 'Functions',
					items: [
						{
							label: 'User authentication',
							link: '/functions/login/',
						},
						{
							label: 'Profile',
							link: '/functions/profile/',
						},
						{
							label: 'Provider',
							link: '/functions/provider/',
						},
						{
							label: 'Firestore',
							link: '/functions/firestore/',
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
