<template>
  <div class="py-5 flex flex-wrap justify-center" :class="extClass">
    <slot name="content" />
  </div>
</template>

<script>
export default {
  props: {
    extClass: {
      type: Array,
      required: false,
    },
  },
}
</script>t
