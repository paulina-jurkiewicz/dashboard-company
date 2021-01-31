<template>
   <div class="base-icon" v-bind:class="variant">
       <slot></slot>
   </div>
</template>

<script>
    export default {
        name: 'BaseIcon',
        props: {
            variant: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .base-icon {
        width: rem(52);
        height: rem(52);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: $border-rounded;

        &.info {
            background-color: $color-info-light;
        }

        &.success {
            background-color: $color-success-light;
        }

        &.warning {
            background-color: $color-warning-light;
        }

        &.extra {
            background-color: $color-extra-light;
        }
    }
</style>
