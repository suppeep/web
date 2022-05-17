<template>
  <div v-for="(item, index) in items" :key="index" :id="item.id">
    <Title :text="item.text" :extClass="'uppercase text-right w-min float-right'" />
  </div>
</template>

<script>
import Title from "../atom/title.vue";

export default {
  components: {
    Title,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  setup() {},
};
</script>
