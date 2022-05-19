<template>
  <Social
    v-for="(link, index) in links"
    :id="`links-${index}`"
    :key="index"
    :link="link.link"
    :src="link.src"
    :text="link.text"
    :ext-class="extClass"
  />
</template>

<script>
import Social from '../atom/social.vue'

export default {
  components: { Social },
  props: {
    links: {
      type: Array,
      required: true,
    },
    extClass: {
      type: Array,
      required: false,
    },
  },
}
</script>
