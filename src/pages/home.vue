<template>
<div>
    home
    <nav-header></nav-header>
    <!--路由匹配到的组件将渲染在这里-->
    <router-view></router-view>
    <nav-footer :msga='name'></nav-footer>
    <p :style="fontColor" :class="[{'active':count>10},'more',{'than':name=='dean'}]">{{name}}</p>

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
    },
    data() {
        return {
            name: 'dean',
            fontColor: {
                color: 'red'
            },
            count: 11
        }
    },
    watch: {
        name(newname, old) {
            console.log('newname:' + newname);
            console.log('oldname:' + old);
        }
    }
}
</script>
