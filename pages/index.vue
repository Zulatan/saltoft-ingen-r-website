<template>
  <div>
    <section>
            <BackgroundVideo/>
        <div class="hero">
            <div class="hero-background-image-container">
                <!-- <video autoplay loop muted playsinline>
                    <source src="assets/video/si-video.mp4" type="video/mp4">
                </video> -->
            </div>
            <div class="hero-content-wrapper">
                <div class="content-header-container">
                    <h1>Bygningsingeniør, bæredygtig design & teknisk rådgivning.
                    </h1>
                </div>
                <div class="content-text-container">
                    <p>Har din virksomhed brug for hjælp til ovenstående eller andre opgaver indenfor byggeri og teknik. Vi har stærk erfaring i byggebranchen og ser hver en opgave som en enestående mulighed for at skille os ud fra konkurrenterne. <br><br>
                        Vi kan sørge for et stærkt samarbejde med god kommunikation og kunden taget i hånden fra start projekt til slut.</p>
                </div>
                <div class="content-buttons-container">
                    <a href="">Projekter</a> 
                    <a href="kontakt.html">Kontakt</a>
                </div>
            </div>
            <div class="hero-overlay-wrapper">
                <div class="overlay"></div>
            </div>
        </div>
    </section>

    <!-- offer section -->
        <HomepageProjects/>
        <Quote/>
        <UdvalgteProjekter/>

  </div>
  
</template>

<script>
import BackgroundVideo from '@/components/BackgroundVideo.vue';
export default {
  name: 'IndexPage',
  components: {
    BackgroundVideo,
  },
}
</script>

<style lang="scss">
  @import './assets/scss/homepage.scss';
  @import './assets/scss/quote.scss';
  @import './assets/scss/udvalgteprojekter.scss';
  @import './assets/scss/footer.scss';
</style>
