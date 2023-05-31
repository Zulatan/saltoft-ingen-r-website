<template>
  <section>
    <div>
      <div class="overlay" :class="{ open: isOpen && isMobile }">
        <div class="overlay-content">
          <NuxtLink class="link-mobil-wrapper" to="/" :class="{ active: isLinkActive('/') }">
            Hjem
          </NuxtLink>
          <NuxtLink class="link-mobil-wrapper" to="/projekt" :class="{ active: isLinkActive('/projekt') }">
            Projekter
          </NuxtLink>
          <NuxtLink class="link-mobil-wrapper" to="/omos" :class="{ active: isLinkActive('/omos') }">
            Om os
          </NuxtLink>
          <NuxtLink class="link-mobil-wrapper" to="/kontakt" :class="{ active: isLinkActive('/kontakt') }">
            Kontakt
          </NuxtLink>
        </div>
      </div>

      <header>
        <div v-if="isMobile" class="burger-menu" @click="toggleNav">
          <div class="burger-line" />
          <div class="burger-line" />
          <div class="burger-line" />
        </div>
      </header>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OverlayNavigation',
  data () {
    return {
      isOpen: false,
      isMobile: false
    }
  },
  created () {
    this.isMobile = false
  },
  mounted () { // function called after an element is added to the DOM. used to determine wether the burger menu should be shown
    if (process.client) { // code needed for when ssr is set to true. code inside if is only executed on client-side - not necessary for this project ssg
      this.isMobile = window.innerWidth <= 500
      window.addEventListener('resize', this.handleResize)
      this.$router.afterEach(this.closeNav)
    }
  },
  destroyed () { // called when an element is removed from the DOM. used to remove the burger nav when above the resize pixel input
    window.removeEventListener('resize', this.handleResize)
  },
  methods: { // functions
    handleResize () {
      this.isMobile = window.innerWidth <= 500 // checks if the windows is 500px or below, if it is, show burger nav
    },
    toggleNav () {
      this.isOpen = !this.isOpen // opens the burgernav on click
    },
    closeNav () { // closes nav whenever a link is clicked
      this.isOpen = false
    },
    isLinkActive (route) {
      return this.$route.path === route
    }
  }
}
</script>

<style lang="scss">

@media screen and (max-width: 375px) {
 .burger-menu {
  left: 20px;
 }
}

</style>
