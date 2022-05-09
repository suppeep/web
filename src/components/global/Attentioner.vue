<template>
  <div class="pt-[8%] px-[8%] md:px-[12%] flex flex-col relative h-full">
    <Title :extClass="'gradient-red'" :text="attentionerText.title" />
    <Text
      class="pt-3"
      :extClass="['gradient-red', 'text-3xl']"
      :text="attentionerText.subtitle"
    />

    <div class="flex pt-[3%] justify-center">
      <p class="text-xl text-gray-500">
        Contact me under
        <a class="underline" href="lukas.kreutzer101@gmail.com">lukas.kreutzer101@gmail.com</a>
      </p>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";

import Title from "../atom/title.vue";

// composition modules
import io from "../../modules/io";
import timeline from "../../modules/gsap/timeline";

// text
import pageText from "../../text/index.json";
import Text from "../atom/text.vue";

export default defineComponent({
  components: { Title, Text },
  setup() {
    const { jsonReader } = io();
    const { createTimeline } = timeline();

    const attentionerText = ref(jsonReader(pageText).attentioner);

    onMounted(() => {});

    return { attentionerText };
  },
});
</script>
