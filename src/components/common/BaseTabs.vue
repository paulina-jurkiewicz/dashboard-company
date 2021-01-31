<template>
    <div class="tabs">
        <ul class="tabs__nav">
            <li @click="handleSelectTab( item.id )" v-bind:class="{ 'active': isActive( item.id ) }" v-for="( item, index ) in description" :key="index">{{ item.title }}</li>
        </ul>

        <div class="tabs__content">
           <BaseTable :content="selectedTabContent().content" :header="selectedTabContent().header"/>
        </div>
    </div>
</template>

<script lang="ts">
import BaseTable                                from '@/components/common/BaseTable.vue';
import { reactive, toRefs }                     from 'vue';
import { DashboardDescription }                 from '@/interfaces/DashboardDescription';

export default {
    name: 'BaseTabs',
    components: {
        BaseTable
    },
    props: {
        description: {
            type: Array,
            default: null
        }
    },
    setup( props: any ) {
        const state = reactive({
            activeTab: 1
        })

        function isActive( id: number ): boolean {
            return id === state.activeTab;
        }

        function handleSelectTab( id: number ): void {
            state.activeTab = id;
        }

        function selectedTabContent() {
            return props.description.find(( item: DashboardDescription ) => item.id === state.activeTab );
        }

        return { ...toRefs( state ), isActive, handleSelectTab, selectedTabContent }
    }
}
</script>


<style lang="scss">
.tabs {
    &__nav {
        margin: 0 0 rem(24) 0;
        padding: 0;
        display: flex;
        position: relative;

        @include media-medium-up() {
            margin-left: rem(424);
        }

        &:after {
            content: " ";
            position: absolute;
            bottom: rem(-1);
            width: 120%;
            height: rem(1);
            background-color: $color-secondary-lighten;
        }

        li {
            cursor: pointer;
            font-size: rem(16);
            font-weight: normal;
            line-height: 1.5;
            color: $color-secondary-dark;
            list-style: none;
            padding: 0 rem(24) rem(19) rem(24);

            &.active {
                border-bottom: $border-active;
                color: $font-color-primary;
            }
        }
    }

    &__content {
    }
}
</style>
