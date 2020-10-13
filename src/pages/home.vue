<template>
<div>
    home
    <nav-header></nav-header>
    <router-view></router-view>//路由匹配到的组件将渲染在这里
    <nav-footer></nav-footer>

</div>
</template>

<script>
import navHeader from './../components/navHeader'
import navFooter from './../components/navFooter'
export default {
    name: 'home',
    components: {
        navHeader,
        navFooter
    }

}
</script>
