<template>
  <div
    class="pt-[5%] px-[8%] md:px-[12%] flex flex-col relative h-full"
    id="eve"
  >
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
        <Highlighter
          highlightClassName="gradient-red"
          :searchWords="keywords"
          :autoEscape="true"
          :textToHighlight="personalText.text[0]"
        />
      </p>

      <Text
        id="personal-subtext-1"
        class="px-[1%] w-full"
        :text="personalText.text[1]"
      />
    </div>

    <div
      class="
        bg-transparent
        flex-col
        sm:flex-row
        md:flex
        translate-y-[0px]
        md:translate-y-[400px]
        space-y-2
      "
      id="personal-images"
    >
      <div class="w-full md:w-1/3 grid place-items-center">
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="tailwind logo"
          class="rounded-xl"
        />
      </div>
      <div
        class="
          w-full
          md:w-1/3
          md:translate-y-32 md:translate-x-12
          grid
          place-items-center
        "
      >
        <img
          src="../../assets/images/lukas_kreutzer.jpg"
          alt="tailwind logo"
          class="rounded-xl sepia"
        />
      </div>
      <div class="w-full md:w-1/3 grid place-items-center">
        <img
          src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="tailwind logo"
          class="rounded-xl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import Highlighter from "vue-highlight-words";

import Text from "../atom/text.vue";
import ImageHolder from "../atom/imageHolder.vue";

// composition modules
import io from "../../modules/io";
import timeline from "../../modules/gsap/timeline";

// text
import pageText from "../../text/index.json";
import { computed } from "@vue/reactivity";

export default defineComponent({
  components: { ImageHolder, Text, Highlighter },
  setup() {
    const { jsonReader } = io();
    const { createTimeline } = timeline();

    const personalText = ref(jsonReader(pageText).personal);

    const keywords = computed(() => {
      return ["$Code", "$Design", "$Teamwork"];
    });

    onMounted(() => {
      if (window.screen.width > 768) {
        const options = {
          start: "top 85%",
          end: "top 10%",
          scrub: 0.3,
        };

        const tl = createTimeline("#personal", options);

        tl.to("#eve", {
          y: -420,
        });

        tl.to("#personal-images", {
          y: -120,
        });
      }
    });

    return { personalText, keywords };
  },
});
</script>
