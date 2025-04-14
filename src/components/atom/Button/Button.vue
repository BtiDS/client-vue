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
export type ButtonIcon = "left" | "right";

interface Props {
  label?: string;
  type?: ButtonType;
  buttonStyle?: ButtonStyle;
  size?: ButtonSize;
  state?: ButtonState;
  icon?: string;
  iconPosition?: ButtonIcon;
}

const props = withDefaults(defineProps<Props>(), {
  type: "primary",
  buttonStyle: "filled",
  size: "large",
  iconPosition: "right",
});

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
  font-weight: var(--ref-typo-font-weight-medium);
  border-radius: var(--systeme-radius-medium);
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &--large {
    font-size: var(--ref-number-11);
    height: var(--com-button-size-height-large);
    padding: var(--com-button-size-padding-vertical-large)
      var(--com-button-size-padding-horizontal-large);

    .button__icon {
      width: var(--ref-number-12);
      height: var(--ref-number-12);
    }
  }

  &--medium {
    font-size: var(--ref-number-10);
    height: var(--com-button-size-height-medium);
    padding: var(--com-button-size-padding-vertical-medium)
      var(--com-button-size-padding-horizontal-medium);

    .button__icon {
      width: var(--ref-number-10);
      height: var(--ref-number-10);
    }
  }

  &--small {
    font-size: var(--ref-number-9);
    height: var(--com-button-size-height-small);
    font-weight: var(--ref-typo-font-weight-regular);
    padding: var(--com-button-size-padding-vertical-small)
      var(--com-button-size-padding-horizontal-small);
    border-radius: var(--systeme-radius-small);

    .button__icon {
      width: var(--ref-number-8);
      height: var(--ref-number-8);
    }
  }

  &__icon {
    display: inline-block;
    object-fit: contain;

    &--left {
      margin-right: var(--ref-number-5);
    }

    &--right {
      margin-left: var(--ref-number-5);
    }
  }

  &--primary.button--filled {
    background: var(--com-button-color-background-primary);
    color: var(--com-button-color-text-inverse);
    border: 2px solid transparent;

    .button__icon {
      filter: brightness(0) saturate(100%) invert(100%);
    }

    &:hover:not(:disabled) {
      background: var(--com-button-color-background-primary-light);
    }

    &:focus:not(:disabled) {
      background: var(--com-button-color-background-primary);
      border: 2px solid var(--ref-color-cool_neutral-90);
    }

    &:active:not(:disabled) {
      background: var(--com-button-color-background-primary-dark);
      border: 2px solid transparent;
    }

    &:disabled {
      background: var(--ref-color-cool_neutral-10);
      color: var(--ref-color-cool_neutral-60);
      cursor: default;

      .button__icon {
        filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
          saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
      }
    }

    &.button--hover {
      background: var(--com-button-color-background-primary-light);
    }

    &.button--focus {
      background: var(--com-button-color-background-primary);
      border: 2px solid var(--ref-color-cool_neutral-90);
    }

    &.button--pressed {
      background: var(--com-button-color-background-primary-dark);
    }

    &.button--disabled {
      background: var(--ref-color-cool_neutral-10);
      color: var(--ref-color-cool_neutral-60);
    }
  }

  &--primary.button--outline {
    background: var(--ref-color-cool_neutral-5);
    color: var(--com-button-color-text-primary);
    border: 1px solid var(--com-button-color-border-primary);

    .button__icon {
      filter: brightness(0) saturate(100%) invert(27%) sepia(87%)
        saturate(1823%) hue-rotate(251deg) brightness(89%) contrast(93%);
    }

    &:hover:not(:disabled) {
      background: var(--com-button-color-background-primary-bright);
    }

    &:focus:not(:disabled) {
      border: 2px solid var(--ref-color-cool_neutral-90);
    }

    &:active:not(:disabled) {
      background: var(--com-button-color-background-primary-bright);
      border: 1px solid var(--com-button-color-border-primary-dark);
      color: var(--com-button-color-text-primary-dark);

      .button__icon {
        filter: brightness(0) saturate(100%) invert(10%) sepia(95%)
          saturate(5876%) hue-rotate(258deg) brightness(89%) contrast(101%);
      }
    }

    &:disabled {
      background: var(--ref-color-cool_neutral-10);
      color: var(--ref-color-cool_neutral-60);
      border: none;
      cursor: default;

      .button__icon {
        filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
          saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
      }
    }

    &.button--hover {
      background: var(--com-button-color-background-primary-bright);
    }

    &.button--focus {
      border: 2px solid var(--ref-color-cool_neutral-90);
    }

    &.button--pressed {
      background: var(--com-button-color-background-primary-bright);
      border: 1px solid var(--com-button-color-border-primary-dark);
      color: var(--com-button-color-text-primary-dark);

      .button__icon {
        filter: brightness(0) saturate(100%) invert(10%) sepia(95%)
          saturate(5876%) hue-rotate(258deg) brightness(89%) contrast(101%);
      }
    }

    &.button--disabled {
      background: var(--ref-color-cool_neutral-10);
      color: var(--ref-color-cool_neutral-60);
      border: none;
    }
  }

  &--secondary.button--filled {
    background: var(--com-button-color-background-secondary);
    color: var(--com-button-color-text-inverse);
    border: 2px solid transparent;

    .button__icon {
      filter: brightness(0) saturate(100%) invert(100%);
    }

    &:hover:not(:disabled) {
      background: var(--com-button-color-background-secondary-light);
    }

    &:focus:not(:disabled) {
      background: var(--com-button-color-background-secondary-dark);
      border: 2px solid var(--ref-color-cool_neutral-90);
    }

    &:active:not(:disabled) {
      background: var(--com-button-color-background-secondary-dark);
      border: 2px solid transparent;
    }

    &:disabled {
      background: var(--ref-color-cool_neutral-10);
      color: var(--ref-color-cool_neutral-60);
      cursor: default;

      .button__icon {
        filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
          saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
      }
    }

    &.button--hover {
      background: var(--com-button-color-background-secondary-light);
    }

    &.button--focus {
      background: var(--com-button-color-background-secondary-dark);
      border: 2px solid var(--ref-color-cool_neutral-90);
    }

    &.button--pressed {
      background: var(--com-button-color-background-secondary-dark);
    }

    &.button--disabled {
      background: var(--ref-color-cool_neutral-10);
      color: var(--ref-color-cool_neutral-60);
    }
  }

  &--secondary.button--outline {
    background: var(--ref-color-cool_neutral-5);
    color: var(--com-button-color-text-secondary);
    border: 1px solid var(--com-button-color-border-secondary);

    .button__icon {
      filter: brightness(0) saturate(100%) invert(89%) sepia(11%)
        saturate(1266%) hue-rotate(93deg) brightness(89%) contrast(88%);
    }

    &:hover:not(:disabled) {
      background: var(--com-button-color-background-secondary-lighter);
    }

    &:focus:not(:disabled) {
      border: 2px solid var(--ref-color-cool_neutral-90);
    }

    &:active:not(:disabled) {
      background: var(--com-button-color-background-secondary-lighter);
      border: 1px solid var(--com-button-color-border-secondary-dark);
    }

    &:disabled {
      background: var(--ref-color-cool_neutral-10);
      color: var(--ref-color-cool_neutral-60);
      border: none;
      cursor: default;

      .button__icon {
        filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
          saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
      }
    }

    &.button--hover {
      background: var(--com-button-color-background-secondary-lighter);
    }

    &.button--focus {
      border: 2px solid var(--ref-color-cool_neutral-90);
    }

    &.button--pressed {
      background: var(--com-button-color-background-secondary-lighter);
      border: 1px solid var(--com-button-color-border-secondary-dark);
    }

    &.button--disabled {
      background: var(--ref-color-cool_neutral-10);
      color: var(--ref-color-cool_neutral-60);
      border: none;
    }
  }
}
</style>
