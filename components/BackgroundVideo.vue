<template>
  <div class="background-video">
    <!-- <video autoplay muted loop>
      <source :src="videoPath" type="video/mp4">
    </video> -->
    <div style="padding:56.25% 0 0 0;position:relative;">
      <iframe  src="https://player.vimeo.com/video/828926793?h=e3996f2a6a&amp;player_id=0&amp;app_id=58479&amp;?autoplay=1&amp;loop=1" frameborder="0" allow="autoplay" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="bgvid"></iframe>
    </div>
    <script src="https://player.vimeo.com/api/player.js"></script>
  </div>
</template>
<script>
export default {
  computed: {
    videoPath() {
      return require('../assets/video/bgvid.mp4');
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