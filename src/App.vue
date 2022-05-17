<template>
  <div class="cursor"></div>
  <div class="relative bg-blue-900 rounded-full overflow-hidden">
    <div class="shape will-change-transform fixed rounded-full shape-1"></div>
    <div class="shape will-change-transform fixed rounded-full shape-2"></div>
  </div>

  <!-- background space colors -->
  <div class="bg-space-noise"></div>
  <div class="bg-space-red lights"></div>
  <div class="bg-space-blue lights"></div>
  <div class="bg-space-orange lights"></div>

  <!-- main content goes here -->
  <div class="content">
    <div class="relative">
      <div>
        <div
          class="
            flex
            justify-between
            fixed
            z-[99]
            w-full
            pr-[15%]
            top-[50px]
            left-[80px]
          "
        >
          <img
            id="logo"
            class="h-20 w-20 rounded-md"
            src="./assets/images/logo.png"
          />

          <!-- Navigation -->
          <div class="container mx-auto flex items-center justify-end">
            <Navigation />
          </div>
        </div>

        <div class="vertical flex fixed z-[99] bottom-[50px] left-[80px]">
          <h2 class="text-md" id="link-0">- {{ location }},</h2>
          &nbsp;&nbsp;
          <h2 class="text-md" id="link-1">{{ currentTime }} -</h2>
        </div>

        <SentenceMaker :items="sentences" />

        <CircleOpener> </CircleOpener>
      </div>

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

      <Content id="qualities" :extClass="['flex', 'flex-row', 'pb-[200px]']">
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
import Setup from "./components/global/setup.vue";
import SVGLoader from "./components/global/SVGLoader.vue";
import Projects from "./components/global/projects.vue";

// text
import titleJSON from "./text/titles.json";
import socialLinksJSON from "./text/socialLinks.json";

// composition modules
import io from "./modules/io";
import Navigation from "./components/global/Navigation.vue";

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
    Setup,
    Projects,
    Navigation,
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
          start: "top top",
          end: "bottom bottom",
          scrub: 0.2,
          markers: false,
        },
      });

      for (const item of verticals[0].children) {
        tl.to(`#${item.id}`, {
          onStart: (Y) => {
            item.style.filter = "invert(1)";
          },
          onReverseComplete: (Y) => {
            item.style.filter = "invert(0)";
          },
        });
      }

      tl.to("#logo", {
        onStart: (Y) => {
          document.querySelector("#logo").style.filter = "invert(1)";
        },
        onReverseComplete: (Y) => {
          document.querySelector("#logo").style.filter = "invert(0)";
        },
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