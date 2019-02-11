<template>
    <div>
        <h4>Image list</h4>
        <img v-for="image in allImages" :src="image.link" class="thumbnail" height="70" width="100" />
    </div>    
</template>

<script>
import MapActions,{ mapActions, mapGetters } from 'vuex';

export default {
    name : 'ImageList',
    methods : {
        ...mapActions(['fetchImages'])       
    },
    created () {
        this.fetchImages();
    },
    computed : {
         ...mapGetters(['allImages'])
    }
}
</script>

