<template>
  <div class="ts-page ts-form">
    <slot></slot>

    <div class="ts-expert-row">
      <Expert v-for="expert in experts" v-bind="expert" />
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
  import { mapMutations } from 'vuex';

import Button from "./Button.vue";
import Expert from "./Expert.vue";

export default {
  name: "Form",
  components: {
    Button
    Button,
    Expert
  },
  data() {
    return {
      experts: [
        {
          name: "Lena Smith",
          avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1949180/uxe-exercise-portrait2.png"
        },
        {
          name: "Roy Johnson",
          avatar: ""
        },
        {
          name: "Elijah Taylor",
          avatar: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1949180/uxe-exercise-portrait1.png"
        }
      ]
    }
  },
  methods: {
    ...mapMutations(['openForm', 'closeForm', 'submitForm'])
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
  margin: ($ts-gutter / 2)  0;
  padding-bottom: $ts-gutter;

  p {
    padding: ($ts-gutter * 2);
  }
}
</style>
