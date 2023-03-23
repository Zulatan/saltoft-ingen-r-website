<template>
  <div>
    <h1>rdy</h1>
    <input type="text" v-model="name">
    <input type="text" v-model="subject">
    <input type="text" v-model="message">
    <input type="text" v-model="from">
    <button v-on:click="getDataFraSymfony()">Klik på mig</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
    data(){
    return{
      name: '',
      message: '',
      subject: '',
      from: ''
    }
  },
methods: {
    sendEmail(){
      let self = this;
      axios
      .post("http://mikkel.sunland.dk/s4/public/emails/sendgrid", {
        subject: self.subject,
        name: self.name,
        from: self.from,
        message: self.message
      })
      .then((response) => displayOutput(response))
      .catch((err) => console.log(err));
    }
  }
}
</script>