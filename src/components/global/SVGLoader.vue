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
      const componentName = props.name;
      return defineAsyncComponent(() => import(/* @vite-ignore */ componentName));
    });

    return {
      dynamicComponent,
    };
  },
};
</script>