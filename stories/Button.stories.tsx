import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'button clicked' },
    children: {
      defaultValue: 'Default text',
    },
  },
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary button',
  onClick: action('secondary button clicked'),
};

// export const Default = () => <Button variant="primary">Click me</Button>;

// export const Secondary = () => <Button variant="secondary">Click me</Button>;
