<template>
  <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.4413305386356!2d12.518806076694176!3d55.78557417309635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46524e6328b8bd5d%3A0xcf045cde0449c6c5!2sDanmarks%20Tekniske%20Universitet!5e0!3m2!1sda!2sdk!4v1684832108274!5m2!1sda!2sdk" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap'
}
</script>

<style lang="scss">
.map-container {
    width: 100%;
    max-width: 1600px;
    margin: auto;
    padding: 80px 0;
    iframe {
        width: 100%;
        height: 600px;
    }
}
</style>