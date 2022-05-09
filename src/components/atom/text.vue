<template>
  <p class="text-xl font-light" :class="extClass">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    extClass: {
      type: Array,
      required: false,
    },
  },
};
</script>