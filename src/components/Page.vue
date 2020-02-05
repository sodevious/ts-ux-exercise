<template>
  <section class="ts-page">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "Page"
};
</script>

<style lang="scss">
.ts-page {
  z-index: 10;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  display: flex;
  align-items: flex-start;
  background-color: $ts-white;
  padding: $ts-gutter * 2;
  border-bottom: 1px solid $ts-gray-tint-3;

  &:first-child {
    z-index: 5;
  }
}
</style>
