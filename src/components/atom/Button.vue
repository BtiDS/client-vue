<template>
  <button
    :class="[
      'button',
      `button--${type}`,
      `button--${buttonStyle}`,
      `button--${size}`,
      state ? `button--${state}` : '',
      icon ? `button--icon-${iconPosition}` : '',
    ]"
    @click="onClick"
    :disabled="state === 'disabled'"
  >
    <img
      v-if="icon && iconPosition === 'left'"
      class="button__icon button__icon--left"
      :src="icon"
      alt=""
    />
    <template v-if="label">{{ label }}</template>
    <slot></slot>
    <img
      v-if="icon && iconPosition === 'right'"
      class="button__icon button__icon--right"
      :src="icon"
      alt=""
    />
  </button>
</template>

<script setup lang="ts">
export type ButtonType = "primary" | "secondary";
export type ButtonStyle = "filled" | "outline";
export type ButtonSize = "large" | "medium" | "small";
export type ButtonState = "hover" | "focus" | "pressed" | "disabled";
export type ButtonIconPosition = "left" | "right";

interface Props {
  label?: string;
  type?: ButtonType;
  buttonStyle?: ButtonStyle;
  size?: ButtonSize;
  state?: ButtonState;
  icon?: string;
  iconPosition?: ButtonIconPosition;
}

const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  buttonStyle: "filled",
  size: "large",
  iconPosition: "right",
});

// 이벤트 정의
const emit = defineEmits<{
  (e: "click"): void;
}>();

const onClick = () => {
  if (props.state !== "disabled") {
    emit("click");
  }
};
</script>

