<template>
  <div>
    <h1>rdy</h1>
    <input v-model="name" type="text">
    <input v-model="subject" type="text">
    <input v-model="message" type="text">
    <input v-model="from" type="text">
    <button v-on:click="sendEmail()">Klik på mig</button>
  </div>
</template>

<script>
export default {
    layout: 'noheader',
    name: 'ContactPage',
    data () {
    return {
      name: '',
      message: '',
      subject: '',
      from: ''
    }
  },
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
    }
  }
}
</script>

<style lang="scss">
</style>
