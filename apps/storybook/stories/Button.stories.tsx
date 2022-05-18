import React from 'react';
import Button from 'ui/components/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default { component: Button } as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = Template.bind({});

Default.args = {};
