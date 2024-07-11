import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [starlight({
    title: 'Flutter Starter Kit',
    social: {
      github: 'https://github.com/mahima-manik/flutter-starter-kit'
    },
    sidebar: [{
      label: 'Get Started',
      link: '/get_started/'
    }, {
      label: 'Guides',
      items: [{
        label: 'Run the Project',
        link: '/guides/run/'
      }, {
        label: 'Setup Firebase',
        link: '/guides/firebase/'
      }, {
        label: 'Release',
        link: '/guides/release/'
      }]
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
        label: 'Rating',
        link: '/components/rating/'
      }, {
        label: 'Tile',
        link: '/components/tile/'
      }, {
        label: 'Gallery',
        link: '/components/gallery/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), mdx()]
});
