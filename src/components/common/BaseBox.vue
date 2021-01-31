<template>
    <div class="base-box" :class="className">
        <slot></slot>
    </div>
</template>


<script>
export default {
    name: 'BaseBox',
    props: {
        className: {
            type: String,
            default: null,
            require: false
        }
    }
}
</script>

<style scoped lang="scss">
    .base-box {
        border-radius: $border-radius-sm;
        position: relative;
        background-color: #fff;
        padding: rem(20) rem(22);
        margin-bottom: rem(24);
        box-sizing: border-box;

        &.without-padding {
            padding: 0;
        }

        &.overflow-hidden {
            overflow: hidden;
        }

        &.primary-gradient {
            background-image: linear-gradient(252deg, #a065e0, #2b8ff4);
        }

        &.empty {
            background-color: transparent;
            border: $border-dashed;
            cursor: pointer;
        }
    }
</style>
