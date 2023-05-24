<template>
  <div>
    <div class="form-container">
      <Form/>
    </div>
    <div class="map-container">
      <GoogleMap/>
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
      passwordType: 'password',
    }
  },
    plugins: [
    '../plugins/form.js'
  ],
  methods: {
    displayOutput(response) {
        console.log(response)
    },
    sendEmail () {
      let self = this;
        this.$axios
      .post("http://mikkel.sunland.dk/s4/public/emails/sendgrid", {
        subject: self.subject,
        name: self.name,
        from: self.from,
        message: self.message
      })
      .then((response) => self.displayOutput(response))
      .catch((err) => console.log(err));
    },
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
