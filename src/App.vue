<template>
  <div class="cursor"></div>
  <div class="relative bg-blue-900 rounded-full overflow-hidden">
    <div class="shape will-change-transform fixed rounded-full shape-1"></div>
    <div class="shape will-change-transform fixed rounded-full shape-2"></div>
  </div>

  <!-- background space colors -->
  <div class="bg-space-noise"></div>
  <div class="bg-space-red lights"></div>
  <div class="bg-space-orange lights"></div>
  <div class="bg-space-blue lights"></div>

  <!-- main content goes here -->
  <div class="content">
    <div class="relative">
      <div
        class="
          hidden
          md:flex
          justify-between
          fixed
          z-[99]
          w-full
          pr-[15%]
          top-[50px]
          left-[80px]
        "
        id="titlesTrigger"
      >
        <Navigation />
      </div>

      <div
        class="
          vertical
          flex
          fixed
          z-[99]
          bottom-[50px]
          left-[20px]
          md:left-[80px]
        "
      >
        <h2 class="text-md" id="link-0">- {{ location }},</h2>
        &nbsp;
        <h2 class="text-md" id="link-1">{{ currentTime }} -</h2>
      </div>

      <Content id="opener" :extClass="['flex', 'flex-col', 'pt-0', 'pb-0']">
        <template v-slot:content>
          <div class="flex flex-row justify-between w-full pt-[17%] px-[22%]">
            <CircleOpener> </CircleOpener>

            <div class="w-1/2 flex flex-col" id="titles">
              <SentenceMaker :items="sentences" />
            </div>
          </div>
        </template>
      </Content>

      <hr />

      <Content
        id="personal"
        :extClass="['flex', 'flex-row', 'h-full', 'pb-20']"
      >
        <template v-slot:content>
          <div class="flex flex-col w-full">
            <Personal></Personal>
          </div>
        </template>
      </Content>

      <hr />

      <Content
        id="qualities"
        :extClass="['flex', 'flex-row', 'pb-[200px]', 'bg-black']"
      >
        <template v-slot:content>
          <div class="flex flex-col w-full">
            <Qualities />
          </div>
        </template>
      </Content>

      <hr />

      <Content
        id="projects"
        :extClass="['flex', 'flex-row', 'pb-32', 'bg-black']"
      >
        <template v-slot:content>
          <div class="flex flex-col w-full">
            <Projects username="suppeep" />
          </div>
        </template>
      </Content>

      <hr />

      <Content id="setup" :extClass="['flex', 'flex-row', 'pb-32', 'bg-black']">
        <template v-slot:content>
          <div class="flex flex-col w-full">
            <Setup />
          </div>
        </template>
      </Content>

      <hr />

      <Content id="work" :extClass="['flex', 'flex-row', 'pb-32', 'bg-black']">
        <template v-slot:content>
          <div class="flex flex-col w-full">
            <Work />
          </div>
        </template>
      </Content>

      <hr />

      <Content
        id="contact"
        :extClass="['flex', 'flex-row', 'pb-32', 'bg-black']"
      >
        <template v-slot:content>
          <div class="flex flex-col w-full">
            <Attentioner />
          </div>
        </template>
      </Content>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

import Qualities from "./components/global/qualities.vue";
import Title from "./components/atom/title.vue";
import Content from "./components/atom/content.vue";
import CircleOpener from "./components/global/circleOpener.vue";
import SentenceMaker from "./components/global/sentenceMaker.vue";
import Links from "./components/global/links.vue";
import Personal from "./components/global/Personal.vue";
import Work from "./components/global/Work.vue";
import Attentioner from "./components/global/Attentioner.vue";
import SVGLoader from "./components/global/SVGLoader.vue";
import Projects from "./components/global/projects.vue";
import Navigation from "./components/global/Navigation.vue";
import Setup from './components/global/setup.vue';

// text
import titleJSON from "./text/titles.json";
import socialLinksJSON from "./text/socialLinks.json";

// composition modules
import io from "./modules/io";

export default {
  components: {
    Qualities,
    Title,
    Content,
    CircleOpener,
    SentenceMaker,
    Personal,
    Links,
    Work,
    Attentioner,
    SVGLoader,
    Projects,
    Navigation,
    Setup
},
  setup() {
    const { jsonReader } = io();

    const sentences = ref(jsonReader(titleJSON).titles);
    const currentTime = ref(new Date().toLocaleDateString("de-DE"));
    const location = ref("Germany");

    const socialLinks = ref(jsonReader(socialLinksJSON).links);

    onMounted(() => {
      document.body.addEventListener("mousemove", (evt) => {
        const mouseX = evt.clientX;
        const mouseY = evt.clientY;

        gsap.set(".cursor", {
          x: mouseX,
          y: mouseY,
        });

        gsap.to(".shape", {
          x: mouseX,
          y: mouseY,
          stagger: -0.1,
        });
      });

      const verticals = gsap.utils.toArray(".vertical");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#qualities",
          start: "bottom bottom",
          end: "bottom bottom",
          scrub: 0.2,
        },
      });

      for (const item of verticals[0].children) {
        tl.to(`#${item.id}`, {
          onStart: () => {
            item.style.filter = "invert(1)";
          },
          onReverseComplete: () => {
            item.style.filter = "invert(0)";
          },
        });
      }

      tl.to("#logo", {
        onStart: () => {
          document.querySelector("#logo").style.filter = "invert(1)";
        },
        onReverseComplete: () => {
          document.querySelector("#logo").style.filter = "invert(0)";
        },
      });

      const tlEve = gsap.timeline({
        scrollTrigger: {
          trigger: "#titlesTrigger",
          start: "top top",
          end: "+=400px",
          scrub: 0.7,
        },
      });

      tlEve.to("#titles", {
        y: 320,
      });
    });

    return {
      sentences,
      currentTime,
      location,
      socialLinks,
    };
  },
};
</script>