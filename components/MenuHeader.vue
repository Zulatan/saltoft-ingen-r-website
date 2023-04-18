<template>
  <section>
        <div class="nav-wrapper">
            <div class="nav-container">
                <div class="nav-left" id="link" @click="goToHome"></div>
                <div class="nav-right">
                    <!-- <div class="link-wrapper"><a href="#">Projekter</a></div> -->
                    <!-- <div class="link-wrapper"><a href="#">Om os</a></div> -->
                    <!-- <div class="link-wrapper"><a href="#">Kontakt</a></div> -->
                    <NuxtLink  class="link-wrapper" to="/">Home</NuxtLink>
                    <NuxtLink  class="link-wrapper" to="/contact">Projects</NuxtLink>
                    <NuxtLink  class="link-wrapper" to="/contact">About us</NuxtLink>
                    <NuxtLink  class="link-wrapper" to="/contact">Contact</NuxtLink>
                </div>
            </div>
        </div>
    </section> 
</template>

<script>
export default {
  name: 'MenuHeader',
  methods: {
    goToHome() {
      this.$router.push('/')
    }
  }
}
</script>

<style>
    #link {
        cursor: pointer;
    }
</style>
