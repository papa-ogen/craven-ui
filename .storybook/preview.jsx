import "../src/index.css";

export const decorators = [
  (Story) => (
    <div className="dark bg-gray-1 text-slate-12 min-h-screen bg-logo-dark bg-no-repeat bg-cover bg-center">
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
  },
};
