import { Button, ContextProvider, Page, Paragraph } from "./index";

function App() {
  return (
    <ContextProvider>
      <Page title="Craven UI">
        <Paragraph>A simple UI library</Paragraph>
        <Button>Hello World</Button>
      </Page>
    </ContextProvider>
  );
}

export default App;
