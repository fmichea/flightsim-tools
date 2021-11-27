import React from 'react';

import { Provider } from 'react-redux';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { createAppStore } from "state/store";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
      const store = createAppStore();
      const snapshotEngine = new Styletron();

      return (
          <StyletronProvider value={snapshotEngine}>
              <Provider store={store}>
                  <Story/>
              </Provider>
          </StyletronProvider>
      );
  },
];
