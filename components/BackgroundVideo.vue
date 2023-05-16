<template>
  <div class="background-video">
    <video autoplay muted loop>
      <source :src="videoPath" type="video/mp4">
    </video>
  </div>
</template>
<script>
export default {
  computed: {
    videoPath() {
      return require('../assets/video/si-video.mp4');
    },
  },
};
</script>

<style scoped>
.background-video {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

.background-video video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>