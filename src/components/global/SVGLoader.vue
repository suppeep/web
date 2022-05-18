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
    const AsyncComp = computed(() =>
      defineAsyncComponent(() =>
        import(/* @vite-ignore */ `../../components/svg/${props.name}.vue`)
      )
    );

    return {
      AsyncComp,
    };
  },
};
</script>