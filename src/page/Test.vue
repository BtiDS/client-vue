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
  <div class="button-examples">
    <h2>Radio Button Examples</h2>
    
    <div class="example-section">
      <h3>Basic Radio Buttons</h3>
      <div class="example-group">
        <Radio
          name="fruit"
          value="apple"
          label="Apple"
          checked
        />
        <Radio
          name="fruit"
          value="banana"
          label="Banana"
        />
        <Radio
          name="fruit"
          value="orange"
          label="Orange"
        />
      </div>
    </div>
    
    <div class="example-section">
      <h3>With Help Text</h3>
      <Radio
        name="size"
        value="large"
        label="Large Size"
        helpText="This option sets the size to large"
        checked
      />
      <Radio
        name="size"
        value="medium"
        label="Medium Size"
        helpText="This option sets the size to medium"
      />
    </div>
    
    <div class="example-section">
      <h3>Different Sizes</h3>
      <Radio
        name="color"
        value="red"
        label="Large Radio"
        size="large"
        checked
      />
      <Radio
        name="color"
        value="blue"
        label="Medium Radio"
        size="medium"
      />
    </div>
    
    <div class="example-section">
      <h3>Disabled State</h3>
      <Radio
        name="disabled-example1"
        value="disabled1"
        label="Disabled Unchecked"
        disabled
      />
      <Radio
        name="disabled-example2"
        value="disabled2"
        label="Disabled Checked"
        checked
        disabled
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/atom/Button.vue';
import Radio from '@/components/atom/Radio.vue';
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