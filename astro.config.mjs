import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel/serverless';

import mdx from "@astrojs/mdx";

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [starlight({
    title: 'Flutter Starter Kit',
    description: 'A starter kit for building Flutter apps. Ship your Flutter app with Firebase in days, not months',
    logo: {
      src: './src/assets/logo.png',
    },
    favicon: './favicon.ico',
    social: {
      github: 'https://github.com/mahima-manik/',
      twitter: 'https://twitter.com/mahima_manik',
    },
    sidebar: [{
      label: 'Get Started',
      link: '/get-started/'
    }, {
      label: 'Guides',
      items: [{
        label: 'Run the Project',
        link: '/guides/run/'
      }, {
        label: 'Setup Firebase',
        link: '/guides/firebase/'
      }, {
        label: 'Add Product',
        link: '/guides/add-product/'
      }, {
        label: 'Release',
        link: '/guides/release/'
      },]
    }, {
      label: 'Functions',
      items: [{
        label: 'Provider',
        link: '/functions/provider/'
      }, {
        label: 'Authentication',
        link: '/functions/login/'
      }, {
        label: 'Firestore',
        link: '/functions/firestore/'
      },{
        label: 'Payments',
        link: '/functions/payments/'
      }, {
        label: 'Email',
        link: '/functions/emails/'
      },]
    }, {
      label: 'Components',
      items: [{
        label: 'Star Rating',
        link: '/components/rating/'
      },  {
        label: 'Image Gallery',
        link: '/components/gallery/'
      }, {
        label: 'Expandible Tile',
        link: '/components/tile/'
      }, {
        label: 'Quantity Selector',
        link: '/components/quantity/'
      }, ]
    }]
  }), mdx()],
});
