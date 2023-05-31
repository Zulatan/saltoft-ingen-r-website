<template>
  <div>
    <div class="form-container">
      <ContactForm />
    </div>
    <div class="map-container">
      <GoogleMap />
    </div>
  </div>
</template>

<script>

export default {
  name: 'ContactPage',
  data () {
    return {
      name: '',
      message: '',
      subject: '',
      from: '',
      show: true,
      passwordType: 'password'
    }
  },
  head () {
    return {
      title: 'Kontakt | Saltoft Ingeniør A/S',
      meta: [
        { hid: 'description', name: 'description', content: 'Kontakt Saltoft Ingeniør gennem for kontaktformular eller ring direkte til os. Find og på Google Maps.' },
        { name: 'keywords', content: 'Kontakt os, kontantformular, Google Maps, Lokation, Telefonnummer, ring til os' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { property: 'og:title', content: 'Saltoft Ingeniør, byggeteknisk virksomhed' },
        { property: 'og:description', content: 'Kontakt Saltoft Ingeniør via vores kontaktformular eller ring direkte til os.' },
        { name: 'robots', content: 'index, follow' }
      ]
    }
  },
  plugins: [
    '../plugins/form.js'
  ],
  methods: {
    displayOutput (response) {
      console.log(response)
    },
    sendEmail () {
      const self = this
      this.$axios
        .post('http://mikkel.sunland.dk/s4/public/emails/sendgrid', {
          subject: self.subject,
          name: self.name,
          from: self.from,
          message: self.message
        })
        .then(response => self.displayOutput(response))
        .catch(err => console.log(err))
    }
    // toggleShow() {
    //   this.show = !this.show;
    // },
    // togglePasswordVisibility() {
    //   this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    // }
  }
}
</script>

<style lang="scss">
  @import './assets/scss/form.scss';
</style>
