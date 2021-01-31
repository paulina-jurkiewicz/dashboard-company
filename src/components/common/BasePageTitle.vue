<template>
    <h1>{{ title }}</h1>
</template>

<script>
export default {
    name: 'BasePageTitle',
    props: {
        title: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss">
h1 {
    font-weight: 400;
    font-size: rem(24);
    line-height: 1.33;
    color: $font-color-primary;
    margin: 0;
}
</style>
