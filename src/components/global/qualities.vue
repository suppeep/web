<template>
  <div class="flex flex-col relative h-screen pt-[10%]">
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
  </div>
</template>

<script>
import gsap from "gsap";
import { ref, defineComponent, onMounted } from "vue";
import qualitiesJSON from "../../text/qualities.json";

import Chip from "../atom/chip.vue";
import Title from "../atom/title.vue";
import Text from "../atom/text.vue";
import ImageHolder from "../atom/imageHolder.vue";

// composition modules
import io from "../../modules/io";
import timeline from "../../modules/gsap/timeline";

export default defineComponent({
  components: { Chip, Title, Text, ImageHolder },
  setup() {
    const { jsonReader } = io();
    const { createTimeline } = timeline();

    const qualities = ref(jsonReader(qualitiesJSON).qualities);

    onMounted(() => {
      const options = {
        start: "top top",
        end: "+=1000vh",
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
    });

    return { qualities };
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
</style>