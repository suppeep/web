<template>
  <div class="flex flex-col relative pt-[10%]">
    <div class="px-[12%] text-left font-bold text-5xl md:text-6xl relative">
      <Title
        v-for="(text, index) in workText.title"
        :id="`work-text-${index}`"
        :key="`work-text-${index}`"
        class="gradient-red my-1.5"
        :text="text"
      >
      </Title>
    </div>

    <div class="flex flex-col justify-center overflow-hidden">
      <div class="pt-6 flex justify-center">
        <Text
          text="Around the world, on three continents, Lukas is well known by companies for his work and understanding to create the most powerful solutions and to keep teams on the right track."
          :extClass="['text-gray-500', 'w-1/2']"
        />
      </div>

      <div class="flex flex-wrap justify-center flex-row mt-12">
        <div
          v-for="(item, index) in countries"
          :key="index"
          class="text-lg px-4 py-2 m-3 bg-[#23283b] text-gray-400 rounded-sm"
        >
          {{ item }}
        </div>
      </div>

      <div class="flex justify-center w-full">
        <canvas
          class="text-center w-[500px] h-[500px]"
          id="cobe"
          width="1000"
          height="1000"
        ></canvas>
      </div>
    </div>
  </div>
</template>

<script>
import createGlobe from "cobe";
import { ref, defineComponent, onMounted } from "vue";

import Title from "../atom/title.vue";
import Text from "../atom/text.vue";

// composition modules
import io from "../../modules/io";

// text
import pageText from "../../text/index.json";

export default defineComponent({
  components: { Title, Text },
  setup() {
    const { jsonReader } = io();

    const workText = ref(jsonReader(pageText).work);
    const countries = ref(workText.value.countries);

    onMounted(() => {
      let phi = 0;
      let canvas = document.getElementById("cobe");

      const globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: 1000,
        height: 1000,
        phi: 0,
        theta: 0.2,
        dark: 10,
        diffuse: 2,
        scale: 1,
        mapSamples: 8000,
        mapBrightness: 8,
        baseColor: [0.3, 1.7, 0.2],
        markerColor: [1, 0.5, 1],
        glowColor: [1.9, 1.9, 1.9],
        offset: [0, 120],
        markers: [
          { location: [47.834576, 12.11319], size: 0.08 },
          { location: [42.89385, 12.52678], size: 0.08 },
          { location: [51.352133, -0.004636], size: 0.08 },
          { location: [13.78926, 77.533178], size: 0.08 },
          { location: [38.458823, -87.288317], size: 0.08 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.002;
        },
      });
    });

    return { workText, countries };
  },
});
</script>


