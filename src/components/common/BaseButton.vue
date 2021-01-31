<template>
    <button class="button button-base" v-bind:class="variant">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'BaseButton',
        props: {
            variant: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped lang="scss">
    .button-base {
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: rem(12) rem(24);
        border: 0;
        border-radius: $border-radius-sm;
        font-size: rem(16);
        transition: all 0.3s ease;
        line-height: 1.5;

        svg {
            width: rem(20);
            margin-right: rem(5);
        }

       &.primary-gradient {
           ::v-deep span {
               background-image: linear-gradient(252deg, #a065e0, #2b8ff4);
               font-weight: 500;
               -webkit-background-clip: text;
               background-clip: text;
               -webkit-text-fill-color: transparent;
               transition: all 5s ease;
           }

           &:hover {
               ::v-deep span {
                   background-image: linear-gradient(0deg, #a065e0, #2b8ff4);
               }
           }
       }

        &.default {
            background-color: transparent;
            color: #fff;

            &:hover,
            &:active,
            &:focus {
              background-color: #fff;
                color: $color-info;
            }
        }

        &.only-icon {
            background-color: transparent;
            padding: 0;

        }

        &.secondary {
            background-color: $color-info-lighten;
            color: $color-info;
            border: 2px solid $color-info-lighten;

            &:hover,
            &:focus,
            &:active {
                background-color: transparent;

            }
        }

        &.secondary-outline {
            background-color: transparent;
            color: $color-info;
            border: 2px solid  $color-info-lighten;

            &:hover,
            &:focus,
            &:active {
                background-color: $color-info-lighten;
            }
        }
    }
</style>
