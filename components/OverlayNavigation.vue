<template>
    <section>
        <div>
            <div class="overlay" :class="{ open: isOpen && isMobile }">
            <div class="overlay-content">
                <!-- Your navigation links here -->
                <NuxtLink  class="link-mobil-wrapper" to="/">Hjem</NuxtLink>
                <NuxtLink  class="link-mobil-wrapper" to="/projekt">Projekter</NuxtLink>
                <NuxtLink  class="link-mobil-wrapper" to="/">Om os</NuxtLink>
                <NuxtLink  class="link-mobil-wrapper" to="/kontakt">Kontakt</NuxtLink>
            </div>
            </div>

            <header>
            <div class="burger-menu" v-if="isMobile" @click="toggleNav">
                <div class="burger-line"></div>
                <div class="burger-line"></div>
                <div class="burger-line"></div>
            </div>
            </header>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      isMobile: false
    };
  },
  created() {
    this.isMobile = window.innerWidth <= 500;
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 500;
    },
    toggleNav() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
