import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MailIcon } from "@heroicons/react/outline";
import { Input } from "./Input";

export default {
  title: "Input",
  component: Input,
  argTypes: {},
  args: {
    type: "text",
    placeholder: "Placeholder",
    disabled: false,
    readOnly: false,
    variant: "default",
    size: "md",
    color: "primary",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Custom = Template.bind({});
Custom.args = {
  startAdornment: "$",
  classes: {
    root: {
      remove: "border rounded focus-within:ring-2",
      add: "border-b-2 focus-within:border-green-600 has-error:border-error-600",
    },
    startAdornment: { root: "h-full py-2 px-4" },
  },
};

export const TextAdornment = Template.bind({});
TextAdornment.args = {
  startAdornment: "$",
  endAdornment: ".00",
};

export const IconAdornment = Template.bind({});
IconAdornment.args = {
  startAdornment: <MailIcon />,
  endAdornment: "units",
  classes: {
    root: {
      remove: "border-neutral-100",
      add: "rounded-xl border-neutral-300",
    },
    startAdornment: {
      root: { remove: "has-error:text-error-600 rounded" },
    },
  },
};
