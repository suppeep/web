<template>
  <div class="flex flex-col relative pt-[5%]">
    <div class="px-[12%] text-right font-bold text-5xl md:text-6xl relative">
      <Title id="setup-title" text="Daily" extClass="gradient-red pb-1" />
      <Title id="setup-title" text="Work Setup" extClass="gradient-red pb-16" />
    </div>

    <div id="quality-section">
      <div class="pt-[5%] px-[12%] grid grid-cols-1 gap-14">
        <div class="flex flex-col items-center">
          <div class="w-1/2 flex flex-col justify-center">
            <SVGLoader name="../svg/vscode.vue" class="mb-5 w-full"></SVGLoader>
            <Text
              :extClass="['text-gray-400']"
              text="My goal was to have the best web programming setup for visual studio code which fits my needs and is helpful in the most situations over the day without losing the focus."
            ></Text>
            <div class="my-4 font-bold text-gray-400">
              Get
              <a
                class="gradient-red"
                target="_blank"
                href="https://gist.github.com/suppeep/1884ce6a8fa90d0852a55bb03b399e78"
                >my setup</a
              >
            </div>
          </div>
        </div>

        <!-- book -->
        <div class="flex flex-col items-center">
          <div class="w-1/2 flex flex-col justify-center">
            <span class="text-4xl mb-4">📜</span>
            <Text
              :extClass="['text-gray-400']"
              text="I also wanted to have a book that I can read whenever I want to learn something new. That's why I create my own gitbook."
            ></Text>
            <div class="my-4 font-bold text-gray-400">
              Read
              <a
                class="gradient-red"
                target="_blank"
                href="https://lukas-10.gitbook.io/notizy/"
                >my Gitbook</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

import { ref, defineComponent, onMounted } from "vue";

import Title from "../atom/title.vue";
import Text from "../atom/text.vue";
import ImageHolder from "../atom/imageHolder.vue";
import Card from "../atom/card.vue";
import SVGLoader from "./SVGLoader.vue";

// text
import pageTextJSON from "../../text/index.json";

// composition modules
import io from "../../modules/io";
import fromto from "../../modules/gsap/fromto";

export default defineComponent({
  components: { Card, Title, Text, ImageHolder, SVGLoader },
  setup() {
    const { jsonReader } = io();
    const { createTimelineFromTo } = fromto();

    const qualitiesText = ref(jsonReader(pageTextJSON).qualities);

    onMounted(() => {
      const animation = gsap.fromTo(
        "#quality-section",
        { autoAlpha: 0, y: 300 },
        { duration: 1, autoAlpha: 1, y: 0 }
      );
      const scrollFormTo = createTimelineFromTo("#quality-section", animation);
    });

    return { qualitiesText };
  },
});
</script>

<style lang="scss" scoped>
.line {
  background-position: 50% 50%;
  background-size: cover;
  flex: none;
  height: 17vh;
  margin: clamp(15px, 3vw, 30px);
  width: 17vh;
  position: relative;
  transition: ease-in-out all 0.3s;
  opacity: 0.8;
}

$qualities: 14;
@for $i from 0 through $qualities {
  .q-list-#{$i}:hover {
    color: #22d3ff;
  }
}
</style>