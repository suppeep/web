<template>
  <component :is="AsyncComp" />
</template>

<script>
import { computed, defineAsyncComponent } from "vue";

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const AsyncComp = defineAsyncComponent(() =>
      import("~/components/svg/jsSVG.vue")
    );

    return {
      AsyncComp,
    };
  },
};
</script>