<template>
  <div class="bg-img">
    <div class="input-div p-5">
      <h3 class="text-center"><b>Log In</b></h3>
      <div class="input-box">
        <span class="icon"><i class="bi bi-envelope-fill"></i></span>
        <input type="text" class=" text-white " id="name"  v-model="formDetails.name"
          @input="validatename" :class="{ 'is-invalid': errors.name }" />
          <label>Email</label>
        <div class="invalid-feedback" v-if="errors.name">
          {{ errors.name }}
        </div>
      </div>

      <div class="input-box mt-5">
        <span class="icon"><i class="bi bi-lock-fill"></i></span>
        <input class="text-white"  type="password" id="password" v-model="formDetails.password"
          @input="validatepassword" :class="{ 'is-invalid': errors.password }" />
          <label>Password</label>
        <div class="invalid-feedback" v-if="errors.password">
          {{ errors.password }}
        </div>
      </div>
      <router-link to="HomePage">
        <button type="submit" class="border-0 button w-100 text-white rounded-1"
          :disabled="!formDetails.name || !formDetails.password">
          Log In
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
      item: [],
      formDetails: {
        name: "",
        password: "",
      },
      errors: {},
    };
  },
  methods: {
    validatename() {
      if (!this.formDetails.name) {
        this.errors.name = "Please Enter Valid Email Address *";
      } else if (!this.formDetails.name.includes("@gmail.com")) {
        this.errors.name = "Invalid Email Format";
      } else {
        delete this.errors.name;
      }
    },
    validatepassword() {
      if (!this.formDetails.password) {
        this.errors.password = "Please Enter Password *";
      } else {
        delete this.errors.password;
      }
    },
  },
};
</script>

<style scoped>
.bg-img {
  /* background-color: white; */
  background-image: url(../assets/bg-img.avif);
  background-size: 100vw 100vh;
  width: 100vw;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-div {
  background: transparent;
  backdrop-filter: blur(10px);
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(219, 216, 216, 0.2),
    0 -7px 20px 0 rgba(226, 190, 190, 0.19) inset;
}

input {
  padding: 7px;
  margin-top: 16px;
  border-radius: 6px;
}

button {
  padding: 9px;
  margin-top: 25px;
  background-color: rgb(231, 90, 90);
  font-weight: bold;
}
.input-box{
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid white;
  margin: 30px 0;
}
.input-box label{
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  font-size: 1em;
  color: white;
  font-weight: 500;
  pointer-events: none;
  transition: .5s;
}

.input-box input:focus~label,.input-box input:valid~label{
  top: 10px;
}
.input-box input{
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  font-weight: 600;
  padding: 0 35px 0 5px;
}
.input-box .icon{
position: absolute;
right: 8px;
font-size: 1.2em;
color:white ;
line-height: 57px;
}
</style>


methods: {
  async postData() {
      try {
          const response = await axios.post('http://your-api-endpoint.com', {
              item_code: this.details.item_code,
              totalPurchaseRate: this.totalPurchaseRate,
              totalQuantity: this.totalQuantity
          });

          // Handle response
          console.log('Data posted successfully:', response.data);
      } catch (error) {
          // Handle error
          console.error('Error posting data:', error);
      }
  },
  // Other methods in your component
}