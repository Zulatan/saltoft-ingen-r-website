<template>
    <div>
        <ProjectHero/>
        <UdvalgteProjekter/>
    </div>
</template>

<script>
export default {
    head() {
    return {
      title: 'Projekter | Saltoft Ingeniør A/S',
      meta: [
        { hid: 'description', name: 'description', content: 'Indeholder de forskellige projekter saltoft ingeniør har stået for og arbejdet på.' },
        { name: "keywords", content: "Læs om vores tidligere projekter, projekter, byggeprojekter, Saltoft Ingeniør projekter" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { property: "og:title", content: "Saltoft Ingeniør, byggeteknisk virksomhed" },
        { property: "og:description", content: "Se billeder og beskrivelser fra tidligere projekter." },
      ]
    }
  },
}
</script>

<style lang="scss">
  // @import './assets/scss/projectgrid.scss';
</style>