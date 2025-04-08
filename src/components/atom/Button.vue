<template>
    <button 
      :class="[
        'button', 
        `button--${type}`, 
        `button--${buttonStyle}`, 
        `button--${size}`, 
        state ? `button--${state}` : '',
        icon ? `button--icon-${iconPosition}` : ''
      ]"
      @click="onClick"
      :disabled="state === 'disabled'"
    >
      <img v-if="icon && iconPosition === 'left'" 
           class="button__icon button__icon--left" 
           :src="icon" 
           alt="" />
      {{ label }}
      <img v-if="icon && iconPosition === 'right'" 
           class="button__icon button__icon--right" 
           :src="icon"
           alt="" />
    </button>
  </template>
  
  <script setup lang="ts">
  export type ButtonType = "primary" | "secondary";
  export type ButtonStyle = "filled" | "outline";
  export type ButtonSize = "large" | "medium" | "small";
  export type ButtonState = "hover" | "focus" | "pressed" | "disabled";
  export type ButtonIconPosition = "left" | "right";
  
  interface Props {
    label: string;
    type?: ButtonType;
    buttonStyle?: ButtonStyle;
    size?: ButtonSize;
    state?: ButtonState;
    icon?: string;
    iconPosition?: ButtonIconPosition;
  }
  
  const props = withDefaults(defineProps<Props>(), {
    type: 'primary',
    buttonStyle: 'filled',
    size: 'large',
    iconPosition: 'right'
  });
  
  // 이벤트 정의
  const emit = defineEmits<{
    (e: 'click'): void
  }>();
  
  const onClick = () => {
    if (props.state !== 'disabled') {
      emit('click');
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .button {
    font-weight: 500;
    border-radius: 8px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    // Size styles
    &--large {
      font-size: 18px;
      height: 56px;
      padding: 14px 32px;
      
      .button__icon {
        width: 24px;
        height: 24px;
      }
    }
    
    &--medium {
      font-size: 16px;
      height: 48px;
      padding: 12px 28px;
      
      .button__icon {
        width: 20px;
        height: 20px;
      }
    }
    
    &--small {
      font-size: 14px;
      height: 36px;
      font-weight: 400;
      padding: 8px 32px;
      border-radius: 4px;
      
      .button__icon {
        width: 16px;
        height: 16px;
      }
    }
  
    // Icon styles
    &__icon {
      display: inline-block;
      object-fit: contain;
      
      &--left {
        margin-right: 8px;
      }
      
      &--right {
        margin-left: 8px;
      }
    }
  
    // Primary filled button styles
    &--primary.button--filled {
      background: #5521bd;
      color: #fff;
      border: 2px solid transparent;
      
      .button__icon {
        filter: brightness(0) saturate(100%) invert(100%);
      }
      
      &:hover:not(:disabled) {
        background: #6e2fcc;
      }
      
      &:focus:not(:disabled) {
        background: #5521bd;
        border: 2px solid #1c1c1e;
      }
      
      &:active:not(:disabled) {
        background: #2d08ab;
        border: 2px solid transparent;
      }
      
      &:disabled {
        background: #f1f3f5;
        color: #868e96;
        cursor: not-allowed;
        
        .button__icon {
          filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
            saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
        }
      }
      
      &.button--hover {
        background: #6e2fcc;
      }
      
      &.button--focus {
        background: #5521bd;
        border: 2px solid #1c1c1e;
      }
      
      &.button--pressed {
        background: #2d08ab;
      }
      
      &.button--disabled {
        background: #f1f3f5;
        color: #868e96;
      }
    }
    
    // Primary outline button styles
    &--primary.button--outline {
      background: #f8f9fa;
      color: #5521bd;
      border: 1px solid #5521bd;
      
      .button__icon {
        filter: brightness(0) saturate(100%) invert(27%) sepia(87%)
          saturate(1823%) hue-rotate(251deg) brightness(89%) contrast(93%);
      }
      
      &:hover:not(:disabled) {
        background: #eee7f9;
      }
      
      &:focus:not(:disabled) {
        border: 2px solid #1c1c1e;
      }
      
      &:active:not(:disabled) {
        background: #eee7f9;
        border: 1px solid #2d08ab;
        color: #2d08ab;
        
        .button__icon {
          filter: brightness(0) saturate(100%) invert(10%) sepia(95%)
            saturate(5876%) hue-rotate(258deg) brightness(89%) contrast(101%);
        }
      }
      
      &:disabled {
        background: #f1f3f5;
        color: #868e96;
        border: none;
        cursor: not-allowed;
        
        .button__icon {
          filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
            saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
        }
      }
      
      &.button--hover {
        background: #eee7f9;
      }
      
      &.button--focus {
        border: 2px solid #1c1c1e;
      }
      
      &.button--pressed {
        background: #eee7f9;
        border: 1px solid #2d08ab;
        color: #2d08ab;
        
        .button__icon {
          filter: brightness(0) saturate(100%) invert(10%) sepia(95%)
            saturate(5876%) hue-rotate(258deg) brightness(89%) contrast(101%);
        }
      }
      
      &.button--disabled {
        background: #f1f3f5;
        color: #868e96;
        border: none;
      }
    }
    
    // Secondary filled button styles
    &--secondary.button--filled {
      background: #a2eacb;
      color: #fff;
      border: 2px solid transparent;
      
      .button__icon {
        filter: brightness(0) saturate(100%) invert(100%);
      }
      
      &:hover:not(:disabled) {
        background: #c7f2df;
      }
      
      &:focus:not(:disabled) {
        background: #76e2b6;
        border: 2px solid #1c1c1e;
      }
      
      &:active:not(:disabled) {
        background: #76e2b6;
        border: 2px solid transparent;
      }
      
      &:disabled {
        background: #f1f3f5;
        color: #868e96;
        cursor: not-allowed;
        
        .button__icon {
          filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
            saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
        }
      }
      
      &.button--hover {
        background: #c7f2df;
      }
      
      &.button--focus {
        background: #76e2b6;
        border: 2px solid #1c1c1e;
      }
      
      &.button--pressed {
        background: #76e2b6;
      }
      
      &.button--disabled {
        background: #f1f3f5;
        color: #868e96;
      }
    }
    
    // Secondary outline button styles
    &--secondary.button--outline {
      background: #f8f9fa;
      color: #76e2b6;
      border: 1px solid #76e2b6;
      
      .button__icon {
        filter: brightness(0) saturate(100%) invert(89%) sepia(11%)
          saturate(1266%) hue-rotate(93deg) brightness(89%) contrast(88%);
      }
      
      &:hover:not(:disabled) {
        background: #e8faf2;
      }
      
      &:focus:not(:disabled) {
        border: 2px solid #1c1c1e;
      }
      
      &:active:not(:disabled) {
        background: #e8faf2;
        border: 1px solid #76e2b6;
      }
      
      &:disabled {
        background: #f1f3f5;
        color: #868e96;
        border: none;
        cursor: not-allowed;
        
        .button__icon {
          filter: brightness(0) saturate(100%) invert(57%) sepia(14%)
            saturate(346%) hue-rotate(167deg) brightness(87%) contrast(84%);
        }
      }
      
      &.button--hover {
        background: #e8faf2;
      }
      
      &.button--focus {
        border: 2px solid #1c1c1e;
      }
      
      &.button--pressed {
        background: #e8faf2;
        border: 1px solid #76e2b6;
      }
      
      &.button--disabled {
        background: #f1f3f5;
        color: #868e96;
        border: none;
      }
    }
  }
  </style>