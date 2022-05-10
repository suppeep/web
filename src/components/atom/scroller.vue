<template>
  <div class="scroll">Scroll down ↓</div>
</template>

<style lang="scss" scoped>
svg {
  margin-top: 80vh;
  max-height: 70vh;
  width: 500px;
}

.scroll {
  position: absolute;
  bottom: 80vh;
  left: 50%;
  transform: translateX(-50%);
}
</style>