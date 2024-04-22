<template>
  <NavBar />
  <div class="container-fluid">
    <div class="row">
      <div class="col-2"><SideBar /></div>
      <div class="col-10">
        <!-- <SearchBar /> -->
        <img class="img" src="../assets/Group 383.jpg" />
      </div>
    </div>
  </div>
</template>
<script setup>
import NavBar from "./NavBar.vue";
import SideBar from "./SideBar.vue";
</script>
<style scoped>
.img {
  height: 600px;
  width: 600px;
  position: relative;
  top: 18%;
  left: 32%;
}
</style>