<style lang="scss">
.button {
  font-weight: var(--typo-font-weight-medium);
  border-radius: var(--radius-medium);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  // Size styles
  &--large {
    font-size: var(--font-size-body-1);
    height: var(--button-height-large);
    padding: var(--button-padding-vertical-large)
      var(--button-padding-horizontal-large);

    .button__icon {
      width: var(--number-12);
      height: var(--number-12);
    }
  }

  &--medium {
    font-size: var(--font-size-body-2);
    height: var(--button-height-medium);
    padding: var(--button-padding-vertical-medium)
      var(--button-padding-horizontal-medium);

    .button__icon {
      width: var(--number-10);
      height: var(--number-10);
    }
  }

  &--small {
    font-size: var(--font-size-body-3);
    height: var(--button-height-small);
    font-weight: var(--typo-font-weight-regular);
    padding: var(--button-padding-vertical-small)
      var(--button-padding-horizontal-small);
    border-radius: var(--radius-small);

    .button__icon {
      width: var(--number-8);
      height: var(--number-8);
    }
  }

  // Icon styles
  &__icon {
    display: inline-block;
    object-fit: contain;

    &--left {
      margin-right: var(--number-5);
    }

    &--right {
      margin-left: var(--number-5);
    }
  }

  // Primary filled button styles
  &--primary.button--filled {
    background: var(--color-primary-70);
    color: var(--color-common-0);
    border: 2px solid transparent;

    .button__icon {
      filter: brightness(0) saturate(100%) invert(100%);
    }

    &:hover:not(:disabled) {
      background: var(--color-primary-50);
    }

    &:focus:not(:disabled) {
      background: var(--color-primary-70);
      border: 2px solid var(--color-cool-neutral-90);
    }

    &:active:not(:disabled) {
      background: var(--color-primary-90);
      border: 2px solid transparent;
    }

    &:disabled {
      background: var(--color-cool-neutral-10);
      color: var(--color-cool-neutral-60);
      cursor: default;

      .button__icon {
        filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
          saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
      }
    }

    &.button--hover {
      background: var(--color-primary-50);
    }

    &.button--focus {
      background: var(--color-primary-70);
      border: 2px solid var(--color-cool-neutral-90);
    }

    &.button--pressed {
      background: var(--color-primary-90);
    }

    &.button--disabled {
      background: var(--color-cool-neutral-10);
      color: var(--color-cool-neutral-60);
    }
  }

  // Primary outline button styles
  &--primary.button--outline {
    background: var(--color-cool-neutral-5);
    color: var(--color-primary-70);
    border: 1px solid var(--color-primary-70);

    .button__icon {
      filter: brightness(0) saturate(100%) invert(27%) sepia(87%)
        saturate(1823%) hue-rotate(251deg) brightness(89%) contrast(93%);
    }

    &:hover:not(:disabled) {
      background: var(--color-primary-5);
    }

    &:focus:not(:disabled) {
      border: 2px solid var(--color-cool-neutral-90);
    }

    &:active:not(:disabled) {
      background: var(--color-primary-5);
      border: 1px solid var(--color-primary-90);
      color: var(--color-primary-90);

      .button__icon {
        filter: brightness(0) saturate(100%) invert(10%) sepia(95%)
          saturate(5876%) hue-rotate(258deg) brightness(89%) contrast(101%);
      }
    }

    &:disabled {
      background: var(--color-cool-neutral-10);
      color: var(--color-cool-neutral-60);
      border: none;
      cursor: default;

      .button__icon {
        filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
          saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
      }
    }

    &.button--hover {
      background: var(--color-primary-5);
    }

    &.button--focus {
      border: 2px solid var(--color-cool-neutral-90);
    }

    &.button--pressed {
      background: var(--color-primary-5);
      border: 1px solid var(--color-primary-90);
      color: var(--color-primary-90);

      .button__icon {
        filter: brightness(0) saturate(100%) invert(10%) sepia(95%)
          saturate(5876%) hue-rotate(258deg) brightness(89%) contrast(101%);
      }
    }

    &.button--disabled {
      background: var(--color-cool-neutral-10);
      color: var(--color-cool-neutral-60);
      border: none;
    }
  }

  // Secondary filled button styles
  &--secondary.button--filled {
    background: var(--color-secondary-20);
    color: var(--color-common-0);
    border: 2px solid transparent;

    .button__icon {
      filter: brightness(0) saturate(100%) invert(100%);
    }

    &:hover:not(:disabled) {
      background: var(--color-secondary-10);
    }

    &:focus:not(:disabled) {
      background: var(--color-secondary-30);
      border: 2px solid var(--color-cool-neutral-90);
    }

    &:active:not(:disabled) {
      background: var(--color-secondary-30);
      border: 2px solid transparent;
    }

    &:disabled {
      background: var(--color-cool-neutral-10);
      color: var(--color-cool-neutral-60);
      cursor: default;

      .button__icon {
        filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
          saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
      }
    }

    &.button--hover {
      background: var(--color-secondary-10);
    }

    &.button--focus {
      background: var(--color-secondary-30);
      border: 2px solid var(--color-cool-neutral-90);
    }

    &.button--pressed {
      background: var(--color-secondary-30);
    }

    &.button--disabled {
      background: var(--color-cool-neutral-10);
      color: var(--color-cool-neutral-60);
    }
  }

  // Secondary outline button styles
  &--secondary.button--outline {
    background: var(--color-cool-neutral-5);
    color: var(--color-secondary-30);
    border: 1px solid var(--color-secondary-30);

    .button__icon {
      filter: brightness(0) saturate(100%) invert(89%) sepia(11%)
        saturate(1266%) hue-rotate(93deg) brightness(89%) contrast(88%);
    }

    &:hover:not(:disabled) {
      background: var(--color-secondary-5);
    }

    &:focus:not(:disabled) {
      border: 2px solid var(--color-cool-neutral-90);
    }

    &:active:not(:disabled) {
      background: var(--color-secondary-5);
      border: 1px solid var(--color-secondary-30);
    }

    &:disabled {
      background: var(--color-cool-neutral-10);
      color: var(--color-cool-neutral-60);
      border: none;
      cursor: default;

      .button__icon {
        filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
          saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
      }
    }

    &.button--hover {
      background: var(--color-secondary-5);
    }

    &.button--focus {
      border: 2px solid var(--color-cool-neutral-90);
    }

    &.button--pressed {
      background: var(--color-secondary-5);
      border: 1px solid var(--color-secondary-30);
    }

    &.button--disabled {
      background: var(--color-cool-neutral-10);
      color: var(--color-cool-neutral-60);
      border: none;
    }
  }
}
</style>
