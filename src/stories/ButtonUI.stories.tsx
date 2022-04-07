import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import Button from '../components/UI/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form elements/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {defaultValue: 'small', control:{ type:"select", options:["default", "small", "medium", "large"]}},
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  variant: 'primary',
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Button',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  label: 'Button',
};

export const Rounded = Template.bind({});
Rounded.args = {
  variant: 'rounded',
  label: 'Button',
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  label: 'Button',
};

