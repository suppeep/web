<template>
  <h2 class="text-5xl md:text-6xl font-bold" :class="classStringToArray">
    {{ text }}
  </h2>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    extClass: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const classStringToArray = computed(() => {
      if (props.extClass === undefined) return;
      else {
        return props.extClass.split(" ").map((style) => style);
      }
    });

    return { classStringToArray };
  },
};
</script>