<template>
  <div class="ts-page ts-form">
    <slot></slot>

    <div class="ts-expert-row">
      <Experts />ff
      <p>Lena Smith, Roy Johnson or Elijah Taylor will get right back to you.</p>
    </div>

    <Button @click.native="closeForm" class="ts-button-link">
      Cancel
    </Button>
    <Button @click.native="submitForm" class="ts-button-primary">
      Send
    </Button>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "Form",
  components: {
    Button
  }
};
</script>

<style lang="scss" scoped>
.ts-form {
  border: 1px solid #DBDBDB;
  flex-flow: column;
  padding: $ts-gutter * 2;
  bottom: 0;
}

.ts-expert-row {
  display: flex;
  align-items: center;
}
</style>
