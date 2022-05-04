<template>
  <a class="h-6 w-6 my-1.5" :href="link" target="_blank"
    ><img :src="src" :class="extClass"
  /></a>
</template>

<script>
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
    },
    extClass: {
      type: Array,
      required: false,
    },
  },
};
</script>