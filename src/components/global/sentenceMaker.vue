<template>
  <div class="relative">
    <div
      v-for="(item, index) in items"
      :id="item.id"
      :key="index"
      class="z-[99]"
    >
      <ContentTitle
        :text="item.text"
        ext-class="uppercase text-right w-full float-right"
      />
    </div>
    <div
      id="sparkle"
      class="sparkle bg-[#00ff99] h-8 w-8 absolute right-0 -top-8 -z-[1]"
    />
  </div>
</template>

<script>
import ContentTitle from '../atom/title.vue'

export default {
  components: {
    ContentTitle,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  setup() {},
}
</script>

<style scoped>
.sparkle {
  border-radius: 0.5em;
  transform: rotate(45deg);
}
.sparkle::before,
.sparkle::after {
  content: "";
  position: absolute;
  background: inherit;
  top: -0.5em;
  right: -1.5em;
  height: 1em;
  width: 1em;
  border-radius: 0.3em;
}
.sparkle::after {
  top: 1.2em;
  right: -1.3em;
  height: 0.6em;
  width: 0.6em;
  border-radius: 0.2em;
}

.sparkle:hover {
  font-size: 1.1em;
}
</style>
