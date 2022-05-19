<template>
  <div class="pt-[8%] px-[8%] md:px-[12%] flex flex-col relative h-full">
    <ContentTitle ext-class="gradient-red" :text="attentionerText.title" />
    <COntentText
      class="pt-3"
      :ext-class="['gradient-red', 'text-3xl']"
      :text="attentionerText.subtitle"
    />

    <div class="flex flex-col pt-[3%] justify-center">
      <p class="text-xl text-gray-500 mt-[5%] md:mt-[1%]">
        Contact me under
        <a class="underline" href="mailto:lukas.kreutzer101@gmail.com">lukas.kreutzer101@gmail.com</a>
      </p>

      <div class="flex justify-center mt-[10%] md:mt-[5%]">
        <hr class="w-10">
      </div>

      <div class="flex flex-row justify-center mt-[8%] md:mt-[3%]">
        <Links
          :ext-class="['h-8', 'w-8', 'mx-3', 'invert']"
          :links="socialLinks"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

import ContentTitle from '../atom/title.vue'

// composition modules
import io from '../../modules/io'

// text
import socialLinksJSON from '../../text/socialLinks.json'
import pageText from '../../text/index.json'
import ContentText from '../atom/text.vue'
import Links from './links.vue'

export default defineComponent({
  components: { ContentTitle, ContentText, Links },
  setup() {
    const { jsonReader } = io()

    const attentionerText = ref(jsonReader(pageText).attentioner)
    const socialLinks = ref(jsonReader(socialLinksJSON).links)

    return { attentionerText, socialLinks }
  },
})
</script>
