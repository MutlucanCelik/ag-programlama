<template>
   <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <!-- Sidebar - Brand -->
            <a class="sidebar-brand d-flex flex-column align-items-center justify-content-center" href="" style="height:max-content">
                <div class="sidebar-brand-icon mb-3">
                    <i class="fas fa-network-wired"></i>
                </div>
                <div class="sidebar-brand-text mx-3">Ağ Programlama</div>
            </a>

            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <li class="nav-item active">
                <router-link :to="{name:'Dashboard'}" class="nav-link" href="">
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Gösterge paneli</span></router-link>
            </li>
            <li class="nav-item active">
                <router-link :to="{name:'Analysis'}" class="nav-link" href="">
                    <i class="fa-solid fa-magnifying-glass-chart"></i>
                    <span>Analizler</span></router-link>
            </li>
            <li class="nav-item active">
                <router-link :to="{name:'Form'}" class="nav-link" href="">
                    <i class="fa-brands fa-wpforms"></i>
                    <span>Form</span></router-link>
            </li>


            <!-- Divider -->
            <hr class="sidebar-divider">


    </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>