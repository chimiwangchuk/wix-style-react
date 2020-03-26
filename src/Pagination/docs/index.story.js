import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code,
  columns,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import Pagination from '..';

import * as examples from './examples';

const liveCode = config =>
  code({
    previewProps: {
      style: { backgroundColor: '#f0f4f7' },
    },
    components: allComponents,
    ...config,
  });

const example = config => baseExample({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Pagination,
  componentPath: '..',

  componentProps: {
    dataHook: storySettings.dataHook,
    totalPages: 13,
    currentPage: 5,
  },
  sections: [
    header({
      issueUrl: 'https://github.com/wix/wix-style-react/issues/new',
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/Pagination/',
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'Pagination component used for navigating between pages.',
            }),
          ]),

          importExample("import { Pagination } from 'wix-style-react';"),

          divider(),

          title('Examples'),

          example({
            title: 'Basic',
            source: examples.basic,
          }),

          example({
            title: 'Short',
            source: examples.short,
          }),

          example({
            title: 'Middle of pagination',
            source: examples.long,
          }),

          example({
            title: 'Full interactive',
            source: examples.interactive,
          }),
        ],
      }),
      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
