<template>
<div id="app">
    1
    <router-view></router-view>
</div>
</template>

<script>
import storage from './storage'
export default {
    name: 'app',
    mounted() {
        console.log(storage.getItem('username', 'user'));
        storage.clear('sex', 'user');
    }
}
</script>

<style>

</style>
