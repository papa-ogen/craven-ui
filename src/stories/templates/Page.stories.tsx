import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Footer, Header, Heading, Link, Page, Text } from "../..";
import CStudio from "../../assets/icons/CStudio";
import { Default } from "../form/LoginForm.stories";

export default {
  title: "Templates/Page",
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = ({ children, ...args }) => (
  <main>
    <Header>
      <div>
        <CStudio height="34px" color="#ffffff" />
      </div>
      <div className="flex grow justify-center">
        <nav className="space-x-4 max-sm:text-sm">
          <Link ariaLabel="Home Link">Home</Link>
          <Link ariaLabel="About Link">About</Link>
          <Link ariaLabel="Contact Us Link">Contact Us</Link>
        </nav>
      </div>
    </Header>
    <div className="py-16 px-8">
      <Page {...args}>{children}</Page>
    </div>
    <Footer>
      <div className="p-4 md:p-8 flex items-center border-b-[1px] border-slate-10 justify-center">
        <Text size="base">Find me on Social Media</Text>
        <Link
          ariaLabel="Find me on LinkedIn"
          color="text-social-linkedin"
          url="https://www.linkedin.com/in/j%C3%B6rgen-thelin-48693a29/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mx-4 -mt-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </Link>
        <Link
          ariaLabel="Find me on Github"
          hoverColor="text-social-github"
          color="text-slate-12"
          url="https://github.com/papa-ogen"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mx-1 -m-1"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </Link>
      </div>
    </Footer>
  </main>
);

export const ContentPage = Template.bind({});
ContentPage.args = {
  title: "Content Page",
  children: (
    <div>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
        aspernatur?
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
        sollicitudin ante, eget elementum augue. Aliquam eget ante scelerisque,
        imperdiet lacus a, vehicula nibh. Cras nibh odio, egestas ut nibh a,
        congue finibus libero. Pellentesque diam nibh, sollicitudin at purus in,
        accumsan semper ipsum. Pellentesque dictum in turpis at commodo. Duis
        diam eros, efficitur ut libero sit amet, congue mollis tortor.
      </Text>
      <Heading type="subBlockTitle">Lorem Ipsum</Heading>
      <Text>
        Etiam lorem quam, blandit eu mi at, consequat interdum est. Sed rhoncus
        sed velit eu dignissim. Ut lobortis elit vitae tortor aliquet blandit.
        Maecenas lacus nisl, placerat sed auctor quis, dignissim a erat.
        Curabitur id leo sapien. Mauris maximus viverra magna ultricies
        volutpat. Donec vehicula dui in dolor ullamcorper consectetur.
      </Text>
      <Heading type="subBlockTitle">Lorem Ipsum</Heading>
      <Text>
        Nullam sem purus, laoreet eu sem ac, interdum convallis massa. Morbi
        pharetra ligula elit, gravida ultrices ex ornare ac. Aenean ac facilisis
        lectus. Maecenas a lacinia nibh. Pellentesque porttitor lobortis lorem
        in commodo. Nam condimentum velit laoreet interdum pretium. Morbi
        volutpat elit velit, quis rhoncus dui egestas eu. Nullam porttitor at
        elit vel blandit. Sed in tellus nisl.
      </Text>
      <Text>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Mauris urna purus, fermentum sed tincidunt et, maximus in
        turpis. Pellentesque aliquet gravida finibus.{" "}
        <Link url="#" ariaLabel="Link">
          Aliquam
        </Link>{" "}
        sollicitudin eu risus quis consequat.
      </Text>
    </div>
  ),
};

export const LoginPage = Template.bind({});
LoginPage.args = {
  title: "Login Page",
  children: (
    <>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
        aspernatur?
      </Text>
      <Heading type="subBlockTitle">Lorem Ipsum</Heading>
      <Text>
        Nulla nam delectus cupiditate assumenda illum earum odit hic repellat
        ex, excepturi aspernatur temporibus mollitia quo, aperiam eius molestiae
        vero. <Link ariaLabel="Forgot Password Link">Forgot Password</Link>
      </Text>
      <div className="flex max-w-sm py-4">
        <Default />
      </div>
      <Heading type="subSubBlockTitle">Lorem Ipsum</Heading>
      <Text size="xs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet
        provident deserunt voluptas repudiandae rem commodi dolore, inventore
        distinctio asperiores dicta mollitia iure quis eligendi? Tempore ea
        accusantium illum officia!
      </Text>
    </>
  ),
};
