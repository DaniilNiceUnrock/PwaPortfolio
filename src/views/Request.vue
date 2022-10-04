<template>
  <div>
    <Header/>
    
      <div class="request">
        <form @submit.prevent="sendData" class="request_form">
            <h2 class="request_h2"> Submit your application</h2>
            <input v-model="name" id="name" type="text" class="request_form__name" placeholder="Name"  required>
            <input v-model="email" id="email" type="email" class="request_form__email" placeholder="E-mail"  required>  
            <masked-input v-model="phone" mask="\+\7 (111) 111-11-11" placeholder="Phone"  class="request_form__phone" required/>
            <input v-model="address" id="address" type="text" class="request_form__address" placeholder="Address"  required>   
            
            <input type="submit" class="request_form__send" value="Send" placeholder="">
        </form>
      </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Swal from 'sweetalert2'
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
  data() {
    return {   
      name: '',
      email: '',
      address: '',
      phone: '',
      
    }
  },
  components: {
    MaskedInput: () => import("vue-masked-input"),

    Header: () => import("@/components/Header/Header"),
    Footer: () => import("@/components/Footer/Footer"),
  },
  setup () {
    return { v$: useVuelidate() }
  },
  validations () {
    return {
      name: { required }, // Matches this.firstName
      email: { required }, // Matches this.lastName\
      phone: { required }, // Matches this.contact.email
      address: { required }, // Matches this.contact.email
    }
  },
  
methods: {
  async sendData() {
    console.log(
       await axios({
        url: 'https://rest.ponomarevdaniil.ru/api/request',
        method: 'post',
        data: {
          name: this.name,
          email: this.email,
          address: this.address,
          phone: this.phone,
      }})
      
    )
    Swal.fire(
      'Successfully!',
      'Click "ok" to go to the main page!',
      'Success'
    ).then(() => {
      this.$router.push('/'); 
    });

  },

}
  
}
</script>

<style scoped lang="scss" src="@/assets/scss/Request/index.scss">
