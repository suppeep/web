<template>
  <img
    :id="id"
    :src="src"
    class="shadow-lg rounded-md m-2 z-10 bg-cover bg-center"
    :class="extClass"
  >
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
    },
    src: {
      type: String,
      required: false,
      default: 'https://via.placeholder.com/1920x1080',
    },
    extClass: {
      type: Array,
      required: false,
    },
  },
  setup() {},
}
</script>
