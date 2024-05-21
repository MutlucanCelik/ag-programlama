<template>
  <div id="wrapper">
    <Sidebar/>
    <div id="content-wrapper" class="d-flex flex-column">
        <Header/>
        <router-view></router-view>
    </div>
     
  </div>
 
</template>


<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'


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
