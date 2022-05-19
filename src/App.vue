<template>
  <div class="cursor" />
  <div class="relative bg-blue-900 rounded-full overflow-hidden">
    <div class="shape will-change-transform fixed rounded-full shape-1" />
    <div class="shape will-change-transform fixed rounded-full shape-2" />
  </div>

  <!-- background space colors -->
  <div class="bg-space-noise" />
  <div class="bg-space-red lights" />
  <div class="bg-space-orange lights" />
  <div class="bg-space-blue lights" />

  <!-- main content goes here -->
  <div class="content">
    <div class="relative">
      <div
        id="titlesTrigger"
        class="
          flex
          justify-between
          fixed
          z-[99]
          w-full
          pr-[1%]
          md:pr-[15%]
          top-[50px]
          left-[2px]
          md:left-[80px]
        "
      >
        <img
          alt="logo"
          class="flex md:hidden h-20 w-20 rounded-md"
          src="./assets/images/logo.png"
        >

        <div class="hidden md:flex justify-between w-full">
          <Navigation />
        </div>
      </div>

      <div
        class="
          vertical
          flex
          fixed
          z-[99]
          bottom-[50px]
          left-[10px]
          md:left-[80px]
        "
      >
        <h2 id="link-0" class="text-md">
          - {{ location }},
        </h2>
        &nbsp;
        <h2 id="link-1" class="text-md">
          {{ currentTime }} -
        </h2>
      </div>

      <PageContent id="opener" :ext-class="['flex', 'flex-col', 'pt-0', 'pb-0']">
        <template #content>
          <div
            class="
              flex flex-col
              md:flex-row
              justify-between
              w-full
              pt-[4%]
              md:pt-[17%]
              px-[10%]
              md:px-[22%]
            "
          >
            <CircleOpener />

            <div id="titles" class="w-full md:w-1/2 flex flex-col">
              <SentenceMaker :items="sentences" />
            </div>
          </div>
        </template>
      </PageContent>

      <hr>

      <PageContent
        id="personal"
        :ext-class="['flex', 'flex-row', 'h-full', 'pb-20', 'pt-44']"
      >
        <template #content>
          <div class="flex flex-col w-full">
            <Personal />
          </div>
        </template>
      </PageContent>

      <hr>

      <PageContent
        id="qualities"
        :ext-class="['flex', 'flex-row', 'pb-[200px]', 'bg-black']"
      >
        <template #content>
          <div class="flex flex-col w-full">
            <Qualities />
          </div>
        </template>
      </PageContent>

      <hr>

      <PageContent
        id="projects"
        :ext-class="['flex', 'flex-row', 'pb-32', 'bg-black']"
      >
        <template #content>
          <div class="flex flex-col w-full">
            <Projects username="suppeep" />
          </div>
        </template>
      </PageContent>

      <hr>

      <PageContent id="setup" :ext-class="['flex', 'flex-row', 'pb-32', 'bg-black']">
        <template #content>
          <div class="flex flex-col w-full">
            <Setup />
          </div>
        </template>
      </PageContent>

      <hr>

      <PageContent id="work" :ext-class="['flex', 'flex-row', 'pb-32', 'bg-black']">
        <template #content>
          <div class="flex flex-col w-full">
            <Work />
          </div>
        </template>
      </PageContent>

      <hr>

      <PageContent
        id="contact"
        :ext-class="['flex', 'flex-row', 'pb-32', 'bg-black']"
      >
        <template #content>
          <div class="flex flex-col w-full">
            <Attentioner />
          </div>
        </template>
      </PageContent>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { onMounted, ref } from 'vue'

import Qualities from './components/global/qualities.vue'
import PageContent from './components/atom/content.vue'
import CircleOpener from './components/global/circleOpener.vue'
import SentenceMaker from './components/global/sentenceMaker.vue'
import Links from './components/global/links.vue'
import Personal from './components/global/Personal.vue'
import Work from './components/global/Work.vue'
import Attentioner from './components/global/Attentioner.vue'
import SVGLoader from './components/global/SVGLoader.vue'
import Projects from './components/global/projects.vue'
import Navigation from './components/global/Navigation.vue'
import Setup from './components/global/setup.vue'

// text
import titleJSON from './text/titles.json'
import socialLinksJSON from './text/socialLinks.json'

// composition modules
import io from './modules/io'

export default {
  components: {
    Qualities,
    PageContent,
    CircleOpener,
    SentenceMaker,
    Personal,
    Links,
    Work,
    Attentioner,
    SVGLoader,
    Projects,
    Navigation,
    Setup,
  },
  setup() {
    const { jsonReader } = io()

    const sentences = ref(jsonReader(titleJSON).titles)
    const currentTime = ref(new Date().toLocaleDateString('de-DE'))
    const location = ref('Germany')

    const socialLinks = ref(jsonReader(socialLinksJSON).links)

    onMounted(() => {
      document.body.addEventListener('mousemove', (evt) => {
        const mouseX = evt.clientX
        const mouseY = evt.clientY

        gsap.set('.cursor', {
          x: mouseX,
          y: mouseY,
        })

        gsap.to('.shape', {
          x: mouseX,
          y: mouseY,
          stagger: -0.1,
        })
      })

      const verticals = gsap.utils.toArray('.vertical')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#qualities',
          start: 'top +=1000px',
          end: 'bottom bottom',
          scrub: 0.2,
        },
      })

      for (const item of verticals[0].children) {
        tl.to(`#${item.id}`, {
          onStart: () => {
            item.style.filter = 'invert(1)'
          },
          onReverseComplete: () => {
            item.style.filter = 'invert(0)'
          },
        })
      }

      tl.to('#logo', {
        onStart: () => {
          document.querySelector('#logo').style.filter = 'invert(1)'
        },
        onReverseComplete: () => {
          document.querySelector('#logo').style.filter = 'invert(0)'
        },
      })

      if (window.screen.width > 768) {
        const tlEve = gsap.timeline({
          scrollTrigger: {
            trigger: '#titlesTrigger',
            start: 'top top',
            end: '+=400px',
            scrub: 0.7,
          },
        })

        tlEve.to('#titles', {
          y: 320,
        })
      }
    })

    return {
      sentences,
      currentTime,
      location,
      socialLinks,
    }
  },
}
</script>
