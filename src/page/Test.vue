<template>
  <div class="continer">
    <div class="examples-group">
      <h2>Button Examples</h2>

      <div class="example-row">
        <h3>Primary Buttons</h3>
        <Button label="Filled" @click="handleClick" />
        <Button label="Outline" buttonStyle="outline" @click="handleClick" />
        <Button label="medium" size="medium" @click="handleClick" />
        <Button label="Small" size="small" @click="handleClick" />
        <Button
          size="medium"
          label="Disabled"
          state="disabled"
          @click="handleClick"
          :icon="iconUrl"
        />
      </div>

      <div class="example-row">
        <h3>Secondary Buttons</h3>
        <Button label="Filled" type="secondary" @click="handleClick" />
        <Button
          label="Outline"
          type="secondary"
          buttonStyle="outline"
          @click="handleClick"
        />
        <Button
          label="medium"
          type="secondary"
          size="medium"
          @click="handleClick"
        />
        <Button
          label="Small"
          type="secondary"
          size="small"
          @click="handleClick"
        />
        <Button type="secondary" size="small" @click="handleClick"
          ><span>버튼텍스트</span></Button
        >
      </div>

      <div class="example-row">
        <h3>Buttons with Icons</h3>
        <Button
          label="아이콘 버튼"
          :icon="iconUrl"
          iconPosition="left"
          @click="handleClick"
          size="medium"
        />
        <Button
          buttonStyle="outline"
          label="아이콘 버튼"
          :icon="iconUrl"
          iconPosition="left"
          @click="handleClick"
          size="medium"
        />
        <Button
          label="아이콘 버튼"
          :icon="iconUrl"
          @click="handleClick"
          size="medium"
        />
      </div>
    </div>

    <!-- <div class="examples-group">
      <h2>Text Link Examples</h2>

      <div class="example-row">
        <h3>기본 링크</h3>
        <div class="links-container">
          <TextLink
            label="기본 링크"
            link="https://example.com"
            :icon="arrowIcon"
          />
          <TextLink
            label="Large Size 링크"
            link="https://example.com"
            size="large"
            :icon="arrowIcon"
          />
          <TextLink
            label="Small Size 링크"
            link="https://example.com"
            size="small"
            :icon="arrowIcon"
          />
        </div>
      </div>

      <div class="example-row">
        <h3>링크 타입</h3>
        <div class="links-container">
          <TextLink
            label="Default 링크"
            link="https://example.com"
            :icon="arrowIcon"
          />
          <TextLink
            label="Subtle 링크"
            link="https://example.com"
            type="subtle"
            :icon="arrowIcon"
          />
          <TextLink
            label="Subtle None 링크"
            link="https://example.com"
            type="subtle_none"
            :icon="arrowIcon"
          />
        </div>
      </div>

      <div class="example-row">
        <h3>링크 상태</h3>
        <div class="links-container">
          <TextLink
            label="Hover 상태"
            link="https://example.com"
            state="hover"
            :icon="arrowIcon"
          />
          <TextLink
            label="Pressed 상태"
            link="https://example.com"
            state="pressed"
            :icon="arrowIcon"
          />
          <TextLink
            label="Disabled 상태"
            link="https://example.com"
            state="disabled"
            :icon="arrowIcon"
          />
          <TextLink
            label="Visited 상태"
            link="https://example.com"
            state="visited"
            :icon="arrowIcon"
          />
        </div>
      </div>

      <div class="example-row">
        <h3>아이콘 없는 링크</h3>
        <div class="links-container">
          <TextLink label="아이콘 없는 기본 링크" link="https://example.com" />
          <TextLink
            label="아이콘 없는 Subtle 링크"
            link="https://example.com"
            type="subtle"
          />
        </div>
      </div>
    </div> -->

    <div class="examples-group">
      <h2>Radio Button Examples</h2>

      <div class="example-section">
        <h3>일반 라디오버튼</h3>
        <div class="example-group">
          <Radio name="fruit" value="apple" label="Apple" checked />
          <Radio name="fruit" value="banana" label="Banana" />
          <Radio name="fruit" value="orange" label="Orange" />
        </div>
      </div>

      <div class="example-section">
        <h3>부가텍스트</h3>
        <Radio
          name="size"
          value="large"
          label="라디오 버튼"
          helpText="부가적인 설명이 들어갑니다."
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
        <h3>라디오 버튼 사이즈</h3>
        <Radio
          name="color"
          value="red"
          label="Large Radio"
          size="large"
          checked
        />
        <Radio name="color" value="blue" label="Medium Radio" size="medium" />
      </div>

      <div class="example-section">
        <h3>비활성화</h3>
        <Radio
          name="disabled-example1"
          value="disabled1"
          label="disabled버튼"
          disabled
        />
        <Radio
          name="disabled-example2"
          value="disabled2"
          label="disabled버튼"
          checked
          disabled
          size="large"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/components/atom/Button/Button.vue";
import Radio from "@/components/atom/Radio/Radio.vue";
import TextLink from "@/components/atom/Link/Link.vue";
import iconUrl from "@/assets/icons/arrow-go-back.svg";
import arrowIcon from "@/assets/icons/open_link_icon.svg";

const handleClick = () => {
  console.log("Button clicked!");
};
</script>

<style lang="scss" scoped>
.continer {
  padding: 30px;
}
.examples-group {
  padding: 20px;
  border: 1px solid var(--color-cool-neutral-60);
  border-radius: var(--radius-large);
  margin-bottom: var(--padding-8);

  h2 {
    font-size: var(--font-size-heading-3);
  }

  .example-row {
    margin-bottom: 20px;

    h3 {
      margin-bottom: 10px;
    }

    button {
      margin-right: 12px;
      margin-bottom: 12px;
    }

    .links-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
}
</style>
