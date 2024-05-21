<template>
  <div>
    <router-view></router-view>
  </div>
</template>


<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'


export default {
  components: {
    Sidebar,
    Header
  },
  // Bileşenin diğer seçenekleri buraya gelebilir
}
</script>



<style>

</style>
