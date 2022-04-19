import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkbox from '../components/FormElements/Checkbox/Checkbox';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form elements/Checkbox',
  component: Checkbox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {defaultValue: 'default', control:{ type:"select", options:["default", "primary", "secondary"]}},
    size: {defaultValue: 'default', control:{ type:"select", options:["default", "small", "medium", "large"]}},
  },
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  label: 'Checkbox',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Checkbox',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  label: 'Checkbox',
};


