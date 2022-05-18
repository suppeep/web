<template>
  <div class="pt-[8%] px-[8%] md:px-[12%] flex flex-col relative h-full">
    <Title :extClass="'gradient-red'" :text="attentionerText.title" />
    <Text
      class="pt-3"
      :extClass="['gradient-red', 'text-3xl']"
      :text="attentionerText.subtitle"
    />

    <div class="flex flex-col pt-[3%] justify-center">
      <p class="text-xl text-gray-500 mt-[5%] md:mt-[1%]">
        Contact me under
        <a class="underline" href="mailto:lukas.kreutzer101@gmail.com"
          >lukas.kreutzer101@gmail.com</a
        >
      </p>

      <div class="flex justify-center mt-[10%] md:mt-[5%]">
        <hr class="w-10" />
      </div>

      <div class="flex flex-row justify-center mt-[8%] md:mt-[3%]">
        <Links
          :extClass="['h-8', 'w-8', 'mx-3', 'invert']"
          :link="socialLinks"
        ></Links>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";

import Title from "../atom/title.vue";
import Links from "./links.vue";

// composition modules
import io from "../../modules/io";

// text
import socialLinksJSON from "../../text/socialLinks.json";
import pageText from "../../text/index.json";
import Text from "../atom/text.vue";

export default defineComponent({
  components: { Title, Text, Links },
  setup() {
    const { jsonReader } = io();

    const attentionerText = ref(jsonReader(pageText).attentioner);
    const socialLinks = ref(jsonReader(socialLinksJSON).links);

    return { attentionerText, socialLinks };
  },
});
</script>
