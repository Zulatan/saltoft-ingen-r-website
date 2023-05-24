<template>
  <section>
    <div class="nav-wrapper">
      <div class="nav-container">
        <div class="nav-left" id="link" @click="goToHome">
          <img src="../assets/logos/logo_dark.svg" alt="image of the company logo">
        </div>
        <div class="nav-right">
          <NuxtLink  class="link-wrapper" to="/">Hjem</NuxtLink>
          <NuxtLink  class="link-wrapper" to="/projekt">Projekter</NuxtLink>
          <NuxtLink  class="link-wrapper" to="/omos">Om os</NuxtLink>
          <NuxtLink  class="link-wrapper" to="/kontakt">Kontakt</NuxtLink>
        </div>
      </div>
    </div>
    
    <OverlayNavigation/>
  </section> 
</template>

<script>
import OverlayNavigation from './OverlayNavigation.vue';
export default {
  components: { OverlayNavigation },
  name: 'MenuHeader',
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    toggleNav() {
      this.isOpen = !this.isOpen;
    },
  }
}
</script>

<style>
    #link {
        cursor: pointer;
    }
  @media screen and (max-width: 500px) {
    .nav-wrapper {
      display: none;
    }
  }
</style>
