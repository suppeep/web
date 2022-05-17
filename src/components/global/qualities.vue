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

    <!-- Qualities Wall -->
    <div class="overflow-hidden">
      <div class="images-line flex">
        <ImageHolder
          v-for="(item, index) in qualities"
          :src="item.src"
          :key="index"
          :extClass="['line']"
        />
      </div>
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
import qualitiesJSON from "../../text/qualities.json";
import pageTextJSON from "../../text/index.json";

// composition modules
import io from "../../modules/io";
import timeline from "../../modules/gsap/timeline";

export default defineComponent({
  components: { Card, Title, Text, ImageHolder, SVGLoader },
  setup() {
    const { jsonReader } = io();
    const { createTimeline } = timeline();

    const qualities = ref(jsonReader(qualitiesJSON).qualities);
    const qualitiesText = ref(jsonReader(pageTextJSON).qualities);

    onMounted(() => {
      const options = {
        start: "top top",
        end: "+=600vh",
        scrub: 0.3,
        pin: true,
      };

      // config for images
      const chipConfig = gsap.utils.toArray(".images-line");
      const tl = createTimeline("#qualities", options);

      tl.to("#qualities", {
        backgroundColor: "#000",
      });

      // animation for chips
      chipConfig.forEach((el) => {
        tl.from(el, {
          x: "90%",
          opacity: 1,
        }).to(el, {
          x: "-100vw",
          opacity: 1,
        });
      });

      const tlCards = createTimeline("#quality-section", {
        start: "top +=30%",
        end: "bottom +=20%",
        scrub: 0.3,
      });

      tlCards
        .from("#quality-section", {
          y: 500,
          opacity: 0.3,
        })
        .to("#quality-section", {
          y: 0,
          opacity: 1,
        });
    });

    return { qualities, qualitiesText };
  },
});
</script>

<style lang="scss" scoped>
.images-line {
  .line {
    background-position: 50% 50%;
    background-size: cover;
    flex: none;
    height: 20vh;
    margin: clamp(15px, 3vw, 30px);
    width: 20vh;
    position: relative;
    transition: ease-in-out all 0.3s;
    opacity: 0.8;
  }
}

$qualities: 14;
@for $i from 0 through $qualities {
  .q-list-#{$i}:hover {
    color: rgb(34, 211, 255);
  }
}
</style>