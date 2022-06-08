<template>
<div>
    {{msga}}
    <button @click="handleClick"></button>
</div>
</template>

<script>
export default {
    name: 'nav-footer',
    props: [
        'msga'
    ],
    data() {
        return {
            mywen: 'winnie'
        }
    },
    methods: {
        handleClick() {
            this.$emit(this.mywen);
        }
    }

}
</script>
