<template>
  <div class="button-examples">
    <h2>Button Examples</h2>
    
    <div class="example-row">
      <h3>Primary Buttons</h3>
      <Button label="Primary Filled" @click="handleClick" />
      <Button label="Primary Outline" buttonStyle="outline" @click="handleClick" />
      <Button label="Primary Disabled" state="disabled" @click="handleClick" />
    </div>
    
    <div class="example-row">
      <h3>Secondary Buttons</h3>
      <Button label="Secondary Filled" type="secondary" @click="handleClick" />
      <Button label="Secondary Outline" type="secondary" buttonStyle="outline" @click="handleClick" />
      <Button label="Secondary Small" type="secondary" size="small" @click="handleClick" />
    </div>
    
    <div class="example-row">
      <h3>Buttons with Icons</h3>
      <Button 
        label="Left Icon" 
        :icon="iconUrl" 
        iconPosition="left" 
        @click="handleClick" 
      />
      <Button 
        buttonStyle="outline"
        label="Left Icon" 
        :icon="iconUrl" 
        iconPosition="left" 
        @click="handleClick" 
      />
      <Button 
        label="Right Icon" 
        :icon="iconUrl" 
        @click="handleClick" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/atom/Button.vue';
import iconUrl from '@/assets/icons/arrow-go-back.svg';

const handleClick = () => {
  console.log('Button clicked!');
};
</script>

<style lang="scss" scoped>
.button-examples {
  padding: 20px;
  
  .example-row {
    margin-bottom: 20px;
    
    h3 {
      margin-bottom: 10px;
    }
    
    button {
      margin-right: 12px;
      margin-bottom: 12px;
    }
  }
}
</style>