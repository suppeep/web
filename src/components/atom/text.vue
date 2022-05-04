<template>
  <p class="text-xl font-light">{{ text }}</p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
  },
};
</script>