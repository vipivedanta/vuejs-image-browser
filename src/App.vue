<template>
    <div class="container">
        <AppHeader></AppHeader>
        <router-view></router-view>
    </div>
</template>

<script>

import AppHeader from './components/templates/AppHeader';

export default {
    name : 'App',
    components : {
        AppHeader
    }
}
</script>

<style>

</style>
