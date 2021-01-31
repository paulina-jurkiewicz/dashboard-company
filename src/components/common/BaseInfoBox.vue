<template>
   <div class="base-info-box">
       <slot name="icon"></slot>

       <div class="box__title"><slot name="title"></slot></div>

       <div class="box__value"><slot name="value"></slot></div>
   </div>
</template>

<script>
    export default {
        name: 'BaseInfoBox'
    }
</script>

<style scoped lang="scss">
    .base-info-box {
        padding-left: rem(76);
        position: relative;
        min-height: rem(52);
        display: flex;
        align-items: baseline;
        flex-direction: column;
        justify-content: center;

        .base-icon {
            position: absolute;
            left: 0;
        }

        .box {
            &__title {
                font-size: rem(12);
                font-weight: 600;
                line-height: 1.33;
                color: $color-secondary-darken;
                margin-bottom: rem(4);
            }

            &__value {
                font-size: rem(20);
                line-height: 1.2;
                color: $font-color-primary;
            }
        }

    }
</style>
