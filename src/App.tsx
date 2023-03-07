import { Button, ContextProvider, Heading, Page, Paragraph } from "./index";

function App() {
  return (
    <ContextProvider>
      <div className="bg-logo bg-no-repeat bg-cover bg-center min-h-screen">
        <Heading>C Studio AB</Heading>
        <Page title="Craven UI">
          <Paragraph>A simple UI library</Paragraph>
          <Button>Hello World</Button>
        </Page>
      </div>
    </ContextProvider>
  );
}

export default App;
