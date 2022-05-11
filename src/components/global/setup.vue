<template>
  <div class="flex flex-col relative pt-[5%]">
    <div class="px-[12%] text-left font-bold text-5xl md:text-6xl relative">
      <Title
        id="setup-title"
        text="Work Setup"
        extClass="gradient-yellow pb-16"
      />
    </div>
  </div>
</template>

<script>
import Title from "../atom/title.vue";

export default {
  setup() {},
  components: { Title },
};
</script>