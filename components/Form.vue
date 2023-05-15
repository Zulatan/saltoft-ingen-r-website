<template>
  <div>
    <div class="form" v-if="!emailsent">
      <div class="form-container">
        <p>{{errormessage}}</p>
        <div class="name-container">
          <div class="input-wrapper">
            <p>*Name</p>
            <div class="input-container-1">
              <input v-model="firstName" type="text">
            </div>
          </div>
          <div class="input-wrapper">
            <p>*Efternavn</p>
            <div class="input-container-1">
              <input v-model="lastName" type="text">
            </div>
          </div>
        </div>
        <div class="input-wrapper">
          <p>*Fra</p>
          <div class="input-container-2">
            <input v-model="from" type="text">
          </div>
        </div>
        <div class="input-wrapper">
          <p>Emne</p>
          <div class="input-container-3">
            <input v-model="subject" type="text">
          </div>
        </div>
        <div class="input-wrapper">
          <p>*Din besked</p>
          <div class="input-container-4">
            <textarea v-model="message">
            </textarea>
          </div>
        </div>
        
        <div class="button-container">
          <button v-on:click="sendEmail()">Send Message</button>
        </div>
        <!-- <p>{{errormessage}}</p> -->
      </div>
      <div v-if="emailsent">Thank you for your message. We will get back to you as soon as possible!</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
        firstName: '',
        lastName: '',
        message: '',
        subject: '',
        from: '',
        emailsent: false,
        errormessage: ''
    }
  },
   watch: {
    '$data.from': {
      handler: function(newValue) {
        // this.password();
      },
      deep: true
    },
    '$data.name': {
      handler: function(newValue) {
        // this.password();
      },
      deep: true
    }
  },
  methods:{
    displayOutput(response) {
        console.log(response);
        this.emailsent = true;
    },
    checkData(){
        if(this.firstName == ''){
            return 'Navn skal udfyldes.';
        }
        if(this.lastName == ''){
            return 'Efternavn skal udfyldes.';
        }
        if(this.from == ''){
            return 'Fra skal udfyldes.';
        }
        if(this.subject == ''){
            return 'Emne skal udfyldes.';
        }   
        if(this.message == ''){
            return 'Besked skal udfyldes.';
        }
        return true;
    },
     sendEmail () {
      let self = this;
        if(self.checkData() != true){
            self.errormessage = self.checkData();
            return;
        }
        self.errormessage = '';

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
    checkSpecialChar(e) {
        let specialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        return specialCharacter.test(e);
    },
    // isLowerCase() {
    //     let lowerCaseLetters = /[a-z]/g;
    //     if(input.value.match(lowerCaseLetters)) {
    //         return true;
    //     } 
    //     return false;
    // },

    // isUpperCase() {
    //     let upperCaseLetters = /[A-Z]/g;
    //     if(input.value.match(upperCaseLetters)) {
    //         return true;
    //     }
    //     return false;
    // },
    // showHideBtn() {
    //     var x = document.getElementById("passwordInput");
    //     var y = 'Show';
    //     var z = 'Hide';
    //     if (x.type === "password") {
    //         document.getElementById("buttonShowHide").textContent = z;
    //     x.type = "text";
    //     } else {
    //         document.getElementById("buttonShowHide").textContent = y;
    //     x.type = "password";
    //     }
    // }
  }
}
</script>

<style>
</style>