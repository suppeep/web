<template>
  <Social
    v-for="(link, index) in link"
    :key="index"
    :link="link.link"
    :src="link.src"
    :text="link.text"
    :extClass="extClass"
  ></Social>
</template>

<script>
import Social from "../atom/social.vue";

export default {
  components: { Social },
  props: {
    link: {
      type: Array,
      required: true,
    },
    extClass: {
      type: Array,
      required: false,
    },
  },
};
</script>