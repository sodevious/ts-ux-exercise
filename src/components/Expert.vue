<template>
  <img :src="avatar" class="ts-expert-avatar" :alt="expertDescription" v-if="avatar"/>
  <div class="ts-expert-avatar" v-else>{{ expertDropcap }}</div>
</template>

<script>
export default {
  name: "Expert",
  props: ['name', 'avatar'],
  computed: {
    expertDescription() {
      return `${this.name}'s Avatar`;
    },
    expertDropcap() {
      return this.name.charAt(0);
    }
  },
};
</script>

<style lang="scss">
.ts-expert-avatar {
 height: 56px;
 width: 56px;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 font-weight: $ts-font-bold;
 font-size: $ts-font-large * 2;
 border-radius: 50%;
 background-color: $ts-base-teal;
 color: $ts-white;
 position: relative;

 & + & {
   margin-left: -$ts-gutter;
 }
}
</style>
