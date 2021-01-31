<template>
    <div class="table">
        <table>
            <thead>
                <tr>
                    <th v-for="( item, index ) in header" :key="index">{{ item }}</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="( item, index ) in content" :key="index">
                    <td v-for="( element, index ) in item.items" :key="index" :class="additionalClass( element.status )">
                        <template v-if="element.img">
                            <img :src="require(`@/assets/images/${element.img}`)" :alt="element.value">

                            <span>{{ element.value }}</span>
                        </template>

                        <template v-else-if="element.status">
                            <span>{{ element.value }}</span>
                        </template>

                        <template v-else>{{ element.value }}</template>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
export default {
    name: 'BaseTable',
    components: {
    },
    props: {
        content: {
            default: null,
            type: Object
        },
        header: {
            default: null,
            type: Array
        },
        status: {
            default: null,
            type: String
        }
    },
    setup() {
        function additionalClass( status: string ): string {
            return status ? `status status--${ status }` : '';
        }

        return { additionalClass }
    }
}
</script>


<style lang="scss">
.table {
    overflow: auto;
    border: $border;
    border-radius: $border-radius-sm;
    padding-bottom: rem(24);

    table {
        width: 100%;
        border-collapse: collapse;

        thead {
            background-color: $color-secondary-lighten;
            width: 100%;

            th {
                font-size: rem(16);
                padding: rem(20) rem(18);
                line-height: 1.5;
                color: $font-color-primary;
                font-weight: normal;
                text-align: left;
            }
        }

        tbody {
            tr {
                td {
                    font-size: rem(14);
                    font-weight: normal;
                    line-height: 1.71;
                    color: $color-secondary-dark;
                    position: relative;
                    padding: rem(16) rem(18);
                    min-width: rem(220);

                    &:after {
                        content: " ";
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        height: rem(1);
                        left: 0;
                        background-color: $color-secondary-lighten;
                    }

                    &:first-child {
                        min-width: rem(600);

                        &:after {
                            left: rem(18);
                        }
                    }

                    &:last-child {
                        &:after {
                            left: rem(-18);
                        }
                    }

                    img {
                        float: left;
                        padding-right: rem(15);
                    }

                    span {
                        top: rem(3);
                        position: relative;
                    }

                    &.status {
                        padding-left: rem(35);

                        &:before {
                            left: rem(16);
                            position: absolute;
                            content: '\2022';
                            color: #ebedee;
                        }

                        &.status--success {
                            &:before {
                                color: $color-success;
                            }
                        }

                        &.status--warning {
                            &:before {
                                color: $color-warning;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
