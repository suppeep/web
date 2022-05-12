<template>
  <div class="pt-[5%] px-[8%] md:px-[12%] flex flex-col relative h-full">
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

    <div class="flex flex-col sm:flex-row gap-5 md:gap-10 text-left py-14">
      <p
        id="personal-subtext-0"
        class="
          px-[0%]
          md:px-[6%]
          first-letter:text-6xl
          first-letter:font-bold
          first-letter:mr-3
          first-letter:float-left
          w-full
          text-xl
          font-light
        "
      >
        {{ personalText.text[0] }}<br />
        {{ personalText.text[1] }}<br />
        {{ personalText.text[2] }}
      </p>
      <Text
        id="personal-subtext-1"
        class="px-[1%] w-full"
        :text="personalText.text[3]"
      />
    </div>

    <div class="bg-white flex-col sm:flex-row hidden md:flex">
      <!-- <ImageHolder :extClass="['w-full', 'md:w-1/3', 'h-80']"></ImageHolder>

      <ImageHolder :extClass="['w-full', 'md:w-1/3', 'h-80']"></ImageHolder> -->
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
  components: { ImageHolder, Text },
  setup() {
    const { jsonReader } = io();
    const { createTimeline } = timeline();

    const personalText = ref(jsonReader(pageText).personal);

    onMounted(() => {
      const options = {
        start: "top 85%",
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
          // x: item.from.x,
          opacity: 0,
        }).to(`#${item.id}`, {
          // x: item.to.x,
          opacity: 1,
        });
      }
    });

    return { personalText };
  },
});
</script>
