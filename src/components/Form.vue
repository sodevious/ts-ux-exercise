<template>
  <div class="ts-page ts-form">
    <slot></slot>

    <div class="ts-expert-row">
      <Expert v-for="expert in experts" v-bind="expert" :key="expert.name" />
      <p>Lena Smith, Roy Johnson or Elijah Taylor will get right back to you.</p>
    </div>

    <form  v-on:submit.prevent>
      <p class="ts-p-large">What you search for</p>
      <input type="text" class="ts-form-input" value="top account reigons ranked by total amount booked" />

      <p>Can you explain in a little more detail?</p>
      <textarea class="ts-form-input ts-form-textarea" placeholder="Message for expert" rows="4"></textarea>

      <Button @click.native="closeForm" class="ts-button">
        Cancel
      </Button>
      <Button @click.native="submitForm" class="ts-button-primary">
        Send
      </Button>
    </form>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';

import Button from "./Button.vue";
import Expert from "./Expert.vue";

export default {
  name: "Form",
  components: {
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

<style lang="scss">
.ts-form {
  border: 1px solid #DBDBDB; // color also not defined in figma?
  flex-flow: column;
  display: block;
  bottom: 0;
}

.ts-form-input {
  width: 100%;
  display: block;
  padding: $ts-gutter;
  margin-bottom: $ts-gutter * 2;
  font-size: $ts-font-regular;
  font-family: $ts-font-sans-serif;
  border-radius: 2px 0px 0px 2px;
  border: 1px solid #DBDEE3; // blend overlay in figma changes the color :(

  &[type="text"] {
    padding-left: $ts-gutter * 3;
    background-repeat: no-repeat;
    background-position: $ts-gutter center;
    background-image: url('../icons/icon-search.svg');
  }
}

.ts-form-textarea {
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.3);
  border: 1px solid #E6E6E6;
  resize: none;
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
