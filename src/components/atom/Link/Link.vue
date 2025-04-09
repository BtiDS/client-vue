<template>
  <a
    :href="link"
    :class="[
      'text-link',
      `text-link--${type || 'default'}`,
      `text-link--${size}`,
      state ? `text-link--${state}` : '',
    ]"
    @click="handleClick"
    :aria-disabled="state === 'disabled'"
  >
    {{ label }}
    <img v-if="icon" :src="icon" :alt="label" class="link-icon" />
  </a>
</template>

<script setup lang="ts">
type LinkType = "subtle" | "subtle_none" | "default";
type LinkSize = "large" | "medium" | "small";
type LinkState = "hover" | "pressed" | "disabled" | "visited";

interface Props {
  label: string;
  link: string;
  icon?: string;
  type?: LinkType;
  size?: LinkSize;
  state?: LinkState;
}

const props = withDefaults(defineProps<Props>(), {
  type: "default",
  size: "medium",
  state: undefined,
  icon: undefined,
});

const handleClick = (e: MouseEvent) => {
  if (props.state === "disabled") {
    e.preventDefault();
  }
};
</script>

<style lang="scss" scoped>
.text-link {
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;

  .link-icon {
    display: inline-block;
    vertical-align: middle;
  }

  &--default {
    color: #256ef4;
    text-decoration: underline;

    .link-icon {
      filter: brightness(0) saturate(100%) invert(37%) sepia(74%)
        saturate(1909%) hue-rotate(206deg) brightness(99%) contrast(96%);
    }
  }

  &--subtle {
    color: #1e2124;
    text-decoration: underline;

    .link-icon {
      filter: brightness(0) saturate(100%) invert(11%) sepia(9%) saturate(427%)
        hue-rotate(169deg) brightness(95%) contrast(95%);
    }
  }

  &--subtle_none {
    color: #1e2124;
    text-decoration: none;

    .link-icon {
      filter: brightness(0) saturate(100%) invert(11%) sepia(9%) saturate(427%)
        hue-rotate(169deg) brightness(95%) contrast(95%);
    }
  }

  &--disabled {
    pointer-events: none;
    cursor: not-allowed;
    color: #8a949e !important;

    .link-icon {
      filter: brightness(0) saturate(100%) invert(57%) sepia(9%) saturate(361%)
        hue-rotate(174deg) brightness(94%) contrast(89%);
    }
  }

  &--hover {
    color: #0b50d0 !important;

    .link-icon {
      filter: brightness(0) saturate(100%) invert(23%) sepia(97%)
        saturate(1789%) hue-rotate(211deg) brightness(91%) contrast(98%);
    }
  }

  &--pressed {
    color: #083891 !important;

    .link-icon {
      filter: brightness(0) saturate(100%) invert(15%) sepia(71%)
        saturate(2195%) hue-rotate(209deg) brightness(89%) contrast(98%);
    }
  }

  &--visited {
    color: #5917b8 !important;

    .link-icon {
      filter: brightness(0) saturate(100%) invert(27%) sepia(51%)
        saturate(2872%) hue-rotate(247deg) brightness(89%) contrast(92%);
    }
  }

  &:hover:not(.text-link--disabled) {
    color: #0b50d0;
    text-decoration: underline;

    .link-icon {
      filter: brightness(0) saturate(100%) invert(23%) sepia(97%)
        saturate(1789%) hue-rotate(211deg) brightness(91%) contrast(98%);
    }
  }

  &:active:not(.text-link--disabled) {
    color: #083891;
    text-decoration: underline;

    .link-icon {
      filter: brightness(0) saturate(100%) invert(15%) sepia(71%)
        saturate(2195%) hue-rotate(209deg) brightness(89%) contrast(98%);
    }
  }

  &:visited:not(.text-link--disabled) {
    color: #5917b8;
    text-decoration: underline;

    .link-icon {
      filter: brightness(0) saturate(100%) invert(27%) sepia(51%)
        saturate(2872%) hue-rotate(247deg) brightness(89%) contrast(92%);
    }
  }

  &--large {
    font-size: 19px;

    .link-icon {
      width: 24px;
      height: 24px;
    }
  }

  &--medium {
    font-size: 17px;

    .link-icon {
      width: 20px;
      height: 20px;
    }
  }

  &--small {
    font-size: 15px;

    .link-icon {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
