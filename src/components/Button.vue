<template>
  <button class="ts-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button"
};
</script>

<style lang="scss">
@mixin ts-button-theme($background, $color) {
  background-color: $background;
  color: $color;

  &:hover {
    color: darken($color, 15%);
    background-color: darken($background, 5%);
  }
}

.ts-button {
  @include ts-button-theme($ts-gray-tint-4, $ts-black-toned);
  -webkit-appearance: button;
  text-decoration: none;
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  transition: 0.25s all ease-out;
  border-radius: $ts-button-size / 2;
  padding: 0 ($ts-gutter * 2);
  height: $ts-button-size;
  line-height: $ts-button-size;
  font-size: $ts-font-small;


  & + & {
    margin-left: 1rem;
  }
}

.ts-button-link {
  @include ts-button-theme($ts-white, $ts-base-blue);
}

.ts-button-primary {
  @include ts-button-theme($ts-base-blue, $ts-white);
}
</style>
