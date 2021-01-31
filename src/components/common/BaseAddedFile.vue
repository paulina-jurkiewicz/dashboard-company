<template>
    <div class="file">
        <div class="file__content" v-bind:class="[ size, type ]">

            <a :href="href"><slot></slot></a>
        </div>
    </div>
</template>


<script>
export default {
    name: 'BaseAddedFile',
    components: {  },
    props: {
        type: {
            default: null,
            type: String
        },
        size: {
            default: null,
            type: String
        },
        href: {
            default: null,
            type: String
        }
    }
}
</script>

<style scoped lang="scss">
    .file {
        &__content {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: $border-radius-sm;
            cursor: pointer;

            a {
                display: inherit;
            }

            &.sm,
            &.lg {
                width: rem(51);
                max-height: rem(51);

                img {
                    width: 100%;
                }
            }

            &.pdf {
                background-color: $pdf-color;
            }

            &.docx {
                background-color: $docx-color;
            }

            &.csv {
                background-color: $csv-color;
            }
        }
    }
</style>
