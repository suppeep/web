<template>
  <button
    class="
      hover:bg-indigo-500
      font-normal
      focus:outline-none
      bg-[#23283b]
      transition
      duration-150
      ease-in-out
      rounded
      text-white
      px-6
      py-3
      text-sm
      cursor-none
    "
    @click="action"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    action: {
      type: Function,
      required: false,
    },
  },
}
</script>
