<template>
  <div
    :id="id"
    class="
      shadow-lg
      m-2
      px-4
      py-5
      rounded-md
    "
  >
    {{ text }}
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
      default: "Chip",
    },
  },
  setup() {},
};
</script>