<template>
  <a :class="extClass" class="h-6 w-6 my-1.5" :href="link" target="_blank">
    <img alt="img" v-if="isImg" :src="src" />
    <p v-else>{{ src }}</p></a
  >
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: false,
      default: null,
    },
    extClass: {
      type: Array,
      required: false,
    },
  },
  setup(props) {
    const isImg = computed(() => {
      return props.src.startsWith("https") ? true : false;
    });

    return { isImg };
  },
};
</script>