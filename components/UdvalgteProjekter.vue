<template>
  <div style="background-color: white;">
    <div class="content-wrapper">
      <div class="header">
        <div class="header-container">
          <h2>Udvalgte projekter</h2>
        </div>
      </div>
      <div class="projekt-container">
        <div class="projekt-container-billede-wrapper">
          <NuxtLink to="/projekt">
            <img src="../assets/images/udvalgte-pro-3.avif" alt="udvalgt projekt 3">
          </NuxtLink>
          <NuxtLink to="/projekt">
            <img src="../assets/images/udvalgte-pro-2.avif" alt="udvalgt projekt 2">
          </NuxtLink>
          <NuxtLink to="/projekt">
            <img src="../assets/images/udvalgte-pro-1.avif" alt="udvalgt projekt 1">
          </NuxtLink>
          <NuxtLink to="/projekt">
            <img src="../assets/images/udvalgte-pro-3.avif" alt="udvalgt projekt 3">
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UdvalgteProjekter'
}
</script>
