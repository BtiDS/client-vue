<template>
  <div class="radio-container">
    <div class="radio-wrapper">
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="checked"
        :disabled="disabled"
        @change="onChange"
        :class="['radio-input', `radio-input--${size}`]"
      />
      <label
        :class="[
          'radio-label',
          `radio-label--${size}`,
          { 'radio-label--disabled': disabled },
        ]"
      >
        {{ label }}
      </label>
    </div>
    <p v-if="helpText" class="radio-help-text">{{ helpText }}</p>
  </div>
</template>

<script setup lang="ts">
export type RadioButtonSize = "large" | "medium";

interface Props {
  label: string;
  helpText?: string;
  size?: RadioButtonSize;
  name: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
}

interface Emits {
  (e: "change", event: Event): void;
}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
  checked: false,
  disabled: false,
});

const emit = defineEmits<Emits>();

const onChange = (event: Event) => {
  if (!props.disabled) {
    emit("change", event);
  }
};
</script>

<style lang="scss" scoped>
.radio-container {
  display: flex;
  flex-direction: column;
}

.radio-wrapper {
  display: flex;
  align-items: center;
  gap: var(--gap-3);
}

.radio-input {
  border: 1px solid #58616a;
  background: #fff;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 50%;
  margin: 0;
  position: relative;
  cursor: pointer;

  &:checked {
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: #5521bd;
    }
  }

  &:disabled {
    border: 1px solid #8a949e;
    background: #cdd1d5;
    cursor: default;

    &:checked::after {
      background: #8a949e;
    }
  }

  &--large {
    width: 24px;
    height: 24px;

    &:checked::after {
      width: 14px;
      height: 14px;
    }
  }

  &--medium {
    width: 20px;
    height: 20px;

    &:checked::after {
      width: 12px;
      height: 12px;
    }
  }
}

.radio-label {
  line-height: 150%;
  font-weight: 400;
  color: #1e2124;
  cursor: pointer;

  &--large {
    font-size: 17px;
  }

  &--medium {
    font-size: 14px;
  }

  &--disabled {
    color: #868e96;
    cursor: default;
  }
}

.radio-help-text {
  margin: 4px 0 0 32px;
  font-size: 14px;
  line-height: 150%;
  color: #464c53;
}
</style>
