<template>
  <div class="flex flex-col relative pt-[5%]">
    <div
      class="
        px-[8%]
        md:px-[12%]
        text-right
        font-bold
        text-5xl
        md:text-6xl
        relative
      "
    >
      <ContentTitle id="setup-title" text="Daily" ext-class="gradient-yellow pb-1" />
      <ContentTitle
        id="setup-title"
        text="Work Setup"
        ext-class="gradient-yellow pb-16"
      />
    </div>

    <div id="quality-section">
      <div class="pt-[5%] px-[12%] grid grid-cols-1 gap-14">
        <div class="flex flex-col items-center">
          <div class="w-full md:w-1/2 flex flex-col justify-center">
            <SVGLoader name="vscode" class="mb-5 w-full" />
            <ContentText
              :ext-class="['text-gray-400']"
              text="My goal was to have the best web programming setup for visual studio code which fits my needs and is helpful in the most situations over the day without losing the focus."
            />
            <div class="my-4 font-bold text-gray-400">
              Get
              <a
                class="gradient-red"
                target="_blank"
                href="https://gist.github.com/suppeep/86c747cf8671ea284c6f208bf309c45f"
              >my setup</a>
            </div>
          </div>
        </div>

        <!-- book -->
        <div class="flex flex-col items-center">
          <div class="w-full md:w-1/2 flex flex-col justify-center">
            <span class="text-4xl mb-4">📜</span>
            <ContentText
              :ext-class="['text-gray-400']"
              text="I also wanted to have a book that I can read whenever I want to learn something new. That's why I create my own gitbook."
            />
            <div class="my-4 font-bold text-gray-400">
              Read
              <a
                class="gradient-red"
                target="_blank"
                href="https://lukas-10.gitbook.io/notizy/"
              >my Gitbook</a>
            </div>
          </div>
        </div>

        <!-- coffee -->
        <div class="flex flex-col items-center">
          <div class="w-full md:w-1/2 flex flex-col justify-center">
            <span class="text-4xl mb-4">☕</span>
            <ContentText
              :ext-class="['text-gray-400']"
              text="Yes, Coffee is one of my favorite drinks. I like to drink it when I'm coding or when I'm working on a project."
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import gsap from 'gsap'

import ContentTitle from '../atom/title.vue'
import ContentText from '../atom/text.vue'
import pageTextJSON from '../../text/index.json'
import io from '../../modules/io'
import fromto from '../../modules/gsap/fromto'

import SVGLoader from './SVGLoader.vue'

export default defineComponent({
  components: { ContentTitle, ContentText, SVGLoader },
  setup() {
    const { jsonReader } = io()
    const { createTimelineFromTo } = fromto()

    const qualitiesText = ref(jsonReader(pageTextJSON).qualities)

    onMounted(() => {
      const animation = gsap.fromTo(
        '#quality-section',
        { autoAlpha: 0, y: 300 },
        { duration: 1, autoAlpha: 1, y: 0 },
      )
      const scrollFormTo = createTimelineFromTo('#quality-section', animation)
    })

    return { qualitiesText }
  },
})
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
