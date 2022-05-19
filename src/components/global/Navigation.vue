<template>
  <div>
    <img
      id="logo"
      alt="logo"
      class="h-20 w-20 rounded-md"
      src="../../assets/images/logo.png"
    >
  </div>
  <ul class="w-8/12 flex items-center justify-end space-x-8 nav">
    <li
      v-for="(item, index) in ['Personal', 'Qualities', 'Projects', 'Setup', 'Contact']"
      :id="`nav-item-${index}`"
      :key="index"
    >
      <button
        class="text-base cursor-none hover:text-[#22d3ff]"
        @click="scrollToSection(item.toLocaleLowerCase())"
      >
        {{ item }}
      </button>
    </li>
  </ul>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { onMounted } from 'vue'

export default {
  setup() {
    gsap.registerPlugin(ScrollToPlugin)

    const scrollToSection = (id) => {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: {
          y: document.getElementById(id),
          offset: -10,
        },
      })
    }

    onMounted(() => {
      const navigation = gsap.utils.toArray('.nav')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#qualities',
          start: 'bottom bottom',
          end: 'bottom bottom',
          scrub: 0.2,
        },
      })

      for (const item of navigation[0].children) {
        tl.to(`#${item.id}`, {
          onStart: () => {
            item.style.filter = 'invert(1)'
          },
          onReverseComplete: () => {
            item.style.filter = 'invert(0)'
          },
        })
      }
    })

    return {
      scrollToSection,
    }
  },
}
</script>
