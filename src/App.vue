<template>
  <div class="cursor"></div>
  <div class="relative bg-blue-900 rounded-full overflow-hidden">
    <div class="shape will-change-transform fixed rounded-full shape-1"></div>
    <div class="shape will-change-transform fixed rounded-full shape-2"></div>
  </div>

  <!-- main content goes here -->
  <div class="content">
    <div class="relative">
      <div class="vertical flex fixed z-10" style="left: 80px; top: 80px">
        <Links :extClass="['rotate-90']" :link="socialLinks"></Links>
        &nbsp;

        <h2 class="text-lg">- {{ location }},</h2>
        &nbsp;&nbsp;
        <h2 class="text-lg">{{ currentTime }} -</h2>
      </div>

      <SentenceMaker :items="sentences" />

      <CircleOpener> </CircleOpener>

      <hr />

      <Content
        id="personal"
        :extClass="['flex', 'flex-row', 'h-full', 'pb-48']"
      >
        <template v-slot:content>
          <div class="flex flex-col w-full">
            <Personal></Personal>
          </div>
        </template>
      </Content>

      <hr />

      <Content id="qualities" :extClass="['flex', 'flex-row']">
        <template v-slot:content>
          <div class="flex flex-col w-full">
            <Qualities />
          </div>
        </template>
      </Content>

      <hr />

      <Content id="work" :extClass="['flex', 'flex-row', 'py-0', 'bg-black']">
        <template v-slot:content>
          <div class="flex flex-col w-full">
            <Work />
          </div>
        </template>
      </Content>

      <section style="height: 1000px"></section>
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

      const verticals = gsap.utils.toArray(".vertical h2");

      verticals.forEach((item) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: "#qualities",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.2,
              markers: false,
            },
          })
          .to(item, {
            color: "#fff",
          });
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
