import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextArea from '../components/FormElements/TextArea/TextArea';



// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form elements/Textarea',
  component: TextArea,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    borderRadius: { control: {type: 'number', min: 0, max: 50 } },
    rows: { control: {type: 'number', min: 0, max: 50 } },
    size: {defaultValue: 'default', control:{ type:"select", options:["default", "small", "medium", "large"]}},
    disable: { control: {type: 'boolean'} },
  },
} as ComponentMeta<typeof TextArea>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const BasicTextArea = Template.bind({});
BasicTextArea.args = {
  label: 'Message',
  placeholder: 'Enter the message',
};

