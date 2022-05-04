<template>
  <div class="pt-[5%] px-[12%] flex flex-col relative h-full">
    <div class="text-left font-bold text-5xl md:text-6xl relative">
      <div
        v-for="(text, index) in personalText.title"
        :id="`personal-text-${index}`"
        :key="`personal-text-${index}`"
        class="gradient-red my-1.5"
      >
        {{ text }}
      </div>
    </div>

    <div class="bg-white flex flex-col sm:flex-row py-10">
      <ImageHolder
        v-for="(item, index) in [1, 2, 3]"
        :key="index"
        :extClass="['w-full', 'md:w-1/3']"
      ></ImageHolder>
    </div>

    <div class="flex flex-col sm:flex-row gap-5 md:gap-10 text-left">
      <Text
        id="personal-subtext-0"
        class="
          px-[10%]
          first-letter:text-6xl
          first-letter:font-bold
          first-letter:mr-3
          first-letter:float-left
        "
        :text="personalText.text[0]"
      />
      <Text
        id="personal-subtext-1"
        class="px-[1%]"
        :text="personalText.text[0]"
      />
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";

import Text from "../atom/text.vue";
import ImageHolder from "../atom/imageHolder.vue";

// composition modules
import io from "../../modules/io";
import timeline from "../../modules/gsap/timeline";

// text
import pageText from "../../text/index.json";

export default defineComponent({
  setup() {
    const { jsonReader } = io();
    const { createTimeline } = timeline();

    const personalText = ref(jsonReader(pageText).personal);

    onMounted(() => {
      const options = {
        start: "top 92%",
        end: "top 10%",
        scrub: 0.3,
      };

      const tl = createTimeline("#personal", options);

      const textConfig = [
        {
          id: "personal-text-0",
          from: { x: "-100vw", y: 0 },
          to: { x: 0, y: 0 },
        },
        {
          id: "personal-text-1",
          from: { x: "-100vw", y: 0 },
          to: { x: 0, y: 0 },
        },
        {
          id: "personal-text-2",
          from: { x: "-100vw", y: 0 },
          to: { x: 0, y: 0 },
        },
      ];

      for (const item of textConfig) {
        tl.from(`#${item.id}`, {
          x: item.from.x,
        }).to(`#${item.id}`, {
          x: item.to.x,
        });
      }
    });

    return { personalText };
  },
  components: { ImageHolder, Text },
});
</script>


