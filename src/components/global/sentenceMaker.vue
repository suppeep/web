<template>
  <div
    v-for="(item, index) in items"
    :key="index"
    :id="item.id"
    class="z-10 fixed"
    style="right: 25%; top: 22%"
  >
    <Title :text="item.text" :extClass="'uppercase text-right w-min'" />
  </div>
</template>

<script>
import { onMounted } from "vue";

import Title from "../atom/title.vue";

// composition modules
import timeline from "../../modules/gsap/timeline";

export default {
  components: {
    Title,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  setup() {
    const { createTimeline } = timeline();

    // TODO: Create timeline based from the imported items
    onMounted(() => {
      const options = {
        pin: false,
        start: "top top",
        end: "+=550",
        scrub: 0.2,
      };

      const tl1 = createTimeline("#openerText", options);
      tl1.to("#openerText", {
        top: "-100%",
        opacity: 1,
      });

      const options2 = {
        pin: false,
        start: "+=60",
        end: "+=300",
        scrub: 0.2,
      };

      const tl2 = createTimeline("#openerText", options2);
      tl2
        .from("#openerTextCoder", {
          opacity: 0,
        })
        .to("#openerTextCoder", {
          opacity: 1,
          top: "-100%",
        });

      const options3 = {
        pin: false,
        start: "+=230",
        end: "+=400",
        scrub: 0.2,
      };

      const tl3 = createTimeline("#openerTextCoder", options3);
      tl3
        .from("#openerText3", {
          opacity: 0,
        })
        .to("#openerText3", {
          opacity: 1,
          top: "-100%",
        });

      const options4 = {
        pin: false,
        start: "+=440",
        end: "+=550",
        scrub: 0.2,
      };

      const tl4 = createTimeline("#openerText3", options4);
      tl4
        .from("#openerText4", {
          opacity: 0,
        })
        .to("#openerText4", {
          opacity: 1,
          top: "-100%",
        });
    });
  },
};
</script>
