import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header as CHeader, Heading, Link, Page, Text } from "../..";
import CStudio from "../../assets/icons/CStudio";
import { Default } from "../form/LoginForm.stories";

export default {
  title: "Templates/Header",
  component: CHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof CHeader>;

const Template: ComponentStory<typeof CHeader> = () => (
  <main>
    <CHeader>
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
    </CHeader>
    <div className="pt-14">
      <Page title="Welcome To Craven UI">
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
          aspernatur?
        </Text>
        <Heading type="subBlockTitle">Lorem Ipsum</Heading>
        <Text>
          Nulla nam delectus cupiditate assumenda illum earum odit hic repellat
          ex, excepturi aspernatur temporibus mollitia quo, aperiam eius
          molestiae vero.{" "}
          <Link ariaLabel="Forgot Password Link">Forgot Password</Link>
        </Text>
        <div className="flex max-w-sm py-4">
          <Default />
        </div>
        <Heading type="subSubBlockTitle">Lorem Ipsum</Heading>
        <Text size="xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          amet provident deserunt voluptas repudiandae rem commodi dolore,
          inventore distinctio asperiores dicta mollitia iure quis eligendi?
          Tempore ea accusantium illum officia!
        </Text>
      </Page>
    </div>
  </main>
);

export const Header = Template.bind({});
Header.args = {};
