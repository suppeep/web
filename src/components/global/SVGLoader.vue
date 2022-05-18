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
      console.log(props.name)
      const componentName = props.name;
      return () => import(`@/components/dynamic/${componentName}`);
    });

    return {
      dynamicComponent,
    };
  },
};
</script>