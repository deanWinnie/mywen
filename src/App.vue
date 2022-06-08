<template>
<div id="app">
    <p class="fontColor">this is for you</p>
    <p>添加的新值：{{newProp}}</p>
    <p>用户名：{{username}}</p>
    <p>数量：{{cartCount}}</p>
    <input type="text" v-model="addMsg">
    <div><button @click="addNewProp">添加新值</button></div>
    <ul>
        <li v-for="(item,index) in data " :key="index">
            <img v-lazy="item.cover" alt="" width="269" height="384">
        </li>
    </ul>
    <router-view></router-view>
</div>
</template>

<script>
console.log('1');
setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})
setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
import storage from './storage'
import {
    mapState
} from 'vuex'

// import {
//     mapActions
// } from 'vuex'
export default {
    name: 'app',
    data() {
        return {
            data: '',
            imgurl: 'imgs/wallhaven.jp',
            addMsg: ''

        }
    },
    computed: {
        /**
        方法一
         */
        // newProp() {
        //     return this.$store.state.newProp || '还没添加新值';
        // },
        // username() { 
        //     return this.$store.state.username;
        // },
        // cartCount() {
        //     return this.$store.state.cartCount;
        // }
        /**
        方法二
         */
        ...mapState(['newProp', 'username', 'cartCount'])
    },
    mounted() {
        console.log(storage.getItem('username', 'user'));
        let url = '/api/j/search_subjects';
        this.axios.get(url, {
            params: {
                type: 'movie',
                tag: '热门'
            }
        }).then((res) => {
            this.data = res.data.subjects;
        })
    },
    methods: {
        addNewProp() {
            /**方法二 */
            // this.addNewState(this.addMsg);
            // this.saveUserName('winnie');
            // this.saveCartCount('22');
            /**
            方法一
             */
            this.$store.dispatch('addNewState', this.addMsg)
            this.$store.dispatch('saveUserName', 'winnie')
            this.$store.dispatch('saveCartCount', '22')
        },
        /**方法二*/
        // ...mapActions(['addNewState', 'saveUserName', 'saveCartCount']),

    },
}
</script>

<style lang="scss">
@import './assets/scss/mixin.scss';

.bgimg {
    @include bgImg(960px, 510px, '/imgs/wallhaven.jpg')
}

li {
    float: left;

}
</style>
