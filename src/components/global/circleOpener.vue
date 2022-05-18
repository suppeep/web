<template>
  <section class="relative h-full md:h-screen circle-opener">
    <div
      @click="generateGradient"
      class="circle"
      style="z-index: 9999"
      :style="{ background: gradient }"
    ></div>

    <div>
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const colors = ref([
      { id: 0, hex: "" },
      { id: 1, hex: "" },
    ]);

    const randomColors = [
      "#ff0000",
      "#ff7f00",
      "#ffff00",
      "#00ff00",
      "#00ffff",
      "#0000ff",
      "#8b00ff",
      "#ff00ff",
    ];

    const randomHex = () => {
      return randomColors[Math.floor(Math.random() * randomColors.length)];
    };

    const generateGradient = () => {
      for (let i = 0; i < colors.value.length; i++) {
        colors.value[i].hex = randomHex();
      }
    };

    const gradient = computed(() => {
      let color = "linear-gradient(45deg";

      colors.value.forEach(function (e) {
        color += "," + e.hex;
      });
      color += ")";
      return color;
    });

    return { generateGradient, gradient };
  },
};
</script>

<style lang="scss" scoped>
.circle {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  filter: blur(30px);
  opacity: 0.8;
  animation: rose 20000ms ease-in-out infinite;
  @apply bg-gradient-to-r from-indigo-600 to-pink-600;
}

@keyframes rose {
  0% {
    transform: translateY(50px);
  }
  25% {
    transform: translate(400px, 200px);
    filter: blur(33px);
  }
  50% {
    transform: translate(-40px, 500px);
    filter: blur(40px);
  }
  75% {
    transform: translate(-400px, 200px);
    filter: blur(25px);
  }
  100% {
    transform: translate(0px, 50px);
    filter: blur(30px);
  }
}
</style>