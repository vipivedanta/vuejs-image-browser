<template>
   <div class="row app-header">
       <div class="col-md-3">
           <h4>Image Browser</h4>
       </div>

       <div class="col-md-9">
            <nav class="navbar navbar-expand-lg">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                
                <li v-if="!isLoggedIn" class="nav-item active">
                    <a class="nav-link" href="#" @click="login">Login</a>
                </li>

                <li v-if="isLoggedIn" class="nav-item">
                    <a class="nav-link" href="#">Upload images</a>
                </li>

                <li v-if="isLoggedIn" class="nav-item">
                    <a class="nav-link" href="#">Browse Images</a>
                </li>

                <li v-if="isLoggedIn" class="nav-item">
                    <a class="nav-link" href="#" @click="logout">Logout</a>
                </li>
               
              </ul>
            </div>
</nav>
       </div>
   </div> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name : 'AppHeader',
    methods : {
        ...mapActions(['login','logout'])
    },
    computed : {
        ...mapGetters(['isLoggedIn'])
    }
}
</script>

<style>
.app-header{
    background-color: antiquewhite;
    padding: 10px;
}
</style>
