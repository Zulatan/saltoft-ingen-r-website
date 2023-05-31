<template>
  <div>
    <section style="background-color: white;">
      <div class="hero">
        <div class="hero-background-image-container">
          <div class="hero-overlay" />
          <img src="../assets/images/hero-bg.avif" alt="frontpage background image">
        </div>
        <div class="hero-content-wrapper">
          <div class="content-header-container">
            <h1>
              Bygningsingeniør, bæredygtig design & teknisk rådgivning.
            </h1>
          </div>
          <!-- <div class="content-text-container">
                    <p>Har din virksomhed brug for hjælp til ovenstående eller andre opgaver indenfor byggeri og teknik. Vi har stærk erfaring i byggebranchen og ser hver en opgave som en enestående mulighed for at skille os ud fra konkurrenterne. <br><br>
                        Vi kan sørge for et stærkt samarbejde med god kommunikation og kunden taget i hånden fra start projekt til slut.</p>
                </div> -->
          <div class="content-buttons-container">
            <a href="projekt">Projekter</a>
            <a href="kontakt">Kontakt</a>
          </div>
        </div>
      </div>
    </section>

    <InfoBoxes />
    <Quote />
    <UdvalgteProjekter />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
  },
  head () {
    return {
      title: 'Saltoft Ingeniør A/S',
      meta: [
        { hid: 'description', name: 'description', content: 'Forsiden af hjemmesiden som indeholder produkter, services, kontaktmuligheder, tlf-nummer.' },
        { name: 'keywords', content: 'Saltoft Ingeniør, forside, Ingeniørhjemmeside, byggevirksomhed' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { property: 'og:title', content: 'Saltoft Ingeniør, byggeteknisk virksomhed' },
        { property: 'og:description', content: 'Se vores produkter og services.' },
        { name: 'robots', content: 'index, follow' }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/homepage.scss';
  @import './assets/scss/homepagequote.scss';
  @import './assets/scss/homepageudvalgteprojekter.scss';
  @import './assets/scss/footer.scss';
</style>
