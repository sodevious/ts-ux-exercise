<template>
  <div id="app">
    <!-- Landing Page -->
    <Page class="ts-view-landing">
      <p class="ts-p-large ts-p-bold">Not what you expected?</p>

      <Button @click.native="openForm" class="ts-button-link">
        Ask an expert
      </Button>
    </Page>

    <!-- Ask an expert -->
    <Form v-if="formOpen" class="ts-page">
      <h3 class="ts-heading">Ask an expert</h3>
    </Form>

    <!-- Thank You page -->
    <Page v-if="formSubmitted" class="ts-view-thanks">
      <h3 class="ts-heading">Thank you.</h3>
      <p class="ts-p-gray">An expert will get back to you soon.</p>
    </Page>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import Page from "./components/Page.vue";
import Button from "./components/Button.vue";
import Form from "./components/Form";

export default {
  name: "app", // ("Landing")
  components: {
    Page,
    Button,
    Form
  },
  computed: {
    ...mapState(['formOpen', 'formSubmitted']),
  },
  methods: {
    ...mapMutations(['openForm', 'closeForm', 'submitForm'])
  }
};
</script>

<style lang="scss">
  @import "~@/scss/app.scss";

  .ts-view-landing {
    padding: ($ts-gutter / 2) ($ts-gutter * 2);
    align-items: center;
  }

  .ts-view-thanks {
    flex-flow: column;

    p {
      margin: $ts-gutter 0 0 0;
    }
  }
</style>
