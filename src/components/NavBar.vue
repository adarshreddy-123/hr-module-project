<template>
  <div class="d-flex main-div justify-content-between">
    <div>
      <img class="comp-Logo ms-lg-2 img-fluid" src="../assets/company logo.png">
      <select class="border-0 p-2 m-2 rounded-2">
        <option>CaratRed Technologies LLP</option>
        
      </select>
    </div>
    <div>
      <router-link to="/"> <button class="border-0 btn-primary  rounded-3 p-2 m-2" type="button">Log Out</button></router-link>
    </div>
  </div>
  
</template>
<style scoped>
select {
  background-color: #eeefff;
  width: 14vw;
}

.main-div {
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.267);
  position: sticky;
  z-index: 1000;
  top: 0px;
}
.comp-Logo{
  width: 135px;
}
</style>