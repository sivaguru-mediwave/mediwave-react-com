import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import InputField from '../components/FormElements/InputField';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form elements/Input',
  component: InputField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    type: {control:{ type:"select", options:["text", "email", "search", "url", "number"]}},
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    borderRadius: { control: {type: 'number', min: 0, max: 50 } },
    size: {defaultValue: 'small', control:{ type:"select", options:["small", "medium", "large"]}},
    disable: { control: {type: 'boolean'} },
  },
} as ComponentMeta<typeof InputField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const BasicInput = Template.bind({});
BasicInput.args = {
  label: 'First Name',
  placeholder: 'Enter the first name'
};

