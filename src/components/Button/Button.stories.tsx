import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = (args) => (
  <Button data-testId="InputField-id" {...args}>Hello World</Button>
);
Primary.args = {
  color: '#9E0059',
  bgColor: '#FFBD00',
  fontSize: '14px',
  borderRadius: '4px',
  padding: '10px 15px',
};
