<template>
    <div id="app" class="app">

        <main class="app__main">
            <router-view />
        </main>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App'
});
</script>

<style lang="scss" scoped>
.app {
    background-color: $main-bg-color;
    padding: rem(56) rem(48);
}
</style>
