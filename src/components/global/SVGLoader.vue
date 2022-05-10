<template>
  <component :is="dynamicComponent" />
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
    const dynamicComponent = computed(() => {
      return defineAsyncComponent(() => import(/* @vite-ignore */ props.name));
    });

    return {
      dynamicComponent,
    };
  },
};
</script>