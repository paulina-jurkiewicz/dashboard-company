<template>
    <BaseBox className="without-padding">
        <div class="box-files">
            <div class="box-files__top">
                <div class="box-files__title">Files</div>

                <BaseButton variant="primary only-icon" @click="$toast.show(`Feature in progress`)"><IconUpload /></BaseButton>
            </div>


            <div class="box-files__content">
                <div class="content__title">RECENTLY ADDED</div>

                <div class="content__items">
                    <BaseThumbnailFile size="lg" :file="lastAddedFile()"/>

                    <BaseThumbnailFile size="sm" v-for="( item, index ) in otherFiles()" :key="index" :file="item"/>
                </div>
            </div>
        </div>
    </BaseBox>
</template>


<script lang="ts">
import BaseBox              from '@/components/common/BaseBox';
import BaseButton           from '@/components/common/BaseButton';
import BaseThumbnailFile    from '@/components/common/BaseThumbnailFile';
import IconUpload           from '@/components/icons/IconUpload';

export default {
    name: 'BoxFiles',
    components: { BaseBox, BaseButton, IconUpload, BaseThumbnailFile },
    props: {
        files: {
            type: Array,
            default: null
        }
    },

    setup( props: any ) {
        function lastAddedFile() {
            return props.files[0];
        }

        function otherFiles() {
            return props.files.slice( 1, 7 );
        }

        return { lastAddedFile, otherFiles }
    }
}
</script>

<style scoped lang="scss">
    .box-files {
        position: relative;

        &__top {
            padding: rem(20) rem(22);
            border-bottom: $border;
        }

        &__content {
            padding: rem(20) rem(22);

            .content {
                &__title {
                    font-size: rem(12);
                    font-weight: 600;
                    line-height: 1.33;
                    color: $color-secondary-darken;
                    padding-bottom: rem(15);
                }

                &__items {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    position: relative;

                    @include media-smaller-up() {
                        padding-left: rem(151);
                        max-width: rem(200);
                    }

                    @include media-medium-up() {
                        padding-left: rem(130);
                    }

                    @include media-large-up() {
                        padding-left: rem(150);
                    }
                }
            }

            .file {
                margin: rem(5) 0;

                &:first-child {
                    @include media-smaller-up() {
                        position: absolute;
                        left: 0;
                        width: rem(126);
                        height: rem(126);

                        ::v-deep .lg {
                            width: 126px;
                            min-height: 126px;

                            svg {
                                width: rem(51);
                                height: rem(51);
                            }
                        }
                    }
                }
            }

            .file {
                flex: 0 33%;
                justify-content: flex-end;
                display: flex;
                height: rem(51);

                @include media-smaller-up() {
                    justify-content: center;
                }

                 &:nth-child(-n+3) {
                     @include media-smaller-up() {
                         margin-bottom: rem(20);
                     }
                }
            }
        }

        button {
            position: absolute;
            right: rem(22);
            top: rem(20);
        }
    }
</style>
