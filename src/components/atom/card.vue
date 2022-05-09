<template>
  <div class="flex items-center w-full">
    <div class="w-20 h-20 relative mr-5">
      <div
        class="absolute top-0 right-0 bg-white rounded w-16 h-16 mt-2 mr-1"
      ></div>
      <div
        class="
          absolute
          bottom-0
          left-0
          bg-gradient-to-r
          from-indigo-600
          to-pink-600
          rounded
          w-16
          h-16
          flex
          items-center
          justify-center
          mt-2
          mr-3
        "
      >
        <slot name="icon"></slot>
      </div>
    </div>
    <div class="w-10/12 text-left">
      <h2
        tabindex="0"
        class="
          focus:outline-none
          text-lg
          font-bold
          leading-tight
          text-gray-800
          dark:text-white
        "
      >
        {{ title }}
      </h2>
      <p
        tabindex="0"
        class="focus:outline-none text-base text-gray-400 leading-normal pt-2"
      >
        <slot name="paragraph"></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Card 1",
    },
  },
  setup() {},
};
</script>