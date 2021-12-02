import React from 'react';

import { Provider } from 'react-redux';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { createAppStore } from "state/store";

import 'reset-css';
import 'antd/dist/antd.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const snapshotEngine = new Styletron();

export const decorators = [
  (Story) => {
      const store = createAppStore();

      return (
          <StyletronProvider value={snapshotEngine}>
              <Provider store={store}>
                  <Story/>
              </Provider>
          </StyletronProvider>
      );
  },
];
