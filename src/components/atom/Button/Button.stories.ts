import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "./Button.vue";

const iconLeftUrl = "@/assets/icons/arrow-go-back.svg";
const iconRightUrl = "@/assets/icons/arrow-go-back.svg";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "버튼 유형 (primary, secondary)",
    },
    buttonStyle: {
      control: { type: "select" },
      options: ["filled", "outline"],
      description: "버튼 스타일 (filled, outline)",
    },
    size: {
      control: { type: "select" },
      options: ["large", "medium", "small"],
      description: "버튼 크기 (large, medium, small)",
    },
    state: {
      control: { type: "select" },
      options: [null, "hover", "focus", "pressed", "disabled"],
      description: "버튼 상태 (hover, focus, pressed, disabled)",
    },
    label: {
      control: "text",
      description: "버튼 텍스트",
    },
    icon: {
      control: "text",
      description: "아이콘 URL",
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
      description: "아이콘 위치 (left, right)",
    },
    onClick: { action: "clicked" },
  },
  args: {
    // 기본 args
    label: "Button",
    type: "primary",
    buttonStyle: "filled",
    size: "large",
    state: undefined,
    icon: undefined,
    iconPosition: "right",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// 기본 버튼 스토리
export const Default: Story = {
  args: {
    label: "Button",
  },
};

// Primary 버튼 (Filled)
export const PrimaryFilled: Story = {
  args: {
    type: "primary",
    buttonStyle: "filled",
    label: "Primary Filled",
  },
};

// Primary 버튼 (Outline)
export const PrimaryOutline: Story = {
  args: {
    type: "primary",
    buttonStyle: "outline",
    label: "Primary Outline",
  },
};

// Secondary 버튼 (Filled)
export const SecondaryFilled: Story = {
  args: {
    type: "secondary",
    buttonStyle: "filled",
    label: "Secondary Filled",
  },
};

// Secondary 버튼 (Outline)
export const SecondaryOutline: Story = {
  args: {
    type: "secondary",
    buttonStyle: "outline",
    label: "Secondary Outline",
  },
};

// 크기 변형
export const SmallButton: Story = {
  args: {
    size: "small",
    label: "Small Button",
  },
};

export const MediumButton: Story = {
  args: {
    size: "medium",
    label: "Medium Button",
  },
};

export const LargeButton: Story = {
  args: {
    size: "large",
    label: "Large Button",
  },
};

// 상태 변형
export const HoverState: Story = {
  args: {
    state: "hover",
    label: "Hover State",
  },
};

export const FocusState: Story = {
  args: {
    state: "focus",
    label: "Focus State",
  },
};

export const PressedState: Story = {
  args: {
    state: "pressed",
    label: "Pressed State",
  },
};

export const DisabledState: Story = {
  args: {
    state: "disabled",
    label: "Disabled State",
  },
};

// 아이콘 버튼
export const WithLeftIcon: Story = {
  args: {
    label: "With Left Icon",
    icon: iconLeftUrl,
    iconPosition: "left",
  },
};

export const WithRightIcon: Story = {
  args: {
    label: "With Right Icon",
    icon: iconRightUrl,
    iconPosition: "right",
  },
};

// 슬롯을 이용한 버튼
export const WithSlotContent: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button v-bind="args">
        <span style="font-weight: bold;">슬롯 콘텐츠</span>
      </Button>
    `,
  }),
  args: {
    type: "primary",
    buttonStyle: "filled",
    label: "",
  },
};

// 모든 크기의 Primary Filled 버튼
export const AllSizesPrimaryFilled: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; gap: 10px; align-items: center;">
        <Button v-bind="args" size="small" label="Small" />
        <Button v-bind="args" size="medium" label="Medium" />
        <Button v-bind="args" size="large" label="Large" />
      </div>
    `,
  }),
  args: {
    type: "primary",
    buttonStyle: "filled",
  },
};

// 모든 상태의 Primary Filled 버튼
export const AllStatesPrimaryFilled: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 10px;">
        <Button v-bind="args" state={undefined} label="Default" />
        <Button v-bind="args" state="hover" label="Hover" />
        <Button v-bind="args" state="focus" label="Focus" />
        <Button v-bind="args" state="pressed" label="Pressed" />
        <Button v-bind="args" state="disabled" label="Disabled" />
      </div>
    `,
  }),
  args: {
    type: "primary",
    buttonStyle: "filled",
  },
};
