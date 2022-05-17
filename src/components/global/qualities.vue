<template>
  <div class="flex flex-col relative pt-[5%]">
    <div class="px-[12%] text-right font-bold text-5xl md:text-6xl relative">
      <Title id="qualities-title" text="My" extClass="gradient-red pb-1" />
      <Title
        id="qualities-title"
        text="Qualities"
        extClass="gradient-red pb-16"
      />
    </div>

    <div id="quality-section">
      <div class="pt-[5%] px-[12%] grid grid-cols-1 md:grid-cols-2 gap-14">
        <Card
          v-for="(card, index) in qualitiesText.cards"
          :key="index"
          :title="card.title"
        >
          <template v-slot:icon>
            <SVGLoader :name="card.icon"></SVGLoader>
          </template>
          <template v-slot:paragraph>
            {{ card.paragraph }}
          </template>
        </Card>
      </div>

      <div class="pt-[5%] px-[12%] grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          class="
            text-gray-400
            justify-left
            md:justify-center
            flex
            items-center
            q-list
          "
          v-for="(item, index) in qualitiesText.list"
          :key="index"
          :class="`q-list-${index}`"
        >
          <div
            class="
              flex
              items-center
              gap-2
              bottom-0
              left-0
              rounded
              w-10
              h-10
              mt-2
              text-left
            "
          >
            <span class="material-icons">check</span>
            {{ item }}
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
        { autoAlpha: 0, y: 150 },
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