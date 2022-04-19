import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SelectOption from '../components/FormElements/Select/SelectOption';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Form elements/Select',
  component: SelectOption,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof SelectOption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectOption> = (args) => <SelectOption {...args} />;

export const BasicSelect = Template.bind({});
BasicSelect.args = {
};

