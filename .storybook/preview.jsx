import { themes } from "@storybook/theming";

import "../src/index.css";

export const decorators = [
  (Story) => (
    <div className="dark bg-gray-1 text-slate-12 min-h-screen bg-logo bg-no-repeat bg-cover bg-center">
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  darkMode: {
    current: "dark",
    // Override the default dark theme
    // dark: { ...themes.dark, appBg: "black" },
    // Override the default light theme
    // light: { ...themes.normal, appBg: "red" },
  },
};
